<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <div class="p-6">
      <DashboardHeader
        msg="Sellers"
        @toggleBar="togglebar($event)"
        :showSearchBar="false"
      />
    </div>
    <div class="w-full px-8 py-2">
      <router-link
        to="/admin/dashboard/"
        class="text-sm font-medium p-2 rounded-xl w-full my-2 flex gap-3 items-center text-[#0071ce] bg-[#d4a21b33]"
      >
        <ion-icon name="caret-back-outline"></ion-icon>
        <p>Go back</p>
      </router-link>
    </div>
    <div class="h-36 px-8 py-2 my-4 flex items-center gap-4 w-full">
      <img src="/u3.png" class="h-20 w-20 rounded-full object-cover" alt="" />
      <div class="w-full flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <p class="font-bold text-xl">God is good motors</p>
          <div class="flex items-center gap-4">
            <button class="mt-auto rounded-xl">Suspend Seller</button>
            <button
              class="rounded-xl border border-solid border-[#0071CE] bg-white text-[#0071CE] hover:bg-[#0071CE] hover:text-[white]"
            >
              Mail user
            </button>
          </div>
        </div>
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-4">
            <p class="text-[#606060] font-bold" style="font-size: 10px">Last active:</p>
            <p class="text-[#606060] font-bold" style="font-size: 10px">5min ago</p>
          </div>
          <div class="flex items-center gap-4">
            <p class="text-[#606060] font-bold" style="font-size: 10px">
              Last Transaction:
            </p>
            <p class="text-[#606060] font-bold" style="font-size: 10px">5min ago</p>
          </div>
          <div class="flex items-center gap-4">
            <p class="text-[#606060] font-bold" style="font-size: 10px">
              Last Hire invite:
            </p>
            <p class="text-[#606060] font-bold" style="font-size: 10px">5min ago</p>
          </div>
          <div class="flex items-center gap-4">
            <p class="text-[#606060] font-bold" style="font-size: 10px">Last job post:</p>
            <p class="text-[#606060] font-bold" style="font-size: 10px">5min ago</p>
          </div>
          <div class="flex items-center gap-4">
            <p class="text-[#606060] font-bold" style="font-size: 10px">
              Last job Community post:
            </p>
            <p class="text-[#606060] font-bold" style="font-size: 10px">5min ago</p>
          </div>
        </div>
      </div>
    </div>

    <div class="px-8">
      <!-- Charts -->
      <AdminChart />

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
  name: "AdminSellerSingle",
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
