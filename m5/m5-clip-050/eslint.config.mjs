import { FlatCompat } from "@eslint/eslintrc";
import reactHooks from "eslint-plugin-react-hooks";
const compat = new FlatCompat({ baseDirectory: import.meta.dirname });
const myExport = [
  ...compat.config({ extends: ["next/core-web-vitals"] }),
  {
    plugins: { "react-hooks": reactHooks },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
export default myExport;
