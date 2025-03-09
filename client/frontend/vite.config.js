import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/anime": "http://localhost:5000",
			"/favorites": "http://localhost:5000",
		},
	},
});
