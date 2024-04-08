import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
// import { resolve } from "path";

// const aliases = {
//   "@types": "@src/@types",
//   assets: "@src/assets",
//   components: "@src/components",
//   config: "@src/config",
//   features: "@src/features",
//   hooks: "@src/hooks",
//   layouts: "@src/layouts",
//   mocks: "@src/mocks",
//   providers: "@src/providers",
//   utils: "@src/utils",
//   views: "@src/utils",
// };

// const resolvedAliases = Object.fromEntries(
//   Object.entries(aliases).map(([key, value]) => [
//     key,
//     resolve(__dirname, value),
//   ])
// );

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({
      babel: {
        plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
      },
    }),
  ],
  build: {
    rollupOptions: {
      external: ["@src/assets/images/PlaceholderImg.jpg"],
    },
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      // ...resolvedAliases,
      // "./runtimeConfig": "./runtimeConfig.browser",
      // "jss-plugin-{}": "jss-plugin-global",
    },
  },
});
