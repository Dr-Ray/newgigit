<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <div class="p-6">
      <DashboardHeader
        msg="Payment Methods"
        @toggleBar="togglebar($event)"
        :showSearchBar="false"
      />
    </div>
    <div class="w-full flex items-center gap-6 px-8 py-2">
      <router-link
        to="/admin/dashboard/"
        class="text-sm font-medium p-3 rounded-full w-fit my-2 flex gap-3 items-center text-[#0071ce] bg-[#d4a21b33]"
      >
        <p>Kazatran</p>
      </router-link>
      <router-link
        to="/admin/dashboard/"
        class="text-sm font-medium p-3 rounded-full w-fit my-2 flex gap-3 items-center text-white bg-[#0071ce]"
      >
        <p>Stripe</p>
      </router-link>
      <router-link
        to="/admin/dashboard/"
        class="text-sm font-medium p-3 rounded-full w-fit my-2 flex gap-3 items-center text-[#0071ce] bg-[#d4a21b33]"
      >
        <p>Paysack</p>
      </router-link>
    </div>

    <div class="border-[#90909052] w-full"></div>
    <div class="flex-1 flex justify-center items-center">
      <div class="p-2 md:w-[400px] mx-auto">
        <div class="flex justify-between items-center mb-8">
          <p class="text-[#9D9D9D] font-bold text-lg">Update application settings</p>
          <div class="flex gap-3 items-center">
            <p class="text-[#9D9D9D] font-bold text-sm">Disable</p>
            <ion-icon name="toggle" @click="tab1 = true" v-show="!tab1"></ion-icon>
            <ion-icon
              name="toggle-outline"
              @click="tab1 = false"
              v-show="tab1"
            ></ion-icon>
          </div>
        </div>
        <form action="" class="flex flex-col gap-6">
          <div
            class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <input type="text" placeholder="Tranzak App Id" class="w-full p-1" name="" />
          </div>
          <div
            class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <input type="text" placeholder="Tranzak Api Key" class="w-full p-1" name="" />
          </div>
          <div
            class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <input type="text" placeholder="Tranzak Api Url" class="w-full p-1" name="" />
          </div>
          <div
            class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <input
              type="text"
              placeholder="Tranzak Return Url"
              class="w-full p-1"
              name=""
            />
          </div>
          <button class="w-full" type="submit">Upoad</button>
        </form>
      </div>
    </div>
  </DashBoardComponentProvider>
</template>

<script>
import DashBoardComponentProvider from "./components/dashboardComponent.vue";
import DashboardHeader from "./components/dashboardHeader.vue";
export default {
  name: "AdminPaymentMethod",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
  },
  data() {
    return {
      tab1: true,
    };
  },
};
</script>

<style scoped></style>
