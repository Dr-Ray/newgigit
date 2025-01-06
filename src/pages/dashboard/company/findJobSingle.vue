<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <DashboardHeader msg="Find a Job" class="px-6" @toggleBar="togglebar($event)"/>
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
    <div class="flex py-2 gap-2">
      <div class="w-3/5 my-4">
        <div
          class="rounded-xl flex flex-col gap-5 py-4 px-8"
          style="background-color: #cce3f50d"
        >
          <div class="wdgt-tops flex flex-col gap-4">
            <p class="font-light">Posted 2 days ago</p>
            <div class="">
              <h3 class="font-bold text-xl mb-2">Ux design landing pages</h3>
              <div class="flex items-center gap-7">
                <div class="flex items-center gap-1">
                  <img
                    src="/830dc8455e8050e59d7edf7f5100f751.png"
                    class="h-8 w-8 rounded-full object-cover"
                    alt=""
                  />
                  <p class="font-extralight">Prime movies cop</p>
                </div>
                <div class="flex items-center gap-1">
                  <ion-icon
                    name="caret-forward-outline"
                    class="text-[#909090]"
                  ></ion-icon>
                  <p class="font-extralight">Nigeria</p>
                </div>
              </div>
            </div>
          </div>
          <div class="wdgt-main">
            <p class="leading-6 my-2">
              How do we feel about Customer Success Manager in tech as an exit? My gut
              tells me it’s chill and decently paying but kinda menial customer service
              firefighting type work and might pigeonhole me/be limt How do we feel about
              Customer Success Manager in tech as an exit? My gut tells me it’s chill and
              decently paying but kinda menial customer service firefighting type work and
              might pigeonhole me/be lim
            </p>
            <div class="flex items-center gap-8">
              <p
                class="text-sm font-medium p-2 rounded-full w-fit"
                style="color: #0071ce; background-color: #d4a21b33"
              >
                50% payment done
              </p>
              <p
                class="text-sm font-medium p-2 rounded-full w-fit"
                style="color: #0071ce; background-color: #d4a21b33"
              >
                50% payment done
              </p>
              <p
                class="text-sm font-medium p-2 rounded-full w-fit"
                style="color: #0071ce; background-color: #d4a21b33"
              >
                50% payment done
              </p>
            </div>
          </div>
        </div>

        <div class="border-[#90909052] w-full" style="border-width: 1px"></div>
        <div class="flex flex-col gap-6 py-4 px-8">
          <p class="font-bold text-sm text-[#606060]">Job other informations</p>
          <div class="flex items-center gap-7">
            <div class="flex items-center gap-1">
              <ion-icon name="cash" class="text-[#909090]"></ion-icon>
              <p class="font-bold text-[#606060] text-xs">Price : 30,000</p>
            </div>
            <div class="flex items-center gap-1">
              <ion-icon name="bookmark-outline" class="text-[#909090]"></ion-icon>
              <p class="font-bold text-[#606060] text-xs">Level : Senior</p>
            </div>
            <div class="flex items-center gap-1">
              <ion-icon name="stopwatch" class="text-[#909090]"></ion-icon>
              <p class="font-bold text-[#606060] text-xs">Duration : 2 months</p>
            </div>
          </div>
        </div>

        <div class="border-[#90909052] w-full" style="border-width: 1px"></div>
        <div class="flex flex-col gap-6 py-4 px-8">
          <p class="font-bold text-sm text-[#606060]">Skills</p>
          <div class="flex items-center gap-7">
            <p
              class="text-sm font-medium p-2 rounded-full w-fit"
              style="color: #0071ce; background-color: #d4a21b33"
            >
              Figma
            </p>
            <p
              class="text-sm font-medium p-2 rounded-full w-fit"
              style="color: #0071ce; background-color: #d4a21b33"
            >
              UI/UX
            </p>
            <p
              class="text-sm font-medium p-2 rounded-full w-fit"
              style="color: #0071ce; background-color: #d4a21b33"
            >
              HTML
            </p>
          </div>
        </div>

        <div class="border-[#90909052] w-full" style="border-width: 1px"></div>
        <div class="flex flex-col gap-6 py-4 px-8">
          <p class="font-bold text-sm text-[#606060]">Activities</p>
          <div class="flex items-center gap-4">
            <p class="font-bold text-[#606060] text-xs">Proposal summitted : 30</p>
            <p class="font-bold text-[#606060] text-xs">Hiring : 30</p>
            <p class="font-bold text-[#606060] text-xs">Interview : 30</p>
            <p class="font-bold text-[#606060] text-xs">Last viewed by client : 30</p>
          </div>
        </div>

        <div class="border-[#90909052] w-full" style="border-width: 1px"></div>
        <div class="flex flex-col gap-6 py-4 px-8">
          <p class="font-bold text-sm text-[#606060]">Company Info</p>
          <div class="flex items-center gap-4"></div>
        </div>
      </div>
      <div class="w-2/5 my-4 px-4">
        <h5
          class="text-sm font-medium p-2 rounded-xl w-fit my-8"
          style="color: #0071ce; background-color: #d4a21b33"
        >
          Applications
        </h5>
        <div class="div mt-4">
          <div class="overflow-hidden rounded-xl w-[250px]">
            <img
              class="min-w-[250px] h-36 object-cover rounded-xl"
              src="/b64a7a492913983cc49a3bfcdbdecad1.png"
              alt=""
            />
            <div class="flex flex-col gap-1">
              <p class="font-bold text-sm mt-4">Grace ollie</p>
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
                <p class="text-[#0071ce]">12 reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div class="div mt-4">
          <div class="overflow-hidden rounded-xl w-[250px]">
            <img
              class="min-w-[250px] h-36 object-cover rounded-xl"
              src="/b64a7a492913983cc49a3bfcdbdecad1.png"
              alt=""
            />
            <div class="flex flex-col gap-1">
              <p class="font-bold text-sm mt-4">Grace ollie</p>
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
                <p class="text-[#0071ce]">12 reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div class="div mt-4">
          <div class="overflow-hidden rounded-xl w-[250px]">
            <img
              class="min-w-[250px] h-36 object-cover rounded-xl"
              src="/b64a7a492913983cc49a3bfcdbdecad1.png"
              alt=""
            />
            <div class="flex flex-col gap-1">
              <p class="font-bold text-sm mt-4">Grace ollie</p>
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
                <p class="text-[#0071ce]">12 reviews</p>
              </div>
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
import TaskLibsRight from "./components/myListTaskRight.vue";

export default {
  name: "CompanyFindJobSingle",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
    TaskLibsRight,
  },
};
</script>

<style scoped></style>
