import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";


export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router")
            )
              return "vendor";
            if (id.includes("@chakra-ui") || id.includes("@emotion"))
              return "chakra";
            if (id.includes("i18next")) return "i18n";
            if (id.includes("zod")) return "zod";
          }
        },
      },
    },
  },
});
