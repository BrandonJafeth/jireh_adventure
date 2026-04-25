// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  image: {
    domains: ["res.cloudinary.com"],
  },
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});