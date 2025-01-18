<template>
  <DashBoardComponentProvider  v-slot="{ togglebar }">
    <DashboardHeader msg="Find a Job" @toggleBar="togglebar($event)"/>
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
          style="border-top-right-radius: 50px;
            border-bottom-right-radius: 50px;
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
            height: 61px;"
        >
          Search
        </button>
      </div>
    </div>
    <div class="flex px-3 py-2 gap-2">
      <div class="w-3/5 my-4">
        <TaskLibs
          lnk='/freelancer/dashboard/find-a-job/single/1'
          heading="Started 2 days ago"
          subHeading="Ux design landing pages"
          business="Prime movies cop"
          msg="How do we feel about Customer Success Manager in tech as an exit? My gut tells me it’s chill and decently paying but kinda menial customer service firefighting type work and might pigeonhole me/be limt How do we feel about Customer Success Manager in tech as an exit? My gut tells me it’s chill and decently paying but kinda menial customer service firefighting type work and might pigeonhole me/be lim"
          payment="50% payment done"
        />
        <TaskLibs
          lnk='/freelancer/dashboard/find-a-job/single/1'
          heading="Started 2 days ago"
          subHeading="Ux design landing pages"
          business="Prime movies cop"
          msg="How do we feel about Customer Success Manager in tech as an exit? My gut tells me it’s chill and decently paying but kinda menial customer service firefighting type work and might pigeonhole me/be limt How do we feel about Customer Success Manager in tech as an exit? My gut tells me it’s chill and decently paying but kinda menial customer service firefighting type work and might pigeonhole me/be lim"
          payment="50% payment done"
        />
      </div>
      <div class="w-2/5 my-4">
        <h5
          class="text-sm font-medium p-2 rounded-xl w-fit my-8"
          style="color: #0071ce; background-color: #d4a21b33"
        >
          Saved Jobs
        </h5>
        <TaskLibsRight
        lnk='/freelancer/dashboard/find-a-job/single/1'
          heading="Started 20 days ago"
          subHeading="Ux design landing pages"
          business="Prime movies cop"
          msg="How do we feel about Customer Success Manager in tech as an exit? My gut tells me it’s chill and decently paying but kinda men See more"
        />
        <TaskLibsRight
        lnk='/freelancer/dashboard/find-a-job/single/1'
          class="mt-3"
          heading="Started 20 days ago"
          subHeading="Ux design landing pages"
          business="Prime movies cop"
          msg="How do we feel about Customer Success Manager in tech as an exit? My gut tells me it’s chill and decently paying but kinda men See more"
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
  name: "FindaJob",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
    TaskLibs,
    TaskLibsRight,
  },
};
</script>

<style scoped></style>
