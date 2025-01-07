<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <div class="p-6">
      <DashboardHeader
        msg="Buyers"
        @toggleBar="togglebar($event)"
        :showSearchBar="false"
      />
    </div>
    <div class="px-8">
      <TopFrame />

      <!-- Charts -->
      <AdminChart linkUrl="/admin/dashboard/buyer/single/1"/>

      <!-- Table -->
      <AdminDataTable />
    </div>
  </DashBoardComponentProvider>
</template>

<script>
import AdminChart from "./components/AdminChart.vue";
import AdminDataTable from "./components/AdminDataTable.vue";
import DashBoardComponentProvider from "./components/dashboardComponent.vue";
import DashboardHeader from "./components/dashboardHeader.vue";
import TopFrame from "./components/TopFrame.vue";

export default {
  name: "AdminBuyerMgt",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
    TopFrame,
    AdminChart,
    AdminDataTable,
  },
};
</script>

<style scoped></style>
