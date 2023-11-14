import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	// base: "/",	
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
					"icon": "/logo.png"
				}
			},
		}),
	],
	build: {
    target: "esnext",
		commonjsOptions: {
			transformMixedEsModules: true,
		},
	},
});
