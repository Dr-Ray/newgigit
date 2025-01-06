<template>
  <DashBoardComponentProvider  v-slot="{ togglebar }">
    <DashboardHeader msg="My portfolio" :showSearchBar="false" @toggleBar="togglebar($event)"/>
    <div class="px-4">
      <router-link
        to="/freelancer/dashboard/"
        class="text-sm font-medium py-2 px-4 rounded-xl w-full flex gap-3 items-center mb-8"
        style="color: #0071ce; background-color: #d4a21b33"
      >
        <ion-icon name="caret-back-outline"></ion-icon>
        <p>Apply for gig</p>
      </router-link>

      <p class="text-xl mt-2 mb-6 font-bold">Add new project</p>
    </div>
    <div class="flex">
      <div class="w-1/2 my-4 flex flex-col p-2">
        <div class="w-full bg-white py-3 px-2">
          <form action="" class="flex flex-col gap-6">
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <ion-icon name="person"></ion-icon>
              <input type="text" placeholder="Project title" class="w-full p-1" name="" />
            </div>
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <ion-icon name="mail"></ion-icon>
              <input
                type="text"
                placeholder="Your role (optional)"
                class="w-full p-1"
                name=""
              />
            </div>
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <input
                type="text"
                placeholder="Project description"
                class="w-full p-1"
                name=""
              />
            </div>
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <input
                type="text"
                placeholder="Skills and deliverables"
                class="w-full p-1"
                name=""
              />
            </div>
            <button class="w-full" type="submit">Create project</button>
          </form>
        </div>
      </div>
      <div class="md:flex flex-col gap-6 px-3 w-1/2 my-4 hidden">
        <div class="w-full px-4">
          <div class="mt-6">
            <p class="font-medium text-xs">Upload your cv or resume</p>
            <div
              class="mt-8 bg-[#D4A21B33] min-h-[172px] rounded-3xl flex flex-col items-center justify-center"
            >
              <ion-icon name="cloud-upload"></ion-icon>
              <p class="text-[#649CC5] text-xs">Upload your document</p>
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
  name: "FindJobNewProject",
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
