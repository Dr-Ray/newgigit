<template>
  <DashBoardComponentProvider  v-slot="{ togglebar }">
    <DashboardHeader msg="" @toggleBar="togglebar($event)"/>
    <div class="w-full px-3 py-2">
      <router-link
        to="/company/dashboard/"
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

        <div class="w-3/5 px-4">
          <div class="mt-6">
            <p class="font-medium text-xs">Job other description</p>
            <div class="mt-8">
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
                  <p class="font-medium text-sm my-4">
                    How do we feel about Customer Success Manager in tech as an exit? My
                    gut tells me it’s chill and decently paying but kinda menial customer
                    service firefighting type work and might pigeonhole me/be limt How do
                    we feel about Customer Success Manager in tech as an exit? My gut
                    tells me it’s chill and decently paying but kinda menial customer
                    service firefighting type work and might pigeonhole me/be lim
                  </p>
                </div>
              </div>
              <div class="border-[#90909052] w-full" style="border-width: 1px"></div>

              <div class="flex items-center gap-6 p-4 my-2">
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
                </div>
              </div>

              <div class="border-[#90909052] w-full" style="border-width: 1px"></div>
              <div class="flex items-center gap-6 p-4">
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
            </div>
          </div>
        </div>

        <div class="w-full flex flex-col gap-4 px-4">
          <div class="flex flex-col gap-3">
            <p class="text-xs text-[#606060]">Terms</p>
            <p class="font-bold text-base">Payment timelines</p>
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <div
                class="flex justify-center items-center w-4 h-4 rounded-full bg-[#d4a21b33]"
              >
                <div class="w-3 h-3 rounded-full bg-[#0071ce]"></div>
              </div>
              <p class="font-medium text-sm">Get payed at the end of the project</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-4 h-4 rounded-full bg-[#d4a21b33]"></div>
              <p class="font-medium text-sm">
                Divide the project into smaller segments, called milestones. You'll be
                paid for milestones as they are completed and approved.
              </p>
            </div>
          </div>
        </div>

        <div class="w-full flex flex-col gap-4 px-4">
          <div class="flex flex-col gap-3">
            <p class="text-xs text-[#606060]">Smaller segment</p>
            <p class="font-bold text-base">Payment timelines</p>
          </div>
          <div class="flex flex-col gap-2">
            <form action="" class="flex items-center gap-6">
              <div
                class="rounded-full w-full bg-white flex gap-4 px-4 items-center"
                style="background-color: #cce3f533; border: 1px solid #d3d3d3"
              >
                <input type="text" placeholder="Description" class="w-full p-1" name="" />
              </div>
              <div
                class="rounded-full w-full bg-white flex gap-4 px-4 items-center"
                style="background-color: #cce3f533; border: 1px solid #d3d3d3"
              >
                <input type="text" placeholder="Date" class="w-full p-1" name="" />
              </div>
              <div
                class="rounded-full w-full bg-white flex gap-4 px-4 items-center"
                style="background-color: #cce3f533; border: 1px solid #d3d3d3"
              >
                <input type="text" placeholder="Amount" class="w-full p-1" name="" />
              </div>
            </form>
            <div class="flex gap-2 items-center">
              <ion-icon name="add-circle" class="text-[#0071ce]"></ion-icon>
              <p class="text-xs text-[#606060]">Add milestone</p>
            </div>
          </div>
        </div>

        <div class="w-full flex gap-6 px-4">
          <div class="w-1/2 flex flex-col gap-4">
            <div class="flex flex-col gap-3">
              <p class="text-xs text-[#606060]">Amount</p>
              <p class="font-bold text-base">Payments</p>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex justify-between">
                <p class="">Total price</p>
                <p class="">2000</p>
              </div>
              <div class="flex justify-between">
                <p class="">Charge</p>
                <p class="">2000</p>
              </div>
              <div class="flex justify-between">
                <p class="">Final payment</p>
                <p class="">2000</p>
              </div>
            </div>
          </div>
          <div class="w-1/2 flex flex-col gap-4">
            <div class="flex flex-col gap-3">
              <p class="text-xs text-[#606060]">Duration</p>
              <p class="font-bold text-base">Time taken to spend on project</p>
            </div>
            <form action="" class="flex items-center gap-6">
              <div
                class="rounded-full w-full bg-white flex gap-4 px-4 items-center"
                style="background-color: #cce3f533; border: 1px solid #d3d3d3"
              >
                <input type="text" placeholder="12 weeks" class="w-full p-1" name="" />
              </div>
            </form>
          </div>
        </div>

        <div class="w-2/5 px-4">
          <button class="w-full">Next</button>
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
  name: "CompanyfindJobApply",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
    ProfileDetailsRight,
  },
};
</script>

<style scoped></style>
