<template>
  <DashBoardComponentProvider>
    <DashboardHeader />
    <div>Community Page</div>
  </DashBoardComponentProvider>
</template>

<script>
import DashBoardComponentProvider from "./components/dashboardComponent.vue";
import DashboardHeader from "./components/dashboardHeader.vue";
export default {
  name: "CommunityPage",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
  },
};
</script>

<style scoped></style>
