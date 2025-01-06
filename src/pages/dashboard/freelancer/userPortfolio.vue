<template>
  <DashBoardComponentProvider>
    <DashboardHeader msg="My Portfolio" :showSearchBar="false" @toggleBar="togglebar($event)"/>

    <div class="h-full w-full relative gap-2 flex flex-wrap p-4">
      <router-link
        to="/freelancer/dashboard/"
        class="text-sm font-medium p-2 rounded-xl w-full mt-2 mb-8 flex gap-3 items-center text-[#0071ce] bg-[#d4a21b33]"
      >
        <ion-icon name="caret-back-outline"></ion-icon>
        <p>Apply for gig</p>
      </router-link>
      <div
        class="w-full md:w-[49%] h-[300px] rounded-3xl flex items-center justify-center p-4 overflow-hidden"
        style="
          background: linear-gradient(rgba(204, 227, 245, 0.8), rgba(204, 227, 245, 0.8)),
            url('/da6a9ce3347f6d6739a83cecb743a826.png');
          background-position: center;
        "
      >
        <button>View project</button>
      </div>
      <div
        class="w-full md:w-[48%] h-[300px] rounded-3xl flex items-center justify-center p-4 overflow-hidden"
        style="
          background: linear-gradient(rgba(204, 227, 245, 0.8), rgba(204, 227, 245, 0.8)),
            url('/da6a9ce3347f6d6739a83cecb743a826.png');
          background-position: center;
        "
      >
        <button>View project</button>
      </div>
      <div
        class="w-full md:w-[48%] h-[300px] rounded-3xl flex items-center justify-center p-4 overflow-hidden"
        style="
          background: linear-gradient(rgba(204, 227, 245, 0.8), rgba(204, 227, 245, 0.8)),
            url('/da6a9ce3347f6d6739a83cecb743a826.png');
          background-position: center;
        "
      >
        <button>View project</button>
      </div>
      <div
        class="w-full md:w-[48%] h-[300px] rounded-3xl flex items-center justify-center p-4 overflow-hidden"
        style="
          background: linear-gradient(rgba(204, 227, 245, 0.8), rgba(204, 227, 245, 0.8)),
            url('/da6a9ce3347f6d6739a83cecb743a826.png');
          background-position: center;
        "
      >
        <button>View project</button>
      </div>
    </div>
  </DashBoardComponentProvider>
</template>

<script>
import DashBoardComponentProvider from "./components/dashboardComponent.vue";
import DashboardHeader from "./components/dashboardHeader.vue";
export default {
  name: "UserPortfolio",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
  },
};
</script>

<style scoped></style>
