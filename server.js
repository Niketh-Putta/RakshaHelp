// server.js (root)
import express from "express";
import path from "path";
import compression from "compression";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// gzip responses
app.use(compression());

// serve the built client
const DIST_DIR = path.join(__dirname, "client", "dist");
app.use(
  express.static(DIST_DIR, {
    // helpful cache headers for hashed files
    setHeaders(res, filePath) {
      if (filePath.includes("/assets/")) {
        // fingerprinted files (immutable)
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      } else {
        // html/manifest/etc. – never cache
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  }),
);

// SPA fallback to index.html
app.get("*", (_req, res) => {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
