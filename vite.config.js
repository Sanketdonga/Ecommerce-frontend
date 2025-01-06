import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "./", // Ensure relative paths for assets in the dist folder
  build: {
    outDir: "dist", // Ensure the output folder is "dist"
  },
  server: {
    host: "0.0.0.0", // Expose the server on all network interfaces
    port: 5173, // You can change the port if necessary
    proxy: {
      "/api": {
        target: "http://52.66.113.158:5000", // Backend server URL
        changeOrigin: true, // Ensure the origin matches the target
        rewrite: (path) => path.replace(/^\/api/, "/api"), // Optional: Path rewrite
      },
    },
  },
});
