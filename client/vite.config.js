import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  // server: {
  //     proxy: {
  //       "/api/vi": {
  //         target: "http://localhost:3001",
  //         changeOrigin: true,
  //         secure: false,
  //         ws: true,
  //       },
  //     },
  // },
});
