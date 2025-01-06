<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <DashboardHeader msg="Gigs Profile" @toggleBar="togglebar($event)"/>
    <div class="h-full w-full relative flex flex-col p-4">
      <p class="font-bold">Gigs base on your browsing history</p>
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
      <button class="mt-auto ml-auto">+ Create new gig</button>
    </div>
  </DashBoardComponentProvider>
</template>

<script>
import DashBoardComponentProvider from "./components/dashboardComponent.vue";
import DashboardHeader from "./components/dashboardHeader.vue";
export default {
  name: "UserProfileGigsHistory",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
  },
};
</script>

<style scoped></style>
