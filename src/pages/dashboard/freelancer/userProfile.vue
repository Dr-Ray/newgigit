<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <DashboardHeader msg="Profile" :showSearchBar="false" @toggleBar="togglebar($event)"/>
    <div class="flex px-3 py-2 gap-2">
      <div class="w-3/5 my-4">
        <div class="h-36 flex items-center justify-between px-4 py-2 bg-[#ECEDEA]">
          <div class="flex items-center gap-4">
            <img src="/u3.png" class="h-20 w-20 rounded-full object-cover" alt="" />
            <div class="text-center">
              <h2 class="font-bold text-xl">Andrew Factoe</h2>
              <p class="font-xs text-[#606060]">Designer</p>
            </div>
          </div>
          <div class="flex flex-col h-full">
            <button class="mt-auto">Change to public view</button>
          </div>
        </div>
      </div>

      <div class="w-2/5 my-4">
        <div
          class="h-36 rounded-3xl flex flex-col justify-between p-4"
          style="background-color: rgb(240, 251, 252)"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <ion-icon name="wallet-outline"></ion-icon>
              <p class="font-medium text-xs text-[#909090]">Payment rate</p>
            </div>
            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
          </div>
          <h2 class="font-bold text-2xl">$4 per hour</h2>
          <p class="text-xs text-[#909090]">Grifittis balance: 1000</p>
        </div>
      </div>
    </div>

    <div class="flex px-3 py-2 gap-2">
      <div class="w-2/5 mb-4">
        <div class="w-full flex flex-col gap-4 px-4">
          <p class="text-xs text-[#606060]">General info</p>
          <div class="flex flex-col gap-2">
            <form action="" class="flex flex-col items-center gap-6">
              <div
                class="rounded-full w-full bg-white flex gap-4 px-4 items-center"
                style="background-color: #cce3f533; border: 1px solid #d3d3d3"
              >
                <input
                  type="text"
                  placeholder="Virtue Andrew"
                  class="w-full px-1 py-2"
                  name=""
                />
              </div>
              <div
                class="rounded-full w-full bg-white flex gap-4 px-4 items-center"
                style="background-color: #cce3f533; border: 1px solid #d3d3d3"
              >
                <input
                  type="text"
                  placeholder="Virtueandrew@gmail.com"
                  class="w-full px-1 py-2"
                  name=""
                />
              </div>
              <div
                class="rounded-full w-full bg-white flex gap-4 px-4 items-center"
                style="background-color: #cce3f533; border: 1px solid #d3d3d3"
              >
                <input
                  type="text"
                  placeholder="Ui & Ux designer"
                  class="w-full px-1 py-2"
                  name=""
                />
              </div>
              <div
                class="rounded-full w-full bg-white flex gap-4 px-4 items-center"
                style="background-color: #cce3f533; border: 1px solid #d3d3d3"
              >
                <input
                  type="text"
                  placeholder="Nigeria"
                  class="w-full px-1 py-2"
                  name=""
                />
              </div>
              <div
                class="rounded-full w-full bg-white flex gap-4 px-4 items-center"
                style="background-color: #cce3f533; border: 1px solid #d3d3d3"
              >
                <input
                  type="text"
                  placeholder="Addidas"
                  class="w-full px-1 py-2"
                  name=""
                />
              </div>
              <div
                class="rounded-full w-full bg-white flex gap-4 px-4 items-center"
                style="background-color: #cce3f533; border: 1px solid #d3d3d3"
              >
                <input
                  type="text"
                  placeholder="English"
                  class="w-full px-1 py-2"
                  name=""
                />
              </div>
              <div
                class="rounded-full w-full bg-white flex gap-4 px-4 items-center"
                style="background-color: #cce3f533; border: 1px solid #d3d3d3"
              >
                <input
                  type="text"
                  placeholder="Electrical Engineering"
                  class="w-full px-1 py-2"
                  name=""
                />
              </div>
              <button class="w-full">Update</button>
            </form>
          </div>
        </div>
      </div>
      <div class="w-3/5 mb-4">
        <div class="w-full px-4">
          <div>
            <p class="font-medium text-xs">Resume</p>
            <div
              class="mt-8 bg-[#CCE3F533] min-h-[90px] border border-solid rounded-3xl flex p-4 justify-between items-center"
            >
              <ion-icon name="cloud-upload"></ion-icon>
              <ion-icon name="ellipsis-vertical-outline"></ion-icon>
            </div>
          </div>
        </div>

        <div class="w-full px-4 relative">
          <div class="mt-6">
            <p class="font-medium text-xs text-[#606060]">Portfolio</p>
            <div
              class="my-4 h-[175px] rounded-3xl flex items-center justify-center p-4 overflow-hidden"
              style="
                background: linear-gradient(
                    rgba(204, 227, 245, 0.8),
                    rgba(204, 227, 245, 0.8)
                  ),
                  url('/da6a9ce3347f6d6739a83cecb743a826.png');
                background-position: center;
              "
            >
              <button>View portfolio</button>
            </div>
          </div>
        </div>

        <div class="w-full px-4">
          <div class="mt-6">
            <p class="font-medium text-xs">Input your cover letter</p>
            <div class="mt-8 bg-[#CCE3F533] h-[175px] rounded-3xl flex flex-col p-4">
              <p class="text-[#6C6C6C] text-xs">Bank name</p>
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
export default {
  name: "UserProfile",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
  },
};
</script>

<style scoped></style>
