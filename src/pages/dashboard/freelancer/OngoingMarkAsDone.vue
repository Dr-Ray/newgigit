<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <DashboardHeader msg="Create Task" @toggleBar="togglebar($event)" />
    <div class="w-full py-2 px-8">
      <router-link
        to="/freelancer/dashboard/"
        class="text-sm font-medium p-2 rounded-xl w-full my-8 flex gap-3 items-center"
        style="color: #0071ce; background-color: #d4a21b33"
      >
        <ion-icon name="caret-back-outline"></ion-icon>
        <p>Go back</p>
      </router-link>
      <div class="wdgt-tops flex flex-col gap-1">
        <h3 class="font-bold text-xl mb-2">Ux design landing page</h3>
        <!-- <p class="font-extralight">Start date 19th, august 2024</p> -->
      </div>
    </div>
    <div class="flex px-8 py-2 gap-2">
      <div class="w-full md:w-3/5 lg:2/5 my-4">
        <div class="rounded-2xl w-full shadow-xl px-4 py-2 flex flex-col gap-5 my-3">
          <div class="flex items-center gap-3">
            <div class="font-bold text-sm">Create design system</div>
            <div class="text-xs">2 days left</div>
            <p
              class="text-sm font-medium px-1 rounded-xl w-fit"
              style="color: #f00; background-color: #d4a21b33"
            >
              Pending
            </p>
          </div>
          <p class="text-wrap text-[#606060]">
            Twitter Spaces is a feature that allows users to have live audio conversations
            with others on Twitter. It's a casual way to engage with an audience, and can
            be used for a variety of purposes, such as hosting a Q&A, giving a lecture, or
            creating a podcast. 
          </p>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="text-xs">Start date: 19th, august 2024</div>
              <div class="text-xs">Start date: 19th, august 2024</div>
            </div>
          </div>
        </div>
        <button class="w-full mt-12">Mark as done</button>
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

export default {
  name: "OngoingProjectMarkAsDone",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
    ProfileDetails,
    TaskLibs,
    TaskLibsRight,
    ProfileDetailsRight,
  },
};
</script>

<style scoped></style>
