<template>
  <div class="flex gap-4 mt-4">
    <div
      class="flex-1 rounded-2xl border border-solid border-[#E0E0E0] p-4 flex flex-col gap-4"
    >
      <div class="flex items-center gap-3">
        <p class="font-bold text-xs text-[#B4AEAE]">Total active user</p>
        <div class="flex items-center gap-3 py-2 pl-2 pr-4 rounded-xl border">
          <p class="text-[#424242]" style="font-size: 8px">Active users</p>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
        <div class="flex items-center gap-3 py-2 pl-2 pr-4 rounded-xl border">
          <p class="text-[#424242]" style="font-size: 8px">This month</p>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
      </div>
      <div class="min-h-[220px]">
        <router-link :to="linkUrl">
        <Barchart />
        </router-link>
      </div>
      <div class="bottum flex items-center gap-8 overflow-x-auto">
        <div class="flex gap-3">
          <div
            class="bg-[#FFC22040] w-14 h-12 rounded-2xl flex items-center justify-center"
          >
            <ion-icon
              name="trending-up-outline"
              class="text-[#0071CE] font-bold text-2xl"
            ></ion-icon>
          </div>
          <div class="flex flex-col justify-between py-1">
            <p class="text-[#828282] text-xs">4</p>
            <p class="text-[#828282] text-xs">Today</p>
          </div>
        </div>
        <div class="flex gap-3">
          <div
            class="bg-[#FFC22040] w-14 h-12 rounded-2xl flex items-center justify-center"
          >
            <ion-icon
              name="trending-up-outline"
              class="text-[#0071CE] font-bold text-2xl"
            ></ion-icon>
          </div>
          <div class="flex flex-col justify-between py-1">
            <p class="text-[#828282] text-xs">23</p>
            <p class="text-[#828282] text-xs">This month</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex-1 rounded-2xl border border-solid border-[#E0E0E0] p-4 flex flex-col gap-4"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <p class="font-bold text-xs text-[#B4AEAE]">Total revenue</p>
          <div class="flex items-center gap-3 py-2 pl-2 pr-4 rounded-xl border">
            <p class="text-[#424242]" style="font-size: 8px">This month</p>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
        </div>
        <div class="flex items-center">
          <p class="font-bold text-sm items-center">$125+</p>
          <ion-icon
            name="arrow-up-outline"
            class="text-[#0071CE] font-bold text-xl"
          ></ion-icon>
        </div>
      </div>
      <div class="min-h-[220px]">
        <router-link :to="linkUrl">
          <Linechart />
        </router-link>
      </div>
      <div class="bottum flex gap-4">
        <div class="flex gap-3">
          <div class="bg-[#FFC22040] w-14 h-12 flex items-center justify-center">
            <ion-icon
              name="trending-up-outline"
              class="text-[#0071CE] font-bold text-2xl"
            ></ion-icon>
          </div>
          <div class="flex flex-col justify-between py-1">
            <p class="text-[#828282] text-xs">₦25,000</p>
            <p class="text-[#828282] text-xs">Today</p>
          </div>
        </div>
        <div class="flex gap-3">
          <div class="bg-[#FFC22040] w-14 h-12 flex items-center justify-center">
            <ion-icon
              name="trending-up-outline"
              class="text-[#0071CE] font-bold text-2xl"
            ></ion-icon>
          </div>
          <div class="flex flex-col justify-between py-1">
            <p class="text-[#828282] text-xs">₦25,000</p>
            <p class="text-[#828282] text-xs">Today</p>
          </div>
        </div>
        <div class="flex gap-3">
          <div class="bg-[#FFC22040] w-14 h-12 flex items-center justify-center">
            <ion-icon
              name="trending-up-outline"
              class="text-[#0071CE] font-bold text-2xl"
            ></ion-icon>
          </div>
          <div class="flex flex-col justify-between py-1">
            <p class="text-[#828282] text-xs">₦25,000</p>
            <p class="text-[#828282] text-xs">Today</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Barchart from "../chart/barchart.vue";
import Linechart from "../chart/linechart.vue";
export default {
  name: "AdminChart1",
  components: {
    Barchart,
    Linechart,
  },
  props:{
    linkUrl:String
  }
};
</script>

<style scoped></style>
