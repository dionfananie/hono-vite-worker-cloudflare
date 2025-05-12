import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
export default defineConfig({
  server: {
    allowedHosts: ["twiki-invention-you-boost.trycloudflare.com"],
  },
  plugins: [react(), cloudflare()],
});
