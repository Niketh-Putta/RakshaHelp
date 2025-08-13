// client/src/main.tsx
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize PWA (this is guarded to skip SW inside Android WebView)
import { initPWA } from "@/lib/pwa";

initPWA().catch((err) => console.error("initPWA error:", err));

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(<App />);
} else {
  console.error("Root element #root not found");
}
