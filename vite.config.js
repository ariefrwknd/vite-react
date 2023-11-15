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
						type: "image/png",
						purpose: "any maskable",
					},
					{
						src: "/favicon-32x32.png",
						sizes: "32x32",
						type: "image/png",
						purpose: "any maskable",
					},
					{
						src: "/favicon-144x144.png",
						sizes: "144x144",
						type: "image/png",
						purpose: "any maskable",
					},
					{
						src: "/favicon-192x192.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "any maskable",
					},
					{
						src: "/favicon-256x256.png",
						sizes: "256x256",
						type: "image/png",
						purpose: "any maskable",
					},
					{
						src: "/favicon-384x384.png",
						sizes: "384x384",
						type: "image/png",
						purpose: "any maskable",
					},
					{
						src: "/favicon-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any maskable",
					},
				],
				push: {
					icon: "/logo.png",
				},
			},
		}),
		legacy({
			targets: ["defaults", "not ie <= 8"],
			polyfills: [
				"es.promise.finally",
				"es.array.iterator",
				"es/map",
				"es/set",
			],
			modernPolyfills: ["es.promise.finally", "es.array.iterator"],
		}),
	],
	build: {
		commonjsOptions: {
			transformMixedEsModules: true,
		},
	},
});
