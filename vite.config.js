// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   envDir: "./",
// // });
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { VitePWA } from "vite-plugin-pwa";

// export default defineConfig({
//   plugins: [
//     react(),
//     VitePWA({
//       registerType: "autoUpdate",
//       includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
//       manifest: {
//         name: "Shoptik - Furniture E-commerce",
//         short_name: "Shoptik",
//         description: "Furniture E-commerce web app",
//         theme_color: "#ffffff",
//         icons: [
//           {
//             src: "pwa-192x192.png",
//             sizes: "192x192",
//             type: "image/png",
//           },
//           {
//             src: "pwa-512x512.png",
//             sizes: "512x512",
//             type: "image/png",
//             purpose: "any maskable",
//           },
//         ],
//       },
//     }),
//   ],
//   resolve: {
//     alias: {
//       "@": "/src",
//     },
//   },
//   server: {
//     port: 5173,
//     strictPort: true,
//     host: true,
//   },
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
