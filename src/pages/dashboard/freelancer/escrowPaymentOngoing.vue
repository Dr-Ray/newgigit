<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <DashboardHeader @toggleBar="togglebar($event)"/>
    <div class="w-full p-2">
      <router-link
        to="/freelancer/dashboard/"
        class="text-sm font-medium p-2 rounded-xl w-full my-8 flex gap-3 items-center"
        style="color: #0071ce; background-color: #d4a21b33"
      >
        <ion-icon name="caret-back-outline"></ion-icon>
        <p>Go back</p>
      </router-link>
      <div
        class="text-sm font-medium p-2 rounded-xl w-full my-8 flex justify-between items-center h-16"
        style="color: #0071ce; background-color: #d4a21b33"
      >
        <div class="flex gap-3 items-center">
          <ion-icon name="stopwatch-outline"></ion-icon>
          <p class="font-bold">Time spent on this project</p>
        </div>
        <p class="text-lg font-bold">12:09:00</p>
      </div>
      <div class="wdgt-tops flex flex-col gap-1">
        <h3 class="font-bold text-xl mb-2">Ux design landing page</h3>
        <p class="font-extralight">Start date 19th, august 2024</p>
      </div>
    </div>
    <div class="flex px-3 py-2 gap-2">
      <div class="w-3/5 my-4">
        <div class="rounded-2xl w-full shadow-xl px-4 py-2 flex flex-col gap-5 my-3">
          <div class="flex items-center gap-3">
            <div class="font-bold text-sm">Create design system</div>
            <div class="text-xs">2 days left</div>
            <p
              class="text-sm font-medium px-1 rounded-xl w-fit"
              style="color: #f00; background-color: #d4a21b33"
            >
              Pending
            </p>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="text-xs">Start date: 19th, august 2024</div>
              <div class="text-xs">Start date: 19th, august 2024</div>
            </div>
            <!-- <ButtonElement msg="Mark as Done" /> -->
          </div>
        </div>
        <div class="rounded-2xl w-full shadow-xl px-4 py-2 flex flex-col gap-5 my-3">
          <div class="flex items-center gap-3">
            <div class="font-bold text-sm">Create design system</div>
            <div class="text-xs">2 days left</div>
            <p
              class="text-sm font-medium px-1 rounded-xl w-fit"
              style="color: #0071ce; background-color: #d4a21b33"
            >
              Done
            </p>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="text-xs">Start date: 19th, august 2024</div>
              <div class="text-xs">Start date: 19th, august 2024</div>
            </div>
            <!-- <ButtonElement msg="Mark as Done" /> -->
          </div>
        </div>
        <div class="rounded-2xl w-full shadow-xl px-4 py-2 flex flex-col gap-5 my-3">
          <div class="flex items-center gap-3">
            <div class="font-bold text-sm">Create design system</div>
            <div class="text-xs">2 days left</div>
            <p
              class="text-sm font-medium px-1 rounded-xl w-fit"
              style="color: #0071ce; background-color: #d4a21b33"
            >
              Done
            </p>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="text-xs">Start date: 19th, august 2024</div>
              <div class="text-xs">Start date: 19th, august 2024</div>
            </div>
            <!-- <ButtonElement msg="Mark as Done" /> -->
          </div>
        </div>
        <div class="rounded-2xl w-full shadow-xl px-4 py-6 flex flex-col gap-5 my-3">
          <div class="flex items-center gap-3">
            <div class="font-bold text-sm">Create design system</div>
            <div class="text-xs">2 days left</div>
            <p
              class="text-sm font-medium px-1 rounded-xl w-fit"
              style="color: #0071ce; background-color: #d4a21b33"
            >
              Done
            </p>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="text-xs">Start date: 19th, august 2024</div>
              <div class="text-xs">Start date: 19th, august 2024</div>
            </div>
            <!-- <ButtonElement msg="Mark as Done" /> -->
          </div>
        </div>
      </div>
      <div class="w-2/5 my-4">
        <div
          class="flex flex-col rounded-lg p-4 h-80 bg-slate-900"
          style="background-color: #6cd5dc0d"
        >
          <h3 class="p-2 mb-2">Escrow Payment</h3>
          <div class="flex items-center justify-between p-3">
            <div class="flex items-center gap-3">
              <ion-icon name="cash-outline"></ion-icon>
              <div class="">
                <p class="font-bold">Pending</p>
                <p class="font-light text-xs">June 22th, 2024</p>
              </div>
            </div>
            <div class="flex gap-1 items-center">
              <p class="text-red-600">4600</p>
              <ion-icon name="caret-forward-outline" class="text-red-600"></ion-icon>
            </div>
          </div>
          <div class="mt-auto mx-auto">
            <button>Ask for Payments</button>
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
  name: "EscrowPaymentOngoingProject",
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
