<template>
  <DashBoardComponentProvider  v-slot="{ togglebar }">
    <DashboardHeader msg="" @toggleBar="togglebar($event)"/>
    <div class="w-full px-3 py-2">
      <router-link
        to="/freelancer/dashboard/"
        class="text-sm font-medium p-2 rounded-xl w-full my-2 flex gap-3 items-center text-[#0071ce] bg-[#d4a21b33]"
      >
        <ion-icon name="caret-back-outline"></ion-icon>
        <p>Apply for gig</p>
      </router-link>
    </div>
    <div class="flex px-4 py-2 gap-2">
      <div class="w-full my-4 flex flex-col gap-12">
        <div class="w-4/5">
          <div class="flex justify-between">
            <div class="rounded-3xl flex justify-between px-4 py-2">
              <div class="wdgt-tops flex flex-col gap-4">
                <p class="font-medium text-xs">Posted 2 days ago</p>
                <div class="">
                  <h3 class="font-bold text-xl mb-2 text-[#6C6C6C]">
                    Ux design landing pages
                  </h3>
                  <div class="flex items-center gap-7">
                    <div class="flex items-center gap-1">
                      <img
                        src="/830dc8455e8050e59d7edf7f5100f751.png"
                        class="h-8 w-8 rounded-full object-cover"
                        alt=""
                      />
                      <p class="font-medium text-[#6C6C6C]">Prime movies cop</p>
                    </div>
                    <div class="flex items-center gap-1">
                      <ion-icon
                        name="caret-forward-outline"
                        class="text-[#909090]"
                      ></ion-icon>
                      <p class="font-medium text-[#6C6C6C]">Nigeria</p>
                    </div>
                  </div>
                </div>
                <div
                  class="flex gap-3 items-center bg-[#d4a21b33] rounded-full text-xs px-3"
                >
                  <ion-icon name="alert-circle" class="text-[#0071ce]"></ion-icon>
                  <p class="text-[#0071ce] font-medium" style="font-size: 8px">
                    This application would initially cost 10 grafittis to be among the
                    first to be seen by clients you can bid more
                  </p>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <img src="/Frame18.png" class="h-20 w-20 rounded-full" alt="" />
              </div>
            </div>
            <div
              class="h-32 rounded-3xl flex p-4"
              style="background-color: rgb(240, 251, 252)"
            >
              <div class="flex flex-col gap-4">
                <div class="flex items-center gap-3">
                  <ion-icon name="wallet-outline"></ion-icon>
                  <p class="font-medium">Grattifis balance</p>
                </div>
                <h2 class="font-bold text-2xl">12,000,</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="w-1/2 px-4">
          <div class="mt-6">
            <p class="font-medium text-xs">Upload your cv or resume</p>
            <div
              class="mt-8 bg-[#D4A21B33] h-[175px] rounded-3xl flex flex-col items-center justify-center"
            >
              <ion-icon name="cloud-upload"></ion-icon>
              <p class="text-[#649CC5] text-xs">Upload your document</p>
            </div>
          </div>
        </div>

        <div class="w-1/2 px-4">
          <div class="mt-6">
            <p class="font-medium text-xs">Input your cover letter</p>
            <div class="mt-8 bg-[#CCE3F533] h-[175px] rounded-3xl flex flex-col p-4">
              <p class="text-[#6C6C6C] text-xs">Bank name</p>
            </div>
          </div>
        </div>

        <div class="w-1/2 px-4">
          <div class="mt-6">
            <p class="font-medium text-xs text-[#6C6C6C]">#606060</p>
            <div
              class="my-4 h-[175px] rounded-3xl flex flex-col p-4 overflow-hidden"
              style="
                background: linear-gradient(
                    rgba(204, 227, 245, 0.2),
                    rgba(204, 227, 245, 0.2)
                  ),
                  url('/da6a9ce3347f6d6739a83cecb743a826.png');
                background-position: center;
              "
            ></div>
            <button>Use link instead</button>
          </div>
        </div>

        <div class="w-1/2 px-4">
          <button class="w-full">Apply</button>
        </div>
      </div>
    </div>
  </DashBoardComponentProvider>
</template>

<script>
import DashBoardComponentProvider from "./components/dashboardComponent.vue";
import DashboardHeader from "./components/dashboardHeader.vue";
import ProfileDetailsRight from "./components/profileRight.vue";
export default {
  name: "findJobApply2",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
    ProfileDetailsRight,
  },
};
</script>

<style scoped></style>
