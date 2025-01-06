<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <DashboardHeader msg="Hello Event" @toggleBar="togglebar($event)"/>

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
        <div class="p-2 md:w-[400px] mx-auto">
          <h3 class="text-center text-2xl font-bold leading-8">Hello Event</h3>
          <p class="text-center font-medium text-sm leading-8 mt-2">
             a conversational feature where users can engage in live,
          </p>
          <p class="text-center font-bold text-lg leading-8 mt-2 text-[#0071ce]">
            54 active
          </p>
          <div class="flex flex-col gap-6 my-8">
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div
                  class="bg-[#D4A21B33] h-12 w-12 rounded-full flex flex-col items-center justify-center"
                >
                  <img src="/u4.png" class="h-8 w-8 rounded-full object-cover" alt="" />
                </div>
                <div class="text-center">
                  <p class="text-xs font-bold">Idara Carter</p>
                  <p class="text-[#909090]" style="font-size: 8px">Host</p>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <div
                  class="bg-[#D4A21B33] h-12 w-12 rounded-full flex flex-col items-center justify-center"
                >
                  <img src="/u4.png" class="h-8 w-8 rounded-full object-cover" alt="" />
                </div>
                <div class="text-center">
                  <p class="text-xs font-bold">Idara Carter</p>
                  <p class="text-[#909090]" style="font-size: 8px">Host</p>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <div
                  class="bg-[#D4A21B33] h-12 w-12 rounded-full flex flex-col items-center justify-center"
                >
                  <img src="/u4.png" class="h-8 w-8 rounded-full object-cover" alt="" />
                </div>
                <div class="text-center">
                  <p class="text-xs font-bold">Idara Carter</p>
                  <p class="text-[#909090]" style="font-size: 8px">Host</p>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <div
                  class="bg-[#D4A21B33] h-12 w-12 rounded-full flex flex-col items-center justify-center"
                >
                  <img src="/u4.png" class="h-8 w-8 rounded-full object-cover" alt="" />
                </div>
                <div class="text-center">
                  <p class="text-xs font-bold">Idara Carter</p>
                  <p class="text-[#909090]" style="font-size: 8px">Host</p>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <div
                  class="bg-[#D4A21B33] h-12 w-12 rounded-full flex flex-col items-center justify-center"
                >
                  <img src="/u4.png" class="h-8 w-8 rounded-full object-cover" alt="" />
                </div>
                <div class="text-center">
                  <p class="text-xs font-bold">Idara Carter</p>
                  <p class="text-[#909090]" style="font-size: 8px">Host</p>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <div
                  class="bg-[#D4A21B33] h-12 w-12 rounded-full flex flex-col items-center justify-center"
                >
                  <img src="/u4.png" class="h-8 w-8 rounded-full object-cover" alt="" />
                </div>
                <div class="text-center">
                  <p class="text-xs font-bold">Idara Carter</p>
                  <p class="text-[#909090]" style="font-size: 8px">Host</p>
                </div>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div
                  class="bg-[#D4A21B33] h-12 w-12 rounded-full flex flex-col items-center justify-center"
                >
                  <img src="/u4.png" class="h-8 w-8 rounded-full object-cover" alt="" />
                </div>
                <div class="text-center">
                  <p class="text-xs font-bold">Idara Carter</p>
                  <p class="text-[#909090]" style="font-size: 8px">Host</p>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <div
                  class="bg-[#D4A21B33] h-12 w-12 rounded-full flex flex-col items-center justify-center"
                >
                  <img src="/u4.png" class="h-8 w-8 rounded-full object-cover" alt="" />
                </div>
                <div class="text-center">
                  <p class="text-xs font-bold">Idara Carter</p>
                  <p class="text-[#909090]" style="font-size: 8px">Host</p>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <div
                  class="bg-[#D4A21B33] h-12 w-12 rounded-full flex flex-col items-center justify-center"
                >
                  <img src="/u4.png" class="h-8 w-8 rounded-full object-cover" alt="" />
                </div>
                <div class="text-center">
                  <p class="text-xs font-bold">Idara Carter</p>
                  <p class="text-[#909090]" style="font-size: 8px">Host</p>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <div
                  class="bg-[#D4A21B33] h-12 w-12 rounded-full flex flex-col items-center justify-center"
                >
                  <img src="/u4.png" class="h-8 w-8 rounded-full object-cover" alt="" />
                </div>
                <div class="text-center">
                  <p class="text-xs font-bold">Idara Carter</p>
                  <p class="text-[#909090]" style="font-size: 8px">Host</p>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <div
                  class="bg-[#D4A21B33] h-12 w-12 rounded-full flex flex-col items-center justify-center"
                >
                  <img src="/u4.png" class="h-8 w-8 rounded-full object-cover" alt="" />
                </div>
                <div class="text-center">
                  <p class="text-xs font-bold">Idara Carter</p>
                  <p class="text-[#909090]" style="font-size: 8px">Host</p>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <div
                  class="bg-[#D4A21B33] h-12 w-12 rounded-full flex flex-col items-center justify-center"
                >
                  <img src="/u4.png" class="h-8 w-8 rounded-full object-cover" alt="" />
                </div>
                <div class="text-center">
                  <p class="text-xs font-bold">Idara Carter</p>
                  <p class="text-[#909090]" style="font-size: 8px">Host</p>
                </div>
              </div>
            </div>
          </div>
          <button class="w-full mt-12">Leave Event</button>
        </div>
      </div>
      <div class="md:flex flex-col gap-6 px-3 w-[450px] my-4 hidden">
        <div
          class="border-2 w-full md:w-[420px] bg-white py-3 px-2 flex flex-col rounded-2xl gap-5"
        >
          <div class="flex justify-between">
            <h4 class="text-sm font-bold">Events for you</h4>
            <router-link
              class="text-sm font-medium pr-4"
              style="color: #0071ce"
              to="/company/dashboard/community/event/"
            >
              Create Event
            </router-link>
          </div>
          <div class="flex flex-col gap-3 px-4">
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
          </div>
          <div class="flex flex-col gap-3 px-4">
            <p class="font-medium text-[#0071ce] text-xs">2hours to go</p>
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
          </div>
          <router-link
            to="#"
            class="text-right text-[#0071ce] text-sm font-medium p-2 rounded-full"
          >
            Explore Community
          </router-link>
        </div>
        <div
          class="border-2 w-full md:w-[420px] bg-white py-3 px-2 flex flex-col rounded-2xl gap-5"
        >
          <p>Communities for you</p>
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
  name: "CompanyCommunityPageSingleEvent",
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
