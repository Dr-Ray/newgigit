<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <DashboardHeader msg="Find a Job" @toggleBar="togglebar($event)" />
    <div class="w-full px-3 py-2">
      <router-link
        to="/freelancer/dashboard/find-a-job/"
        class="text-sm font-medium p-2 rounded-xl w-full my-2 flex gap-3 items-center"
        style="color: #0071ce; background-color: #d4a21b33"
      >
        <ion-icon name="caret-back-outline"></ion-icon>
        <p>Ux design landing pages</p>
      </router-link>
    </div>
    <div class="flex px-3 py-2 gap-2">
      <div class="w-3/5 my-4">
        <div
          class="rounded-xl flex flex-col gap-5 py-4 px-2"
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
                    name="location"
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
        <div class="flex flex-col gap-6 p-4">
          <p class="font-bold text-sm text-[#606060]">Job other informations</p>
          <div class="flex items-center gap-7">
            <div class="flex items-center gap-1">
              <ion-icon name="cash" class="text-[#909090]"></ion-icon>
              <p class="font-bold text-[#606060] text-xs">Price : 30,000</p>
            </div>
            <div class="flex items-center gap-1">
              <ion-icon name="bookmark" class="text-[#909090]"></ion-icon>
              <p class="font-bold text-[#606060] text-xs">Level : Senior</p>
            </div>
            <div class="flex items-center gap-1">
              <ion-icon name="stopwatch" class="text-[#909090]"></ion-icon>
              <p class="font-bold text-[#606060] text-xs">Duration : 2 months</p>
            </div>
          </div>
        </div>

        <div class="border-[#90909052] w-full" style="border-width: 1px"></div>
        <div class="flex flex-col gap-6 p-4">
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
        <div class="flex flex-col gap-6 p-4">
          <p class="font-bold text-sm text-[#606060]">Activities</p>
          <div class="flex items-center gap-4">
            <p class="font-bold text-[#606060] text-xs">Proposal summitted : 30</p>
            <p class="font-bold text-[#606060] text-xs">Hiring : 30</p>
            <p class="font-bold text-[#606060] text-xs">Interview : 30</p>
            <p class="font-bold text-[#606060] text-xs">Last viewed by client : 30</p>
          </div>
        </div>

        <div class="border-[#90909052] w-full border" style="border-width: 1px"></div>
        <div class="flex flex-col gap-6 p-4">
          <p class="font-bold text-sm text-[#606060]">Activities</p>
          <div class="flex items-center gap-7">
            <button class="px-8">Apply</button>
            <button class="border-2 border-solid border-[#0071ce] text-[#0071ce] bg-white">Save Job</button>
          </div>
        </div>
      </div>
      <div class="w-2/5 my-4">
        <h5
          class="text-sm font-medium p-2 rounded-xl w-fit my-8 text-[#0071ce] bg-[#d4a21b33]"
        >
          Related opportunity
        </h5>
        <div class="div mt-4">
          <div
            class="w-full rounded-xl flex flex-col gap-5 py-4 px-2"
            style="background-color: #cce3f50d"
          >
            <div class="wdgt-tops flex flex-col gap-4">
              <p class="font-light text-xs">Started 2 days ago</p>
              <div class="">
                <h3 class="font-bold text-xl mb-2">Ux design landing pages</h3>
                <p class="font-extralight text-xs">Prime movies cop</p>
              </div>
            </div>
            <div class="wdgt-main">
              <div class="leading-6">
                How do we feel about Customer Success Manager in tech as an exit?
                <p class="text-sm font-medium pr-4" style="color: #0071ce">See more</p>
              </div>
              <p
                class="text-sm mt-4 font-medium p-2 rounded-full w-fit bg-[#d4a21b33] text-[#0071ce]"
              >
                50% payment done
              </p>
            </div>
          </div>
        </div>
        <div class="div mt-4">
          <div
            class="w-full rounded-xl flex flex-col gap-5 py-4 px-2"
            style="background-color: #cce3f50d"
          >
            <div class="wdgt-tops flex flex-col gap-4">
              <p class="font-light text-xs">Started 2 days ago</p>
              <div class="">
                <h3 class="font-bold text-xl mb-2">Ux design landing pages</h3>
                <p class="font-extralight text-xs">Prime movies cop</p>
              </div>
            </div>
            <div class="wdgt-main">
              <div class="leading-6">
                How do we feel about Customer Success Manager in tech as an exit?
                <p class="text-sm font-medium pr-4 text-[#0071ce]">See more</p>
              </div>
              <p
                class="text-sm mt-4 font-medium p-2 rounded-full w-fit bg-[#d4a21b33] text-[#0071ce]"
              >
                50% payment done
              </p>
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
  name: "FindJobSingle",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
    TaskLibsRight,
  },
};
</script>

<style scoped></style>
