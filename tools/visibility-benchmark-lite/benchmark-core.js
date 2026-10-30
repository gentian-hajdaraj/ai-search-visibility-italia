/* Visibility Benchmark Lite — structured observation analysis. No scraping or remote requests. */
(function(root,factory){var api=factory();if(typeof module==="object"&&module.exports)module.exports=api;if(root)root.VisibilityBenchmark=api;})(typeof window!=="undefined"?window:undefined,function(){
"use strict";
var columns=["query_id","run_id","surface","surface_present","query_type","mentions","recommendations","citations"];
function csvRows(s){
 s=String(s||"").replace(/^\uFEFF/,"");var lines=[],row=[],field="",quoted=false;
 for(var i=0;i<s.length;i++){
  var c=s[i];
  if(quoted){if(c==='"'&&s[i+1]==='"'){field+='"';i++;}else if(c==='"'){quoted=false;}else field+=c;}
  else if(c==='"'){if(field!=="")throw Error("Unexpected quote");quoted=true;}
  else if(c===","){row.push(field);field="";}
  else if(c==="\n"||c==="\r"){if(c==="\r"&&s[i+1]==="\n")i++;row.push(field);field="";if(row.some(x=>x.trim()))lines.push(row);row=[];}
  else field+=c;
 }
 if(quoted)throw Error("Unterminated CSV quote");
 row.push(field);if(row.some(x=>x.trim()))lines.push(row);return lines;
}
function names(s){var m=new Map();String(s||"").split("|").forEach(function(part){var name=part.trim().replace(/\s+/g," "),id=name.toLowerCase();if(id&&!m.has(id))m.set(id,name);});return m;}
function parseCSV(text){
 var table=csvRows(text);if(!table.length)throw Error("Empty CSV");
 var headers=table.shift().map(x=>x.trim());if(new Set(headers).size!==headers.length)throw Error("Duplicate CSV headers");
 columns.forEach(k=>{if(!headers.includes(k))throw Error("Missing column "+k);});
 var used=new Set(),types=new Map();
 var result=table.map(function(cells,i){
  if(cells.length!==headers.length)throw Error("Row "+(i+2)+": incorrect number of columns");
  var r={};headers.forEach((h,j)=>{r[h]=cells[j].trim();});
  ["query_id","run_id","surface"].forEach(k=>{if(!r[k])throw Error("Row "+(i+2)+": missing "+k);});
  if(!["0","1"].includes(r.surface_present))throw Error("Row "+(i+2)+": surface_present must be 0 or 1");
  if(!["main","control"].includes(r.query_type))throw Error("Row "+(i+2)+": query_type must be main or control");
  var id=JSON.stringify([r.query_id,r.run_id,r.surface]);
  if(used.has(id))throw Error("Duplicate query/run/surface on row "+(i+2));used.add(id);
  var qid=JSON.stringify([r.query_id,r.run_id]);
  if(types.has(qid)&&types.get(qid)!==r.query_type)throw Error("Inconsistent query_type across surfaces");
  types.set(qid,r.query_type);
  var mentions=names(r.mentions),recommendations=names(r.recommendations),citations=names(r.citations);
  if(r.surface_present==="0"&&(mentions.size||recommendations.size||citations.size))throw Error("Absent surface has entity values on row "+(i+2));
  recommendations.forEach((value,key)=>{if(!mentions.has(key))throw Error("Recommendation without mention on row "+(i+2));});
  return {query_id:r.query_id,run_id:r.run_id,surface:r.surface,present:r.surface_present==="1",type:r.query_type,mentions:mentions,recommendations:recommendations,citations:citations};
 });
 if(!result.length)throw Error("No data rows");return result;
}
function percentage(n,d){return d?Math.round(n/d*10000)/100:null;}
function add(map,values){values.forEach((v,k)=>{if(map.has(k))map.get(k).count++;else map.set(k,{label:v,count:1});});}
function top(map){return Array.from(map.values()).map(x=>({name:x.label,observations:x.count})).sort((a,b)=>b.observations-a.observations||a.name.localeCompare(b.name)).slice(0,10);}
function analyze(observations){
 if(!Array.isArray(observations)||!observations.length)throw Error("No observations");
 var map=new Map();
 observations.forEach(function(o){
  if(!map.has(o.surface))map.set(o.surface,{surface:o.surface,all:0,active:0,main:0,main_active:0,brands_any:0,recs_any:0,cites_any:0,brands:new Map(),recs:new Map(),domains:new Map()});
  var s=map.get(o.surface);s.all++;if(o.present)s.active++;if(o.type!=="main")return;
  s.main++;if(o.present)s.main_active++;if(o.mentions.size)s.brands_any++;if(o.recommendations.size)s.recs_any++;if(o.citations.size)s.cites_any++;
  add(s.brands,o.mentions);add(s.recs,o.recommendations);add(s.domains,o.citations);
 });
 return {schema_version:"1.0",description:"User-annotated data; no extraction/alias matching",total_observations:observations.length,surfaces:Array.from(map.values()).map(s=>({
  surface:s.surface,observations:s.all,surface_present:s.active,main_observations:s.main,main_active:s.main_active,
  presence_pct:percentage(s.active,s.all),brand_any_all_pct:percentage(s.brands_any,s.main),brand_any_active_pct:percentage(s.brands_any,s.main_active),
  recommendation_any_active_pct:percentage(s.recs_any,s.main_active),citation_any_active_pct:percentage(s.cites_any,s.main_active),
  top_mentioned_brands:top(s.brands),top_recommended_brands:top(s.recs),top_cited_domains:top(s.domains)
 }))};
}
return {parseCSV:parseCSV,analyze:analyze};
});
