import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "@/pages/index" },
    { path: "/docs", component: "@/pages/docs" },
    { path: "/cesuim01", component: "@/pages/cesium/01" },
  ],
  npmClient: 'pnpm',
  plugins: ["umi-cesium-plugin"],
  cesium: {
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhNmQ3MGNlYy01NjQ3LTQ4MWEtYTcxNC1mNGM0OWMzNzg4MTQiLCJpZCI6MjExNTA5LCJpYXQiOjE3MTQxMjI0NTd9.4QeUGFuenEoMny72RaShwSt_pB0zUome3ICAxZLv2AQ",
  },
});
