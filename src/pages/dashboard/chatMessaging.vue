<template>
  <DashBoardComponentProvider>
    <DashboardHeader msg="Messages" />
    <div class="flex px-3 py-2 gap-2">
      <div class="my-4 w-[350px]">
        <SearchWithIcon hint="Search for a post">
          <ion-icon name="search"></ion-icon>
        </SearchWithIcon>
      </div>
      <div class="w-full my-4 bg-gray-900"></div>
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
import SearchWithIcon from "./components/searchWithIcon.vue";

export default {
  name: "MessagingPage",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
    ProfileDetails,
    TaskLibs,
    TaskLibsRight,
    ProfileDetailsRight,
    SearchWithIcon,
  },
};
</script>

<style scoped></style>
