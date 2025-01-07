<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <div class="p-6">
      <DashboardHeader
        msg="Send a mail"
        @toggleBar="togglebar($event)"
        :showSearchBar="false"
      />
    </div>
    <div></div>
    <div class="px-4">
      <p class="text-xl mt-2 mb-6 font-bold">Create Template</p>
    </div>
    <div class="w-full md:w-3/5 my-4 flex p-2">
      <div class="w-full bg-white py-3 px-2">
        <form action="#" class="flex flex-col gap-6">
          <div
            class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <input type="text" placeholder="Subject" class="w-full p-1" name="" />
          </div>

          <div class="w-full">
            <p class="text-[#424242]">Description</p>
            <div class="flex items-center gap-3">
              <div class="flex items-center gap-3 py-2 pl-2 pr-4 rounded-xl border">
                <p class="text-[#424242]" style="font-size: 8px">Paragraph</p>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </div>
              <div class="flex items-center gap-3 py-2 pl-2 pr-4 rounded-xl border">
                <p class="text-[#424242]" style="font-size: 8px">12pt</p>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </div>

              <div class="flex items-center gap-3 py-2 pl-2 pr-4 rounded-xl border">
                <p class="font-bold text-sm">B</p>
                <p class="font-bold text-sm" style="font-style: italic">I</p>
                <ion-icon name="image-outline" class="font-bold text-sm"></ion-icon>
              </div>
            </div>
          </div>

          <div
            class="w-full bg-white flex gap-4 px-4 py-2 items-center rounded-3xl"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <input
              type="text"
              placeholder="Subject"
              class="w-full p-1 min-h-[172px] rounded-3xl"
              name=""
            />
          </div>
          <button class="w-full mt-4" type="submit">Send</button>
        </form>
      </div>
    </div>
  </DashBoardComponentProvider>
</template>

<script>
import DashBoardComponentProvider from "./components/dashboardComponent.vue";
import DashboardHeader from "./components/dashboardHeader.vue";
export default {
  name: "AdminSendMail",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
  },
};
</script>

<style scoped></style>
