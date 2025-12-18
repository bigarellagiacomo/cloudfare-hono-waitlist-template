import eslintPluginAstro from "eslint-plugin-astro";
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  // Per-file configuration (works like overrides)
  {
    files: ["*.astro", "*.ts", "*.tsx"],
    processor: "astro/client-side-ts",
    rules: {
      // Your custom rules here, e.g.:
      // "no-unused-vars": "warn",
    },
  },
];
