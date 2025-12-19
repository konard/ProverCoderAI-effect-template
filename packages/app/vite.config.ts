import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	plugins: [tsconfigPaths()],
	publicDir: false,
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
	build: {
		target: "node20",
		outDir: "dist",
		sourcemap: true,
		ssr: "src/app/main.ts",
		rollupOptions: {
			output: {
				format: "es",
				entryFileNames: "main.js",
			},
		},
	},
	ssr: {
		target: "node",
	},
});
