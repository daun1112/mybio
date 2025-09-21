const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1'; // принудительно биндим к localhost по умолчанию
const BUILD_DIR = path.join(__dirname, 'build');

app.use(compression());
app.use(express.static(BUILD_DIR, {
  maxAge: '7d',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) res.setHeader('Cache-Control', 'no-cache');
  }
}));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(BUILD_DIR, 'index.html'));
});

const server = app.listen(PORT, HOST, () => {
  console.log(`Server started on http://${HOST}:${PORT}`);
});

server.on('error', (err) => {
  console.error('Server error', err);
  if (err.code === 'EACCES' || err.code === 'EPERM') {
    console.error(`Permission denied binding to ${HOST}:${PORT}`);
    console.error('Use a host-allowed port or set HOST=127.0.0.1 and an allowed PORT.');
  }
  process.exit(1);
});
