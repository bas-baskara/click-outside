import { defineConfig } from "vite";
import ts from "rollup-plugin-typescript2";

export default defineConfig({
  plugins: [
    ts({
      tsconfig: "tsconfig.json",
    }),
  ],
});
