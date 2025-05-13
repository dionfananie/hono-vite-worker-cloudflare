import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
export default defineConfig({
  define: {
    "import.meta.env.VITE_URL_WS": JSON.stringify(process.env.VITE_URL_WS),
  },
  server: {
    allowedHosts: ["twiki-invention-you-boost.trycloudflare.com"],
  },
  plugins: [react(), cloudflare()],
});
