const http = require('http');
const fs = require('fs');
const path = require('path');

let PORT = parseInt(process.env.PORT, 10) || 3030;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4'
};

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');

  let cleanUrl = decodeURI(req.url.split('?')[0]);
  if (cleanUrl === '/' || cleanUrl === '') {
    cleanUrl = '/index.html';
  }

  const filePath = path.join(BASE_DIR, cleanUrl);

  // Security check to avoid directory traversal outside project
  if (!filePath.startsWith(BASE_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head><title>404 - Not Found</title></head>
      <body style="font-family:sans-serif; text-align:center; padding-top:60px; background:#090A0C; color:#FFF;">
        <h1 style="color:#C5A059;">404 &mdash; Halaman Tidak Ditemukan</h1>
        <p style="color:#8E98A5;">Halaman yang Anda cari tidak tersedia di atelier ZEPHR.</p>
        <p><a href="/" style="color:#C5A059;">Kembali ke Halaman Utama ZEPHR</a></p>
      </body>
      </html>
    `);
  }
});

function startServer(portToTry) {
  server.listen(portToTry, '0.0.0.0', () => {
    console.log(`====================================================`);
    console.log(`  ZEPHR PARFUMS ATELIER WEB SERVER SEDANG BERJALAN`);
    console.log(`====================================================`);
    console.log(`  URL Lokal: http://localhost:${portToTry}/`);
    console.log(`  URL Jaringan: http://127.0.0.1:${portToTry}/`);
    console.log(`  Direktori: ${BASE_DIR}`);
    console.log(`====================================================`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${portToTry} sedang digunakan, mencoba port ${portToTry + 1}...`);
      startServer(portToTry + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(PORT);
