<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <div class="p-6">
      <DashboardHeader
        msg="Sellers"
        @toggleBar="togglebar($event)"
        :showSearchBar="false"
      />
    </div>
    <div class="px-8">
      <TopFrame />

      <!-- Charts -->
      <AdminChart linkUrl="/admin/dashboard/sellers/single/1"/>

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
  name: "AdminSellerMgt",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
    TopFrame,
    AdminDataTable,
    AdminChart,
  },
};
</script>

<style scoped></style>
