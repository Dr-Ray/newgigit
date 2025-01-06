<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <DashboardHeader msg="Notification" @toggleBar="togglebar($event)" />
    <div class="flex flex-col gap-4 p-2">
      <NotificationComponent day="Today" />
      <NotificationComponent day="Yesterday" />
    </div>
  </DashBoardComponentProvider>
</template>

<script>
import DashBoardComponentProvider from "./components/dashboardComponent.vue";
import DashboardHeader from "./components/dashboardHeader.vue";
import ProfileDetails from "./components/userProfiledetails.vue";
import ProfileDetailsRight from "./components/profileRight.vue";
import TaskLibs from "./components/myListTasks.vue";
import TaskLibsRight from "./components/myListTaskRight.vue";
import NotificationComponent from "./components/NotificationComponent.vue";

export default {
  name: "NotificationPage",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
    ProfileDetails,
    TaskLibs,
    TaskLibsRight,
    ProfileDetailsRight,
    NotificationComponent,
  },
};
</script>

<style scoped></style>
