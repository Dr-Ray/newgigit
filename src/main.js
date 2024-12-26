import { createApp } from "vue";
import "./index.css";
import "./style.css";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";

import Login from "./pages/auth/login.vue";
import Register from "./pages/auth/register.vue";
import Landing from "./pages/landing.vue";

const routes = [
  { path: "/", component: Landing },
  { path: "/login", component: Login },
  { path: "/register", component: Register }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount("#app");
