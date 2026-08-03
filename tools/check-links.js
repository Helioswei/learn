#!/usr/bin/env node
/* 全站链接检查：静态 href/src + SITE_NAV 生成的导航链接 */
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
global.window = globalThis;
require(path.join(root, 'site-nav.js'));
const SITE_NAV = window.SITE_NAV;

function walk(dir, out) {
  for (const f of fs.readdirSync(dir)) {
    if (['.git', 'node_modules', 'docs', 'tools'].includes(f)) continue;
    const p = path.join(dir, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (f.endsWith('.html')) out.push(p);
  }
}
const files = [];
walk(root, files);
let errors = 0;
const fail = (file, href) => { console.log('BROKEN: ' + path.relative(root, file) + ' -> ' + href); errors++; };

/* 1) 静态链接 */
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);
  const hrefs = [...html.matchAll(/(?:href|src)="([^"#]+)"/g)].map(m => m[1])
    .filter(h => h && !h.startsWith('http') && !h.startsWith('mailto') && !h.startsWith('//'));
  for (const h of hrefs) {
    const target = path.resolve(dir, decodeURIComponent(h));
    if (!fs.existsSync(target)) fail(file, h);
  }
}

/* 2) SITE_NAV 导航链接（按页面 data-* 推导，与 script.js 逻辑一致） */
function pad(n) { return (n < 10 ? '0' : '') + n; }
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);
  const track = /data-track="([^"]+)"/.exec(html);
  const chapter = /data-chapter="([^"]+)"/.exec(html);
  const dataRoot = /data-root="([^"]+)"/.exec(html);
  if (!dataRoot) continue;
  const rootPath = dataRoot[1];
  const trackId = track ? track[1] : null;
  const chapterNum = chapter ? chapter[1] : null;
  if (trackId) {
    const t = SITE_NAV.tracks.find(x => x.id === trackId);
    if (!t) { fail(file, '[unknown track ' + trackId + ']'); continue; }
    const links = [rootPath + 'index.html', rootPath + trackId + '/index.html'];
    SITE_NAV.tracks.forEach(tk => {
      tk.parts.forEach(p => p.chapters.forEach(c => {
        const href = rootPath + tk.id + '/chapter' + pad(c.num) + '.html';
        links.push(href);
      }));
    });
    const flat = [];
    t.parts.forEach(p => p.chapters.forEach(c => flat.push(c)));
    const idx = flat.findIndex(c => c.num === parseInt(chapterNum, 10));
    if (idx > 0) links.push(rootPath + trackId + '/chapter' + pad(flat[idx - 1].num) + '.html');
    if (idx >= 0 && idx < flat.length - 1) links.push(rootPath + trackId + '/chapter' + pad(flat[idx + 1].num) + '.html');
    for (const l of links) {
      const target = path.resolve(dir, decodeURIComponent(l));
      if (!fs.existsSync(target)) fail(file, l);
    }
  }
}

if (errors) { console.log('FAIL: ' + errors + ' broken link(s)'); process.exit(1); }
console.log('OK: all links resolve');
