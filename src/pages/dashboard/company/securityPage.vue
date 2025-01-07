<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <DashboardHeader
      msg="Security"
      :showSearchBar="false"
      @toggleBar="togglebar($event)"
    />

    <div class="flex justify-between px-4 pt-8 md:w-4/5">
      <p
        :class="[tab1 ? 'text-[#0071ce] border-b-2 border-[#0071ce]' : '']"
        class="font-bold text-base cursor-pointer"
        @click="tab1 = true"
      >
        Change password
      </p>
      <p
        :class="[tab1 ? '' : 'text-[#0071ce] border-b-2 border-[#0071ce]']"
        class="font-bold text-base cursor-pointer"
        @click="tab1 = false"
      >
        Change mail
      </p>
    </div>
    <div class="border-[#90909052] w-full" style="border-width: 1px"></div>
    <div class="flex-1 flex justify-center items-center">
      <div class="p-2 md:w-[400px] mx-auto" v-show="tab1">
        <form action="" class="flex flex-col gap-6">
          <div
            class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <input type="text" placeholder="Old Password" class="w-full p-1" name="" />
          </div>
          <div
            class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <input type="text" placeholder="New Password" class="w-full p-1" name="" />
          </div>
          <div
            class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <input
              type="text"
              placeholder="Confirm password"
              class="w-full p-1"
              name=""
            />
          </div>
          <button class="w-full" type="submit">Change password</button>
        </form>
      </div>
      <div class="p-2 md:w-[400px] mx-auto" v-show="!tab1">
        <form action="" class="flex flex-col gap-6">
          <div
            class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <input
              type="text"
              placeholder="New Email address"
              class="w-full p-1"
              name=""
            />
          </div>
          <div
            class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <input type="text" placeholder="Password" class="w-full p-1" name="" />
          </div>

          <button class="w-full" type="submit">Change mail</button>
        </form>
      </div>
    </div>
  </DashBoardComponentProvider>
</template>

<script>
import DashBoardComponentProvider from "./components/dashboardComponent.vue";
import DashboardHeader from "./components/dashboardHeader.vue";
export default {
  name: "CompanysecurityPage",
  data() {
    return {
      tab1: true,
    };
  },
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
  },
};
</script>

<style scoped></style>
