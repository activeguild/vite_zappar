import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import workerPlugin from "@chialab/esbuild-plugin-worker";

export default defineConfig({
  server: {
    https: true,
  },
  plugins: [react(), mkcert()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [workerPlugin()],
    },
  },
});
