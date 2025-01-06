<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <DashboardHeader msg="Messages" @toggleBar="togglebar($event)" />
    <div class="flex px-3 gap-2 h-full overflow-hidden">
      <div class="mt-4 w-[480px] px-4 pt-8 flex flex-col gap-8">
        <div class="">
          <SearchWithIcon hint="Search for a post">
            <ion-icon name="search"></ion-icon>
          </SearchWithIcon>
        </div>

        <div class="flex flex-col gap-8 h-full py-2 overflow-y-auto">
          <div class="" v-for="post in posts">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <img src="/u4.png" class="h-10 w-10 rounded-full object-cover" alt="" />
                <div>
                  <h2 class="font-bold text-lg">
                    {{ post }}
                    <span class="text-[#909090] font-light" style="font-size: 8px"
                      >Apple store</span
                    >
                  </h2>
                  <p class="text-xs font-light text-light">Hello, what are you doing?</p>
                </div>
              </div>
              <div class="mt-auto flex flex-col items-center gap-2">
                <p class="text-[#909090] font-light" style="font-size: 8px">12:46am</p>
                <p
                  class="flex justify-center items-center text-xs font-medium px-1 rounded-xl w-4 h-4 bg-[#D4A21B33] text-[#0071ce]"
                >
                  5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-col mt-4">
        <div class="chat-top-header p-2">
          <div class="flex items-center gap-4">
            <img src="/u4.png" class="h-10 w-10 rounded-full object-cover" alt="" />
            <h2 class="font-bold text-lg leading-3">Design talks</h2>
            <div class="bg-[#00CE3E] h-1 w-1 rounded-full"></div>
          </div>
        </div>
        <div class="flex-1 bg-[#D4A21B33] px-4 py-2 overflow-y-auto">
          <div class="chat-time text-center text-[#606060] text-base">Today</div>
          <div
            class="friendMessage bg-[#fff] rounded-3xl flex flex-col gap-2 w-1/2 px-4 py-2 my-3"
          >
            <div class="content">Hello there, welcome</div>
            <p class="time text-right text-xs text-[#6C6C6C]">12:30am</p>
          </div>
          <div
            class="myMessage bg-[#fff]] bg-[#fff] rounded-3xl flex flex-col gap-2 w-1/2 px-4 py-2 ml-auto my-3"
          >
            <div class="content">Hello there, welcome</div>
            <p class="time text-right text-xs text-[#6C6C6C]">12:30am</p>
          </div>
        </div>
        <div class="flex gap-4 items-center px-4 py-2 bg-[#D4A21B33]">
          <div
            class="rounded-lg w-full bg-white flex gap-4 px-4 items-center"
            style="border: 1px solid #d3d3d3"
          >
            <ion-icon name="search"></ion-icon>
            <input
              type="text"
              placeholder="Send message"
              class="w-full p-1 px-2"
              name=""
            />
          </div>
          <ion-icon name="search"></ion-icon>
        </div>
      </div>
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
  data() {
    return {
      posts: ["Andrew", "Mark", "Jones", "Alister", "Scarlet", "Gaye"],
    };
  },
};
</script>

<style scoped></style>
