// Build per Vercel: copia il sito in dist/ e genera una pagina per ogni progetto
// (dist/progetti/<slug>.html, servita come /progetti/<slug>).
// Le pagine sono index.html con il progetto già scelto: nessun template da tenere allineato a mano.
// I progetti sono le righe dell'elenco in index.html; i testi vengono da progetti.js.
// Uso: node build.js  (nessuna dipendenza)
const fs = require('fs');
const vm = require('vm');

const OUT = 'dist';
const SITE = process.env.VERCEL_PROJECT_PRODUCTION_URL ? 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL : '';

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT + '/progetti', { recursive: true });
fs.cpSync('Assets', OUT + '/Assets', { recursive: true, filter: (f) => !f.endsWith('.DS_Store') });
fs.copyFileSync('progetti.js', OUT + '/progetti.js');

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync('progetti.js', 'utf8'), ctx);
const DATA = ctx.window.PROGETTI || {};

const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const unesc = (t) => t.replace(/&amp;/g, '&');

// i link #p-<slug> diventano vere pagine; i vecchi link con l'hash vengono reindirizzati
let src = fs.readFileSync('index.html', 'utf8')
  .replace(/href="#p-([a-z0-9-]+)"/g, 'href="/progetti/$1"')
  .replace("else if (v.indexOf('p-') === 0) document.documentElement.dataset.view = 'detail';",
           "else if (v.indexOf('p-') === 0) location.replace('/progetti/' + v.slice(2));");
fs.writeFileSync(OUT + '/index.html', src);

// righe dell'elenco (quelle con --o): slug, cover, nome, category
const rowRe = /<li class="work" data-slug="([^"]+)" style="--o:\d+">.*?src="([^"]+)".*?<span class="name"[^>]*>([^<]*)<\/span>(?:.*?<span class="cat">([^<]*)<\/span>)?/g;
let count = 0;
for (const [, slug, cover, nameHtml, catHtml] of src.matchAll(rowRe)) {
  const d = DATA[slug] || {};
  const name = unesc(nameHtml);
  const title = name + ' — Leonardo Taccone';
  const desc = d.overview || [d.subtitle, d.category || (catHtml && unesc(catHtml))].filter(Boolean).join(' · ') || 'Portfolio di Leonardo Taccone.';
  const image = (d.images && [].concat(d.images[0])[0]) || cover;
  const url = SITE + '/progetti/' + slug;
  const meta = [
    '<base href="/">',   // Assets/… e i link #vista puntano alla radice del sito
    '<title>' + esc(title) + '</title>',
    '<meta name="description" content="' + esc(desc) + '">',
    SITE ? '<link rel="canonical" href="' + url + '">' : '',
    '<meta property="og:type" content="article">',
    '<meta property="og:title" content="' + esc(title) + '">',
    '<meta property="og:description" content="' + esc(desc) + '">',
    '<meta property="og:image" content="' + SITE + '/' + encodeURI(image) + '">',
    SITE ? '<meta property="og:url" content="' + url + '">' : '',
  ].filter(Boolean).join('\n  ');
  const page = src
    .replace('<html lang="it" data-view="strip">', '<html lang="it" data-view="detail" data-page="' + slug + '">')
    .replace(/<title>.*?<\/title>\n  <meta name="description"[^>]*>/, () => meta);
  fs.writeFileSync(OUT + '/progetti/' + slug + '.html', page);
  count++;
}
console.log('dist/ pronto: home + ' + count + ' pagine di progetto');
