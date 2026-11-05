#!/usr/bin/env node
/**
 * Generate the route list consumed by bug-sweep.mjs / bug-sweep-full.py.
 *
 * Usage:
 *   node scripts/build-routes.mjs
 *   SWEEP_ROUTES=/tmp/my-routes.json node scripts/build-routes.mjs
 */
import fs from 'node:fs';
import { MODULES, CHAPTERS } from '../modules/registry.js';

const SUBJECTS = ['bio', 'math', 'mech', 'em'];
const routes = new Set(['#/', '#/all', '#/paths', '#/credits', '#/pastpapers', '#/physics/formulas']);

for (const s of SUBJECTS) {
  routes.add(`#/${s}`);
  routes.add(`#/${s}/map`);
  routes.add(`#/${s}/formulas`);
  routes.add(`#/${s}/pastpapers`);
  for (const ch of CHAPTERS[s] || []) {
    routes.add(`#/${s}/${ch.id}`);
    routes.add(`#/${s}/practice/${ch.id}`);
    for (const t of ch.topics || []) {
      routes.add(`#/t/${s}/${ch.id}/${t.code}`);
    }
  }
}
for (const m of MODULES) routes.add(`#/m/${m.id}`);

const out = { routes: [...routes] };
const file = process.env.SWEEP_ROUTES || '/tmp/routes.json';
fs.writeFileSync(file, JSON.stringify(out, null, 2));
console.log(`routes=${out.routes.length} -> ${file}`);
