import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/notification/",
  plugins: [react()],
});

// export default defineConfig({
//   base: "/tetris/",
//   plugins: [reactRefresh()]
// });
