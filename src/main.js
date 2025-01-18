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

// Freelancers page imports
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
import UserProfile from "./pages/dashboard/freelancer/userProfile.vue";
import FindJobSingle from "./pages/dashboard/freelancer/findJobSingle.vue";
import FindJobApply from "./pages/dashboard/freelancer/findJobApply.vue";
import FindjobApply2 from "./pages/dashboard/freelancer/FindjobApply2.vue";
import FindJobAddNewProject from "./pages/dashboard/freelancer/FindJobAddNewProject.vue";
import UserProfileGigs from "./pages/dashboard/freelancer/userProfileGigs.vue";
import UserProfileGigsHistory from "./pages/dashboard/freelancer/userProfileGigsHistory.vue";
import UserPortfolio from "./pages/dashboard/freelancer/userPortfolio.vue";

// Company Page imports
import DashboardHomeCompany from "./pages/dashboard/company/home.vue";
import CompanyMessagingPage from "./pages/dashboard/company/chatMessaging.vue";
import CompanyOngoingProject from "./pages/dashboard/company/ongoingProjectscreen.vue";
import CompanyEscrowPaymentOngoingProject from "./pages/dashboard/company/escrowPaymentOngoing.vue";
import CompanyOngoingProjectMarkAsDone from "./pages/dashboard/company/OngoingMarkAsDone.vue";
import CompanyNotificationPage from "./pages/dashboard/company/notificationPage.vue";
import CompanySecurityPage from "./pages/dashboard/company/securityPage.vue";
import CompanyWalletPage from "./pages/dashboard/company/walletPage.vue";
import CompanyCommunityPage from "./pages/dashboard/company/communityPage.vue";
import CompanyFindTalent from "./pages/dashboard/company/FindJob.vue";
import CompanyFindaTalentUploads from "./pages/dashboard/company/FindJobMyuploads.vue";
import CompanyFindJobTalentVacancyUpload from "./pages/dashboard/company/FindJobTalentVacancyUpload.vue";
import CompanyFindJobTalentVacancyUpload2 from "./pages/dashboard/company/FindJobTalentVacancyUpload2.vue";
import CompanyCommunityPageMyCommunity from "./pages/dashboard/company/communityPageMyCommunity.vue";
import CompanyCommunityPageEvent from "./pages/dashboard/company/communityPageEvent.vue";
import CompanyCommunityPageCreateEvent from "./pages/dashboard/company/communityPageCreateEvent.vue";
import CompanyCommunityPageSingleEvent from "./pages/dashboard/company/communityPageSingleEvent.vue";
import CompanyUserProfile from "./pages/dashboard/company/userProfile.vue";
import CompanyFindTalentSingle from "./pages/dashboard/company/findJobSingle.vue";
import CompanyFindTalentApply from "./pages/dashboard/company/findJobApply.vue";
import CompanyFindTalentApply2 from "./pages/dashboard/company/FindjobApply2.vue";
import CompanyFindTalentAddNewProject from "./pages/dashboard/company/FindJobAddNewProject.vue";
import CompanyUserProfileGigs from "./pages/dashboard/company/userProfileGigs.vue";
import CompanyUserProfileGigsHistory from "./pages/dashboard/company/userProfileGigsHistory.vue";
import CompanyUserPortfolio from "./pages/dashboard/company/userPortfolio.vue";

