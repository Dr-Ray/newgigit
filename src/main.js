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

import DashboardHome from "./pages/dashboard/freelancer/home.vue";
import MessagingPage from "./pages/dashboard/freelancer/chatMessaging.vue";
import OngoingProject from "./pages/dashboard/freelancer/ongoingProjectscreen.vue";
import EscrowPaymentOngoingProject from "./pages/dashboard/freelancer/escrowPaymentOngoing.vue";
import OngoingProjectMarkAsDone from "./pages/dashboard/freelancer/OngoingMarkAsDone.vue";
import NotificationPage from "./pages/dashboard/freelancer/notificationPage.vue";
import SecurityPage from "./pages/dashboard/freelancer/securityPage.vue";
import WalletPage from "./pages/dashboard/freelancer/walletPage.vue";
import CommunityPage from "./pages/dashboard/freelancer/communityPage.vue";
import FindJob from "./pages/dashboard/freelancer/FindJob.vue";
import CommunityPageMyCommunity from "./pages/dashboard/freelancer/communityPageMyCommunity.vue";
import CommunityPageEvent from "./pages/dashboard/freelancer/communityPageEvent.vue";
import CommunityPageCreateEvent from "./pages/dashboard/freelancer/communityPageCreateEvent.vue";
import CommunityPageSingleEvent from "./pages/dashboard/freelancer/communityPageSingleEvent.vue";
import PageNotFound from './pages/404.vue';

const routes = [
  { path: "/", component: Landing },
  { path: "/login/", component: Login },
  { path: "/register/", component: Register },
  
  { path: "/password/forgot/", component: ForgottenPassword },
  { path: "/password/forgot/verify/", component: ForgottenPasswordVerify },
  { path: "/password/new/", component: CreateNewPassword },
  
  { path: "/verify/email/", component: VerifyEmail },
  { path: "/language/", component: LanguageInput },
  { path: "/skills/", component: SkilsInput },
  
  { path: "/freelancer/dashboard/", component: DashboardHome },
  { path: "/freelancer/dashboard/ongoing/:id", component: OngoingProject },
  { path: "/freelancer/dashboard/ongoing/escrow/payment/:id", component: EscrowPaymentOngoingProject },
  { path: "/freelancer/dashboard/ongoing/markasdone/:id", component: OngoingProjectMarkAsDone },

  { path: "/freelancer/dashboard/message/", component: MessagingPage },
  { path: "/freelancer/dashboard/notification/", component: NotificationPage },
  { path: "/freelancer/dashboard/security/", component: SecurityPage },
  { path: "/freelancer/dashboard/wallet/", component: WalletPage },

  { path: "/freelancer/dashboard/community/", component: CommunityPage },
  { path: "/freelancer/dashboard/community/my-community/", component: CommunityPageMyCommunity },
  { path: "/freelancer/dashboard/community/event/", component: CommunityPageEvent },
  { path: "/freelancer/dashboard/community/event/create", component: CommunityPageCreateEvent },
  { path: "/freelancer/dashboard/community/event/single/:id", component: CommunityPageSingleEvent },

  { path: "/freelancer/dashboard/find-a-job/", component: FindJob },
  // { path: "/*", component:  PageNotFound},

  { path: "/:pathMatch(.*)*", component: PageNotFound }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount("#app");
