/* Local preview server for Delhi Palace.
   Mirrors the .htaccess behaviour on Hostinger: clean URLs (/menu -> menu.html),
   / -> index.html, unknown paths -> 404.html.
   Run:  node preview-server.js   (serves public_html on http://localhost:8124)
   This file lives OUTSIDE public_html on purpose - do not upload it. */
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'public_html');
const PORT = 8124;
const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'application/javascript',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);

  // legacy WordPress addresses, like the .htaccess 301s
  if (/^\/about-us\/?$/.test(urlPath)) { res.writeHead(301, { Location: '/about/' }); return res.end(); }
  if (/^\/contact-us\/?$/.test(urlPath)) { res.writeHead(301, { Location: '/contact/' }); return res.end(); }

  // /menu.html -> /menu/ (like the THE_REQUEST rule)
  const mHtml = urlPath.match(/^\/([a-z0-9-]+)\.html$/i);
  if (mHtml && mHtml[1] !== '404') { res.writeHead(301, { Location: '/' + mHtml[1] + '/' }); return res.end(); }
  if (urlPath === '/index.html') { res.writeHead(301, { Location: '/' }); return res.end(); }

  // add the trailing slash (/menu -> /menu/) when a matching page exists
  if (/^\/[a-z0-9-]+$/i.test(urlPath) && fs.existsSync(path.join(ROOT, urlPath.slice(1) + '.html'))) {
    res.writeHead(301, { Location: urlPath + '/' });
    return res.end();
  }

  let file;
  if (urlPath === '/') {
    file = path.join(ROOT, 'index.html');
  } else {
    // /menu/ -> menu.html
    const mSlash = urlPath.match(/^\/([a-z0-9-]+)\/$/i);
    if (mSlash && fs.existsSync(path.join(ROOT, mSlash[1] + '.html'))) {
      file = path.join(ROOT, mSlash[1] + '.html');
    } else {
      file = path.join(ROOT, urlPath);
      if (!path.normalize(file).startsWith(ROOT)) { res.writeHead(403); return res.end(); }
      if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(fs.readFileSync(path.join(ROOT, '404.html')));
      }
    }
  }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' });
  res.end(fs.readFileSync(file));
}).listen(PORT, () => console.log('Delhi Palace preview on http://localhost:' + PORT));