import AdminHome from './pages/admin/home.vue';
import AdminWallet from './pages/admin/wallet.vue';
import AdminAnnoumcement from './pages/admin/announcement.vue';
import AdminPaymentMethod from './pages/admin/payment.vue';
import AdminSendMail from './pages/admin/mail.vue';
import AdminBuyerMgt from './pages/admin/buyer.vue';
import AdminSellerMgt from './pages/admin/seller.vue';
import AdminBuyerSingle from './pages/admin/buyersSingle.vue';
import AdminSellerSingle from './pages/admin/sellersSingle.vue';

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
  
  // Freelancers page links
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
  { path: "/freelancer/dashboard/community/event/create/", component: CommunityPageCreateEvent },
  { path: "/freelancer/dashboard/community/event/single/:id", component: CommunityPageSingleEvent },

  { path: "/freelancer/dashboard/find-a-job/", component: FindJob },
  { path: "/freelancer/dashboard/find-a-job/single/:id", component: FindJobSingle },
  { path: "/freelancer/dashboard/find-a-job/apply/page1/", component: FindJobApply },
  { path: "/freelancer/dashboard/find-a-job/apply/page2/", component: FindjobApply2 },
  { path: "/freelancer/dashboard/find-a-job/new/", component: FindJobAddNewProject },

  { path: "/freelancer/dashboard/profile/", component: UserProfile },
  { path: "/freelancer/dashboard/profile/gigs/", component: UserProfileGigs },
  { path: "/freelancer/dashboard/profile/gigs/history/", component: UserProfileGigsHistory },

  { path: "/freelancer/dashboard/portfolio/", component: UserPortfolio },
  
  // Company page links
  { path: "/company/dashboard/", component: DashboardHomeCompany },
  { path: "/company/dashboard/ongoing/:id", component: CompanyOngoingProject },
  { path: "/company/dashboard/ongoing/escrow/payment/:id", component: CompanyEscrowPaymentOngoingProject },
  { path: "/company/dashboard/ongoing/markasdone/:id", component: CompanyOngoingProjectMarkAsDone },

  { path: "/company/dashboard/message/", component: CompanyMessagingPage },
  { path: "/company/dashboard/notification/", component: CompanyNotificationPage },
  { path: "/company/dashboard/security/", component: CompanySecurityPage },

  { path: "/company/dashboard/wallet/", component: CompanyWalletPage },

  { path: "/company/dashboard/community/", component: CompanyCommunityPage },
  { path: "/company/dashboard/community/my-community/", component: CompanyCommunityPageMyCommunity },
  { path: "/company/dashboard/community/event/", component: CompanyCommunityPageEvent },
  { path: "/company/dashboard/community/event/create/", component: CompanyCommunityPageCreateEvent },
  { path: "/company/dashboard/community/event/single/:id", component: CompanyCommunityPageSingleEvent },

  { path: "/company/dashboard/find-a-talent/", component: CompanyFindTalent },
  { path: "/company/dashboard/find-a-talent/uploads/", component: CompanyFindaTalentUploads },
  { path: "/company/dashboard/find-a-talent/vacancy-upload/page1/", component: CompanyFindJobTalentVacancyUpload },
  { path: "/company/dashboard/find-a-talent/vacancy-upload/page2/", component: CompanyFindJobTalentVacancyUpload2 },
  { path: "/company/dashboard/find-a-talent/single/:id", component: CompanyFindTalentSingle },
  { path: "/company/dashboard/find-a-talent/apply/page1/", component: CompanyFindTalentApply },
  { path: "/company/dashboard/find-a-talent/apply/page2/", component: CompanyFindTalentApply2 },
  { path: "/company/dashboard/find-a-talent/new/", component: CompanyFindTalentAddNewProject },

  { path: "/company/dashboard/profile/", component: CompanyUserProfile },
  { path: "/company/dashboard/profile/gigs/", component: CompanyUserProfileGigs },
  { path: "/company/dashboard/profile/gigs/history/", component: CompanyUserProfileGigsHistory },

  { path: "/company/dashboard/portfolio/", component: CompanyUserPortfolio },

  // Admin page links
  { path: "/admin/dashboard/", component: AdminHome },
  { path: "/admin/dashboard/wallet/", component: AdminWallet },
  { path: "/admin/dashboard/seller-mgt/", component: AdminSellerMgt },
  { path: "/admin/dashboard/buyer-mgt/", component: AdminBuyerMgt },
  { path: "/admin/dashboard/announcement", component: AdminAnnoumcement },
  { path: "/admin/dashboard/payment/", component: AdminPaymentMethod },
  { path: "/admin/dashboard/mail", component: AdminSendMail },
  
  { path: "/admin/dashboard/sellers/single/:id", component: AdminSellerSingle },
  { path: "/admin/dashboard/buyer/single/:id", component: AdminBuyerSingle },


  // Error page / Not found 
  { path: "/:pathMatch(.*)*", component: PageNotFound }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount("#app");
