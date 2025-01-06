<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <DashboardHeader msg="Find a Talent" @toggleBar="togglebar($event)"/>
    <div class="px-4 py-2">
      <div
        class="rounded-full w-full flex items-center pl-12"
        style="border: 1px solid #d3d3d3; height: 61px"
      >
        <div class="flex w-full items-center overflow-x-auto">
          <div
            class="flex gap-6 items-center px-2 py-4"
            style="border-right: 1px solid #d3d3d3; height: 61px"
          >
            <p class="text-[#606060] text-sm">Skill:</p>
            <div class="flex gap-2 items-center">
              <p class="text-[#606060] text-sm">Ui/Ux Design</p>
              <ion-icon name="caret-forward-outline" class="text-[#909090]"></ion-icon>
            </div>
          </div>

          <div
            class="flex gap-6 items-center px-2 py-4"
            style="border-right: 1px solid #d3d3d3; height: 61px"
          >
            <p class="text-[#606060] text-sm">Budget ranges:</p>
            <div class="flex gap-2 items-center">
              <p class="text-[#606060] text-sm">$200-500k</p>
              <ion-icon name="caret-forward-outline" class="text-[#909090]"></ion-icon>
            </div>
          </div>

          <div
            class="flex gap-6 items-center px-2 py-4"
            style="border-right: 1px solid #d3d3d3; height: 61px"
          >
            <p class="text-[#606060] text-sm">Location:</p>
            <div class="flex gap-2 items-center">
              <p class="text-[#606060] text-sm">Uyo,Nigeria</p>
              <ion-icon name="caret-forward-outline" class="text-[#909090]"></ion-icon>
            </div>
          </div>

          <div class="flex gap-6 items-center px-2 py-4">
            <p class="text-[#606060] text-sm">Experience level:</p>
            <div class="flex gap-2 items-center">
              <p class="text-[#606060] text-sm">Mid level</p>
              <ion-icon name="caret-forward-outline" class="text-[#909090]"></ion-icon>
            </div>
          </div>
        </div>
        <button
          class="py-4"
          style="
            border-top-right-radius: 50px;
            border-bottom-right-radius: 50px;
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
            height: 61px;
          "
        >
          Search
        </button>
      </div>
    </div>
    <div class="flex items-center gap-4 px-4">
      <router-link
        to="/company/dashboard/find-a-talent/"
        class="text-sm font-medium p-2 rounded-full w-fit my-8 bg-[#d4a21b33] text-[#0071ce] hover:bg-[#0071ce] hover:text-white"
      >
        <p>Find a talent</p>
      </router-link>
      <router-link
        to="#"
        class="text-sm font-medium p-2 rounded-full w-fit my-8 bg-[#0071ce] text-white"
      >
        <p>My upoads</p>
      </router-link>
      <router-link
        to="/company/dashboard/find-a-talent/vacancy-upload/page1/"
        class="text-sm font-medium p-2 rounded-full w-fit my-8 bg-[#d4a21b33] text-[#0071ce] hover:bg-[#0071ce] hover:text-white"
      >
        <p>Upload a job vacancy</p>
      </router-link>
    </div>
    <div class="flex px-3 py-2 gap-2">
      <div class="w-3/5 my-4">
        <TaskLibs
          heading="Started 2 days ago"
          subHeading="Ux design landing pages"
          business="Prime movies cop"
          msg="How do we feel about Customer Success Manager in tech as an exit? My gut tells me it’s chill and decently paying but kinda menial customer service firefighting type work and might pigeonhole me/be limt How do we feel about Customer Success Manager in tech as an exit? My gut tells me it’s chill and decently paying but kinda menial customer service firefighting type work and might pigeonhole me/be lim"
          payment="50% payment done"
        />
        <TaskLibs
          heading="Started 2 days ago"
          subHeading="Ux design landing pages"
          business="Prime movies cop"
          msg="How do we feel about Customer Success Manager in tech as an exit? My gut tells me it’s chill and decently paying but kinda menial customer service firefighting type work and might pigeonhole me/be limt How do we feel about Customer Success Manager in tech as an exit? My gut tells me it’s chill and decently paying but kinda menial customer service firefighting type work and might pigeonhole me/be lim"
          payment="50% payment done"
        />
      </div>
    </div>
  </DashBoardComponentProvider>
</template>

<script>
import DashBoardComponentProvider from "./components/dashboardComponent.vue";
import DashboardHeader from "./components/dashboardHeader.vue";
import TaskLibs from "./components/myListTasks.vue";
import TaskLibsRight from "./components/myListTaskRight.vue";

export default {
  name: "CompanyFindaTalentUploads",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
    TaskLibs,
    TaskLibsRight,
  },
};
</script>

<style scoped></style>
