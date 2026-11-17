import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import * as M from '../src/model.mjs';
const data=JSON.parse(readFileSync(new URL('../data/fixtures.json',import.meta.url),'utf8'));
test('critical open gate blocks launch',()=>assert.equal(M.readiness(data).ready,false));test('all required gates pass without optional branding',()=>{const t=data.map(x=>({...x,done:x.required}));assert.equal(M.readiness(t).ready,true);assert.equal(M.readiness(t).percent,95);});test('completed dependent task detects unresolved prerequisite',()=>{const t=data.map(x=>({...x,done:x.id==='uat'||x.done}));assert.ok(M.readiness(t).invalid.includes('UAT accepted by the sponsor'));});test('empty plan is not launch ready',()=>assert.equal(M.readiness([]).ready,false));
