<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <DashboardHeader @toggleBar="togglebar($event)" />
    <div class="flex flex-col px-3 py-2 gap-2 md:flex-row">
      <div class="w-full md:w-3/5 my-4">
        <ProfileDetails img="/u4.png" name="BILL ANIEKAN" position="UI/UX Designer" />
      </div>
      <div class="w-full md:w-2/5 my-4">
        <ProfileDetailsRight balance="12,000,000" />
      </div>
    </div>

    <div class="flex flex-col px-3 py-2 gap-2 md:flex-row">
      <div class="w-full md:w-3/5 my-4">
        <h5
          class="text-sm font-medium p-2 rounded-xl w-fit my-8"
          style="color: #0071ce; background-color: #d4a21b33"
        >
          Ongoing Project
        </h5>
        <TaskLibs
        lnk='/freelancer/dashboard/ongoing/1'
          heading="Started 2 days ago"
          subHeading="Ux design landing pages"
          business="Prime movies cop"
          msg="How do we feel about Customer Success Manager in tech as an exit? My gut tells me it’s chill and decently paying but kinda menial customer service firefighting type work and might pigeonhole me/be limt How do we feel about Customer Success Manager in tech as an exit? My gut tells me it’s chill and decently paying but kinda menial customer service firefighting type work and might pigeonhole me/be lim"
          payment="50% payment done"
        />
        <TaskLibs
        lnk='/freelancer/dashboard/ongoing/1'
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
          Saved Jobs
        </h5>
        <TaskLibsRight
        lnk='#'
          heading="Started 20 days ago"
          subHeading="Ux design landing pages"
          business="Prime movies cop"
          msg="How do we feel about Customer Success Manager in tech as an exit? My gut tells me it’s chill and decently paying but kinda men See more"
        />
        <TaskLibsRight
        lnk='#'
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
import ProfileDetails from "./components/userProfiledetails.vue";
import ProfileDetailsRight from "./components/profileRight.vue";
import TaskLibs from "./components/myListTasks.vue";
import TaskLibsRight from "./components/myListTaskRight.vue";

export default {
  name: "DashboardHome",
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
