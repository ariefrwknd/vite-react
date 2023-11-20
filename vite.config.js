import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.js",
      // selfDestroying: true,
      manifest: {
        name: "Ayo Qoncierge",
        short_name: "qoncierge",
        description: "Ayo Qoncierge Application",
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
    legacy({
      // for ie11
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      polyfills: ["es.array.iterator"],
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
