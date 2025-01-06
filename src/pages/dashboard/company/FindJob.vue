<template>
  <DashBoardComponentProvider  v-slot="{ togglebar }">
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
        to="#"
        class="text-sm font-medium p-2 rounded-full w-fit my-8 bg-[#0071ce] text-white"
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
        to="/company/dashboard/find-a-talent/vacancy-upload/page1/"
        class="text-sm font-medium p-2 rounded-full w-fit my-8 bg-[#d4a21b33] text-[#0071ce] hover:bg-[#0071ce] hover:text-white"
      >
        <p>Upload a job vacancy</p>
      </router-link>
    </div>
    <div class="h-full w-full relative flex flex-col p-4">
      <p class="font-bold">Talent based on your browsing history</p>
      <div class="flex gap-4 overflow-x-auto mt-8">
        <div class="overflow-hidden rounded-xl min-w-[250px]">
          <img
            class="min-w-[250px] h-36 object-cover rounded-xl"
            src="/b64a7a492913983cc49a3bfcdbdecad1.png"
            alt=""
          />
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <p class="font-bold text-sm">Grace ollie</p>
                <p class="text-light" style="font-size: 8px">Ui&Ux designer</p>
              </div>
              <p class="font-bold text-[#0071ce]">$54</p>
            </div>
            <p class="text-xs text-[#606060]">
              I will mockup custom and unique website UI UX design in figma
            </p>
            <div class="flex justify-between items-center">
              <div class="hr-row">
                <span class="font-bold">5.0</span>
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
              </div>
              <p class="text-[#0071ce]">152 reviews</p>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-xl min-w-[250px]">
          <img class="min-w-[250px] h-36 object-cover rounded-xl" src="/u4.png" alt="" />
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <p class="font-bold text-sm">Grace ollie</p>
                <p class="text-light" style="font-size: 8px">Ui&Ux designer</p>
              </div>
              <p class="font-bold text-[#0071ce]">$54</p>
            </div>
            <p class="text-xs text-[#606060]">
              I will mockup custom and unique website UI UX design in figma
            </p>
            <div class="flex justify-between items-center">
              <div class="hr-row">
                <span class="font-bold">5.0</span>
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
              </div>
              <p class="text-[#0071ce]">152 reviews</p>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-xl min-w-[250px]">
          <img class="min-w-[250px] h-36 object-cover rounded-xl" src="/u3.png" alt="" />
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <p class="font-bold text-sm">Grace ollie</p>
                <p class="text-light" style="font-size: 8px">Ui&Ux designer</p>
              </div>
              <p class="font-bold text-[#0071ce]">$54</p>
            </div>
            <p class="text-xs text-[#606060]">
              I will mockup custom and unique website UI UX design in figma
            </p>
            <div class="flex justify-between items-center">
              <div class="hr-row">
                <span class="font-bold">5.0</span>
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
              </div>
              <p class="text-[#0071ce]">152 reviews</p>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-xl min-w-[250px]">
          <img class="min-w-[250px] h-36 object-cover rounded-xl" src="/u1.png" alt="" />
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <p class="font-bold text-sm">Grace ollie</p>
                <p class="text-light" style="font-size: 8px">Ui&Ux designer</p>
              </div>
              <p class="font-bold text-[#0071ce]">$54</p>
            </div>
            <p class="text-xs text-[#606060]">
              I will mockup custom and unique website UI UX design in figma
            </p>
            <div class="flex justify-between items-center">
              <div class="hr-row">
                <span class="font-bold">5.0</span>
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
              </div>
              <p class="text-[#0071ce]">152 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-full w-full relative flex flex-col p-4">
      <p class="font-bold">Gigs based on your browsing history</p>
      <div class="flex gap-4 overflow-x-auto mt-8">
        <div class="overflow-hidden rounded-xl min-w-[250px]">
          <img
            class="min-w-[250px] h-36 object-cover rounded-xl"
            src="/da6a9ce3347f6d6739a83cecb743a826.png"
            alt=""
          />
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <p class="font-bold text-sm">Grace ollie</p>
                <p class="text-light" style="font-size: 8px">Ui&Ux designer</p>
              </div>
              <p class="font-bold text-[#0071ce]">$54</p>
            </div>
            <p class="text-xs text-[#606060]">
              I will mockup custom and unique website UI UX design in figma
            </p>
            <div class="flex justify-between items-center">
              <div class="hr-row">
                <span class="font-bold">5.0</span>
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
              </div>
              <p class="text-[#0071ce]">152 reviews</p>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-xl min-w-[250px]">
          <img
            class="min-w-[250px] h-36 object-cover rounded-xl"
            src="/e60f21f51c72be2513c86a3fd7431a50.png"
            alt=""
          />
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <p class="font-bold text-sm">Grace ollie</p>
                <p class="text-light" style="font-size: 8px">Ui&Ux designer</p>
              </div>
              <p class="font-bold text-[#0071ce]">$54</p>
            </div>
            <p class="text-xs text-[#606060]">
              I will mockup custom and unique website UI UX design in figma
            </p>
            <div class="flex justify-between items-center">
              <div class="hr-row">
                <span class="font-bold">5.0</span>
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
              </div>
              <p class="text-[#0071ce]">152 reviews</p>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-xl min-w-[250px]">
          <img
            class="min-w-[250px] h-36 object-cover rounded-xl"
            src="/1d41ce2ee5681a291cf9edbe36256776.png"
            alt=""
          />
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <p class="font-bold text-sm">Grace ollie</p>
                <p class="text-light" style="font-size: 8px">Ui&Ux designer</p>
              </div>
              <p class="font-bold text-[#0071ce]">$54</p>
            </div>
            <p class="text-xs text-[#606060]">
              I will mockup custom and unique website UI UX design in figma
            </p>
            <div class="flex justify-between items-center">
              <div class="hr-row">
                <span class="font-bold">5.0</span>
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
              </div>
              <p class="text-[#0071ce]">152 reviews</p>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-xl min-w-[250px]">
          <img
            class="min-w-[250px] h-36 object-cover rounded-xl"
            src="/b64a7a492913983cc49a3bfcdbdecad1.png"
            alt=""
          />
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <p class="font-bold text-sm">Grace ollie</p>
                <p class="text-light" style="font-size: 8px">Ui&Ux designer</p>
              </div>
              <p class="font-bold text-[#0071ce]">$54</p>
            </div>
            <p class="text-xs text-[#606060]">
              I will mockup custom and unique website UI UX design in figma
            </p>
            <div class="flex justify-between items-center">
              <div class="hr-row">
                <span class="font-bold">5.0</span>
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
                <img src="/star.png" alt="" style="height: 10px; width: auto" />
              </div>
              <p class="text-[#0071ce]">152 reviews</p>
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
import TaskLibs from "./components/myListTasks.vue";
import TaskLibsRight from "./components/myListTaskRight.vue";

export default {
  name: "CompanyFindaTalent",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
    TaskLibs,
    TaskLibsRight,
  },
};
</script>

<style scoped></style>
