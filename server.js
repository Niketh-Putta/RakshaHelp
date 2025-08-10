import express from "express";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// where Vite builds the client:
const distDir = path.join(__dirname, "client", "dist"); // adjust if your dist is elsewhere

app.use(compression());

// 1) serve static assets from dist with correct MIME and long cache
app.use(
  express.static(distDir, {
    maxAge: "1y",
    immutable: true,
    setHeaders: (res, filePath) => {
      // NEVER cache these three — they must update instantly
      const noCache = ["index.html", "sw.js", "manifest.json"];
      if (noCache.some((n) => filePath.endsWith(n))) {
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        res.setHeader("Pragma", "no-cache");
        res.setHeader("Expires", "0");
      }
    },
  }),
);

// 2) explicitly serve sw.js and manifest.json from dist root
app.get("/sw.js", (req, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.sendFile(path.join(distDir, "sw.js"));
});

app.get("/manifest.json", (req, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.sendFile(path.join(distDir, "manifest.json"));
});

// 3) SPA fallback — AFTER static — only for routes that are not real files
app.get("*", (req, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.sendFile(path.join(distDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on :${PORT}`);
});
