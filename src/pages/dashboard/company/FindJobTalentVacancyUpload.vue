<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <DashboardHeader msg="Find a Talent" @toggleBar="togglebar($event)" />
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
        to="/company/dashboard/find-a-talent/uploads"
        class="text-sm font-medium p-2 rounded-full w-fit my-8 bg-[#d4a21b33] text-[#0071ce] hover:bg-[#0071ce] hover:text-white"
      >
        <p>My upoads</p>
      </router-link>
      <router-link
        to="#"
        class="text-sm font-medium p-2 rounded-full w-fit my-8 bg-[#0071ce] text-white"
      >
        <p>Upload a job vacancy</p>
      </router-link>
    </div>
    <div class="w-full px-6 py-2">
      <router-link
        to="/company/dashboard/"
        class="text-sm font-medium p-2 rounded-xl w-full my-2 flex gap-3 items-center"
        style="color: #0071ce; background-color: #d4a21b33"
      >
        <ion-icon name="caret-back-outline"></ion-icon>
        <p>Ux design landing pages</p>
      </router-link>
    </div>

    <div class="flex">
      <div class="w-[450px] my-4 flex flex-col p-2">
        <div class="w-full bg-white py-3 px-2">
          <form action="" class="flex flex-col gap-6">
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <ion-icon name="person"></ion-icon>
              <input type="text" placeholder="Event title" class="w-full p-1" name="" />
            </div>
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <input
                type="text"
                placeholder="Event Description"
                class="w-full p-1"
                name=""
              />
            </div>
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <input type="text" placeholder="Event Tags" class="w-full p-1" name="" />
            </div>
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <input type="text" placeholder="Date" class="w-full p-1" name="" />
            </div>
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <input type="text" placeholder="Time" class="w-full p-1" name="" />
            </div>
            <button class="w-full" type="submit">Create Event</button>
          </form>
        </div>
      </div>
      <div class="md:flex flex-col gap-6 px-3 w-full my-4 hidden">1</div>
    </div>
  </DashBoardComponentProvider>
</template>

<script>
import DashBoardComponentProvider from "./components/dashboardComponent.vue";
import DashboardHeader from "./components/dashboardHeader.vue";
import TaskLibs from "./components/myListTasks.vue";
import TaskLibsRight from "./components/myListTaskRight.vue";

export default {
  name: "CompanyFindJobTalentVacancyUpload",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
    TaskLibs,
    TaskLibsRight,
  },
};
</script>

<style scoped></style>
