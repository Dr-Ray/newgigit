<template>
  <DashBoardComponentProvider>
    <DashboardHeader msg="Messages" />
    <div class="flex px-3 py-2 gap-2 min-h-screen">
      <div class="my-4 w-[450px] px-4 flex flex-col gap-8">
        <SearchWithIcon hint="Search for a post">
          <ion-icon name="search"></ion-icon>
        </SearchWithIcon>

        <div class="flex flex-col gap-8">
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
      <div class="w-full flex flex-col my-4">
        <div class="chat-top-header p-2">
          <div class="flex items-center gap-4">
            <img src="/u4.png" class="h-10 w-10 rounded-full object-cover" alt="" />
            <h2 class="font-bold text-lg leading-3">Design talks</h2>
            <div class="bg-[#00CE3E] h-1 w-1 rounded-full"></div>
          </div>
        </div>
        <div class="flex-1 bg-[#D4A21B33]"></div>
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
      posts: [
        "Andrew Garfield",
        "Mark Ronsoon",
        "Mark Jones",
        "Mc Alister",
        "Johanson Scarlet",
        "Maving gaye",
      ],
    };
  },
};
</script>

<style scoped></style>
