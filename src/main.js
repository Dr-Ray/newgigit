import { createApp } from "vue";
import "./index.css";
import "./style.css";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";

import Landing from "./pages/landing.vue";
import Login from "./pages/auth/login.vue";
import Register from "./pages/auth/register.vue";

import VerifyEmail from "./pages/auth/verifyEmail.vue";

import CreateNewPassword from "./pages/auth/newPassword.vue";
import ForgottenPassword from "./pages/auth/forgotPassword.vue";
import ForgottenPasswordVerify from "./pages/auth/forgotPasswordVerify.vue";

import LanguageInput from "./pages/dashboard/LanguageInput.vue";
import SkilsInput from "./pages/dashboard/skillsInput.vue";
import DashboardHome from "./pages/dashboard/home.vue";
import OngoingProject from "./pages/dashboard/ongoingProjectscreen.vue";

const routes = [
  { path: "/", component: Landing },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  
  { path: "/password/forgot", component: ForgottenPassword },
  { path: "/password/forgot/verify", component: ForgottenPasswordVerify },
  { path: "/password/new", component: CreateNewPassword },
  
  { path: "/verify/email", component: VerifyEmail },
  { path: "/language/", component: LanguageInput },
  { path: "/skills", component: SkilsInput },

  
  { path: "/user/dashboard/", component: DashboardHome },
  { path: "/user/dashboard/ongoing/:id", component: OngoingProject },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount("#app");
