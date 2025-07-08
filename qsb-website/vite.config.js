import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	css: {
		postcss: "./postcss.config.js", // ensure Vite knows where your PostCSS config is
	},
	build: {
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, "index.html"),
				design: path.resolve(__dirname, "design.html"),
			},
		},
	},
});
