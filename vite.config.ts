import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/

export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@i18n": path.resolve(__dirname, "src/i18n"),
      "@locales": path.resolve(__dirname, "src/locales"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@utils": path.resolve(__dirname, "src/utils"),
      //Components
      "@atoms": path.resolve(__dirname, "src/components/atoms"),
      "@molecules": path.resolve(__dirname, "src/components/molecules"),
      "@organisms": path.resolve(__dirname, "src/components/organisms"),
      "@templates": path.resolve(__dirname, "src/components/templates"),
    },
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "named",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
    tailwindcss(),
  ],
});
