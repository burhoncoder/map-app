import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      injectRegister: "auto",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        name: "Geolocation app",
        short_name: "Geo",
        description: "This app is designed for working with get points",
        theme_color: "#171717",
        background_color: "#f0e7db",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "portrait",
        icons: [
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pleiades_large.jpg",
            sizes: "192x192",
            type: "image/png",
            purpose: "favicon",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pleiades_large.jpg",
            sizes: "512x512",
            type: "image/png",
            purpose: "favicon",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pleiades_large.jpg",
            sizes: "180x180",
            type: "image/png",
            purpose: "apple touch icon",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pleiades_large.jpg",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
