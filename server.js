const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const BUILD_DIR = path.join(__dirname, 'build');

// попробуем стандартные переменные, которые часто даёт хостинг
const PORT_CANDIDATES = [
  process.env.PORT,
  process.env.SERVER_PORT,
  process.env.LISTEN_PORT,
  process.env.MISE_PORT,
  process.env.HTTP_PORT,
  process.env.APP_PORT
];

const PORT = PORT_CANDIDATES.find(p => p && !isNaN(Number(p))) || null;
const HOST = process.env.HOST || '127.0.0.1';

if (!PORT) {
  console.error('Fatal: no usable PORT found in environment.');
  console.error('Available env vars (showing here):');
  console.error({
    PORT: process.env.PORT,
    SERVER_PORT: process.env.SERVER_PORT,
    LISTEN_PORT: process.env.LISTEN_PORT,
    MISE_PORT: process.env.MISE_PORT,
    HTTP_PORT: process.env.HTTP_PORT,
    APP_PORT: process.env.APP_PORT
  });
  console.error('Set a valid PORT (example: PORT=12345 node server.js) or check your host control panel for the assigned port.');
  process.exit(1);
}

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

const server = app.listen(Number(PORT), HOST, () => {
  console.log(`Server started on http://${HOST}:${PORT}`);
});

server.on('error', (err) => {
  console.error('Server error', err);
  if (err.code === 'EACCES' || err.code === 'EPERM') {
    console.error(`Permission denied binding to ${HOST}:${PORT}`);
    console.error('Use a host-allowed port or set PORT to the one provided by your panel.');
  }
  process.exit(1);
});
