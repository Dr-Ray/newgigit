<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <DashboardHeader msg="Event" @toggleBar="togglebar($event)" />
    <div class="flex">
      <div class="w-full my-4 flex flex-col p-2">
        <router-link
          to="/company/dashboard/"
          class="text-sm font-medium p-2 rounded-xl w-full flex gap-3 items-center mb-8"
          style="color: #0071ce; background-color: #d4a21b33"
        >
          <ion-icon name="caret-back-outline"></ion-icon>
          <p>Go back</p>
        </router-link>
        <div class="border-2 w-full bg-white py-3 px-2 flex flex-col rounded-2xl gap-5">
          <div class="flex justify-between">
            <h4 class="text-sm font-bold">Events for you</h4>
            <router-link
              class="text-sm font-medium pr-4"
              style="color: #0071ce"
              to="/company/dashboard/community/event/create/"
            >
              Create Event
            </router-link>
          </div>
          <div class="my-4" v-for="post in posts">
            <router-link
              to="/company/dashboard/community/event/single/1"
              class="flex flex-col gap-1 px-4"
            >
              <p class="font-medium text-[#0071ce] text-xs">Ongoing</p>
              <div class="flex gap-4 items-center">
                <div class="flex flex-col justify-center">
                  <p class="text-[#909090] font-medium text-sm">Feb</p>
                  <h3 class="text-2xl font-bold text-[606060] text-center">3</h3>
                </div>
                <div class="">
                  <p class="text-xl font-bold text-[#606060]">
                    Getting your first programming gig
                  </p>
                  <p class="text-xs font-medium">5 hours ago</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="md:flex flex-col gap-6 px-3 w-[450px] my-4 hidden">
        <div
          class="border-2 w-full md:w-[420px] bg-white py-3 px-2 flex flex-col rounded-2xl gap-5"
        >
          <div class="flex justify-between">
            <p>Communities for you</p>

            <router-link
              to="#"
              class="text-right text-[#0071ce] text-sm font-medium p-2 rounded-full"
            >
              Explore Community
            </router-link>
          </div>
          <div class="" v-for="post in posts">
            <div class="flex items-center gap-4">
              <img src="/u4.png" class="h-20 w-20 rounded-full object-cover" alt="" />
              <div>
                <h2 class="font-bold text-2xl">Design talks</h2>
                <div class="flex items-center gap-4">
                  <p class="text-xs font-light text-light">Ui and Ux design</p>
                  <div class="flex items-center gap-3">
                    <ion-icon name="people-outline"></ion-icon>
                    <p class="text-xs font-light text-light">2000 members</p>
                  </div>
                </div>
              </div>
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashBoardComponentProvider>
</template>

<script>
import DashBoardComponentProvider from "./components/dashboardComponent.vue";
import DashboardHeader from "./components/dashboardHeader.vue";
import SearchWithIcon from "./components/searchWithIcon.vue";
import CommunityPostLeft from "./components/communityPostLeft.vue";
export default {
  name: "CompanyCommunityPageEvent",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
    SearchWithIcon,
    CommunityPostLeft,
  },
  data() {
    return {
      posts: ["Andrew Garfield", "Mark Ronsoon", "Mark Jones", "Mc Alister"],
    };
  },
};
</script>

<style scoped></style>
