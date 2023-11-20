import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      injectManifest: {
        globDirectory: "dist/",
        globPatterns: ["**/*.{json,ico,svg,ttf,woff,css,js,html,txt,jpg,png,woff2,mjs}"],
        swDest: "dist/sw.js",
        swSrc: "sw.js",
        maximumFileSizeToCacheInBytes: 50000000,
      },
      workbox: {
        importScripts: ["sw.js"],
      },
      devOptions: {
        enabled: true,
        /* other options */
      },
      srcDir: "src",
      filename: "sw.js",
      // selfDestroying: true,
      manifest: {
        name: "Ayo Qoncierge",
        short_name: "qoncierge",
        theme_color: "#ffffff",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        icons: [
          {
            src: "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/x-icon",
          },
          {
            src: "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/x-icon",
          },
          {
            src: "/favicon-144x144.png",
            sizes: "144x144",
            type: "image/x-icon",
          },
        ],
        push: {
          icon: "/logo.png",
        },
      },
    }),
    // legacy({
    // 	targets: [">0.3%, not dead", "not IE 11"],
    // }),
  ],
  build: {
    target: ["es2020", "edge88", "firefox78", "chrome87", "safari14"],
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
