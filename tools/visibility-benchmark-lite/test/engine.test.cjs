const test=require("node:test");const assert=require("node:assert/strict");const {parseCSV,analyze}=require("../benchmark-core.js");
const h="query_id,run_id,surface,surface_present,query_type,mentions,recommendations,citations\n";
test("validates missing columns",()=>assert.throws(()=>parseCSV("query_id\nx\n"),/Missing column/));
test("rejects duplicate observation",()=>assert.throws(()=>parseCSV(h+"a,r,AI,1,main,A,A,x.org\n"+"a,r,AI,1,main,A,A,x.org\n"),/Duplicate/));
test("rejects absent surface containing entities",()=>assert.throws(()=>parseCSV(h+"a,r,AIO,0,main,A,,\n"),/Absent/));
test("rejects a recommendation not mentioned",()=>assert.throws(()=>parseCSV(h+"a,r,AI,1,main,A,B,\n"),/without mention/));
test("rejects inconsistent query type",()=>assert.throws(()=>parseCSV(h+"a,r,AI,1,main,,,\n"+"a,r,B,1,control,,,\n"),/Inconsistent/));
test("supports quoted commas, escaped quotes, CRLF",()=>{const r=parseCSV(h+"a,r,\"AI, Mode\",1,main,\"A \"\"Name\"\"\",\"A \"\"Name\"\"\",example.org\r\n");assert.equal(r[0].surface,"AI, Mode");assert.equal(r[0].mentions.size,1);});
test("conditional and unconditional denominators are distinct",()=>{const x=analyze(parseCSV(h+"a,r,AIO,0,main,,,\n"+"b,r,AIO,1,main,Alpha,Alpha,alpha.example\n"+"seed,r,AIO,1,control,Seed,Seed,seed.example\n")).surfaces[0];assert.equal(x.observations,3);assert.equal(x.main_observations,2);assert.equal(x.main_active,1);assert.equal(x.brand_any_all_pct,50);assert.equal(x.brand_any_active_pct,100);assert.equal(x.presence_pct,66.67);assert.equal(x.top_mentioned_brands.length,1);});
test("deduplicates case-insensitive entity values per observation",()=>{const x=analyze(parseCSV(h+"a,r,AI,1,main,Alpha|alpha,Alpha,abc.org|ABC.ORG\n")).surfaces[0];assert.equal(x.top_mentioned_brands[0].observations,1);assert.equal(x.top_cited_domains.length,1);});
test("missing active denominator is null, not zero",()=>{const x=analyze(parseCSV(h+"a,r,AIO,0,main,,,\n")).surfaces[0];assert.equal(x.brand_any_active_pct,null);});

test("synthetic sample fixture remains valid and contains all three surfaces",()=>{
  const fs=require("node:fs"),path=require("node:path");
  const file=path.join(__dirname,"../sample.csv");
  const rows=parseCSV(fs.readFileSync(file,"utf8"));
  const report=analyze(rows);
  assert.equal(report.total_observations,15);
  assert.equal(report.surfaces.length,3);
  const aio=report.surfaces.find(s=>s.surface==="Google AI Overview");
  assert.equal(aio.main_observations,4);
  assert.equal(aio.main_active,2);
  assert.equal(aio.brand_any_all_pct,50);
  assert.equal(aio.brand_any_active_pct,100);
});
test("HTML demo uses the identical synthetic data and references local engine",()=>{
  const fs=require("node:fs"),path=require("node:path");
  const html=fs.readFileSync(path.join(__dirname,"../index.html"),"utf8");
  const sample=fs.readFileSync(path.join(__dirname,"../sample.csv"),"utf8").trim();
  assert.ok(html.includes('<script src="benchmark-core.js"></script>'));
  assert.ok(html.includes(sample));
  assert.ok(html.includes('id="file"'));
  assert.ok(html.includes('id="export"'));
  assert.ok(!/<script[^>]+src=["']https?:/i.test(html));
});
test("rejects malformed quotes and incorrect field counts",()=>{
  assert.throws(()=>parseCSV(h+'a,r,"unfinished,1,main,,,\n'),/Unterminated/);
  assert.throws(()=>parseCSV(h+"a,r,AI,1,main,A,A\n"),/incorrect number/);
});
