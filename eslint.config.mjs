import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";
import path from "path";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Tailwind v4 Linter Configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { 
      "better-tailwindcss": betterTailwindcss 
    },
    settings: {
      "better-tailwindcss": {
        // Pointing perfectly to your Next.js Tailwind configuration
        entryPoint: path.resolve("./src/app/globals.css"),
      },
    },
    rules: {
      // Alerts you with yellow squiggly lines for fake or typoed classes
      "better-tailwindcss/no-unknown-classes": "warn",
    },
  },
  
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
