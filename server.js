// server.js
const express = require("express");
const compression = require("compression");
const path = require("path");

const app = express();
const dist = path.join(__dirname, "client", "dist");

app.use(compression());

app.use(
  express.static(dist, {
    setHeaders: (res, filePath) => {
      // Don't cache HTML, SW, or manifest
      if (
        filePath.endsWith("index.html") ||
        filePath.endsWith("sw.js") ||
        filePath.endsWith("manifest.json")
      ) {
        res.setHeader("Cache-Control", "no-cache");
      } else {
        // Everything else can be long-cached
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      }
    },
  }),
);

// SPA fallback
app.get("*", (_req, res) => {
  res.sendFile(path.join(dist, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
