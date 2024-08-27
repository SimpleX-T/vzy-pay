import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: [
				"favicon.ico",
				"apple-touch-icon.png",
				"masked-icon.svg",
			],
			manifest: {
				name: "Vzy Pay",
				short_name: "VzyPay",
				description: "Seamless AI payment system",
				theme_color: "#ffffff",
				icons: [
					{
						src: "pwa-192x192.png", //you'll change this
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "pwa-512x512.png", //and this
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
		}),
	],
});
