import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
export default defineConfig({
  environments: {
    my_hono_app: {
      define: {
        __APP_VERSION__: JSON.stringify("v1.0.0"),
      },
    },
  },
  server: {
    allowedHosts: ["twiki-invention-you-boost.trycloudflare.com"],
  },
  plugins: [react(), cloudflare()],
});
