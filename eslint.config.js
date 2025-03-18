import next from "eslint-plugin-next";
import ts from "@typescript-eslint/eslint-plugin";

export default [
  next.configs["core-web-vitals"],
  {
    plugins: { ts },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // Gak bikin error, cuma warning
      "@typescript-eslint/no-empty-interface": "off",
    },
  },
];
