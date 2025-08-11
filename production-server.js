#!/usr/bin/env node

import express from 'express';
import path from 'path';
import compression from 'compression';
import { fileURLToPath } from 'url';
import serveStatic from 'serve-static';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Enable gzip compression
app.use(compression());

// Serve static files from the dist/public directory
const staticPath = path.join(__dirname, 'dist', 'public');
console.log(`Serving static files from: ${staticPath}`);

app.use(serveStatic(staticPath, {
  // Cache settings for optimized performance
  setHeaders: (res, filePath) => {
    if (filePath.includes('/assets/')) {
      // Cache hashed assets for 1 year
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      // Don't cache HTML files
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

// Handle API routes if any exist
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API not implemented in production build' });
});

// SPA fallback: serve index.html for all other routes
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'dist', 'public', 'index.html');
  console.log(`Serving SPA fallback: ${indexPath} for route: ${req.path}`);
  res.sendFile(indexPath);
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`✅ Emergency First Aid App running on port ${PORT}`);
  console.log(`🌐 Access at: http://localhost:${PORT}`);
});