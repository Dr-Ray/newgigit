<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <DashboardHeader @toggleBar="togglebar($event)" />
    <div class="flex flex-col px-3 py-2 gap-2 md:flex-row">
      <div class="w-full md:w-3/5 my-4">
        <ProfileDetails
          img="/06a88a47768b53550d40a686c910cc1b.png"
          name="Nike shoes"
          position="No 1 foot wears"
        />
        <h5
          class="text-sm font-medium p-2 rounded-xl w-fit my-8"
          style="color: #0071ce; background-color: #d4a21b33"
        >
          Ongoing Project
        </h5>
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
      <div class="w-full md:w-2/5 my-4">
        <h5
          class="text-sm font-medium p-2 rounded-xl w-fit my-8"
          style="color: #0071ce; background-color: #d4a21b33"
        >
          Active stats
        </h5>
        <div class="flex flex-col gap-4 px-6">
          <p class="text-xs text-[#606060]">
            Proposal summitted : <span class="font-medium text-[#292D32]">30</span>
          </p>
          <p class="text-xs text-[#606060]">
            Hired : <span class="font-medium text-[#292D32]">30</span>
          </p>
          <p class="text-xs text-[#606060]">
            Interviewed : <span class="font-medium text-[#292D32]">30</span>
          </p>
        </div>

        <h5
          class="text-sm font-medium p-2 rounded-xl w-fit my-8"
          style="color: #0071ce; background-color: #d4a21b33"
        >
          Recent task completed
        </h5>
        <div class="flex flex-col gap-3 px-6">
          <div class="flex flex-col gap-2">
            <p class="font-bold text-sm text-[#292D32]">
              Design landing page for our product
            </p>
            <p class="text-xs text-[#606060]">5hours ago</p>
          </div>
          <div class="flex flex-col gap-2">
            <p class="font-bold text-sm text-[#292D32]">
              Design landing page for our product
            </p>
            <p class="text-xs text-[#606060]">5hours ago</p>
          </div>
        </div>

        <h5
          class="text-sm font-medium p-2 rounded-xl w-fit my-8"
          style="color: #0071ce; background-color: #d4a21b33"
        >
          Pending task
        </h5>
        <div class="flex flex-col gap-3 px-6">
          <div class="flex flex-col gap-2">
            <p class="font-bold text-sm text-[#292D32]">
              Design landing page for our product
            </p>
            <p class="text-xs text-[#606060]">5hours ago</p>
          </div>
          <div class="flex flex-col gap-2">
            <p class="font-bold text-sm text-[#292D32]">
              Design landing page for our product
            </p>
            <p class="text-xs text-[#606060]">5hours ago</p>
          </div>
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

export default {
  name: "CompanyDashboardHome",
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
