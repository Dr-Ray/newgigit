<template>
  <div class="flex gap-4 mt-4 overflow-x-auto">
    <div
      class="w-full rounded-2xl border border-solid border-[#E0E0E0] p-4 flex flex-col gap-4"
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
        <Linechart />
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
    
    <div
      class="w-full rounded-2xl border border-solid border-[#E0E0E0] p-4 flex flex-col gap-4"
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
        <Barchart />
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
      class="rounded-2xl border border-solid border-[#E0E0E0] p-4 flex flex-col justify-between min-w-[210px]"
    >
      <div class="flex flex-col gap-1">
        <p class="font-bold text-xs text-[#B4AEAE]">Escrow payment</p>
        <div class="flex justify-between items-center">
          <ion-icon name="chevron-back"></ion-icon>
          <p class="text-[#2E2E30] font-bold text-xs" style="font-size: 10px">
            March 2023
          </p>
          <ion-icon name="chevron-forward"></ion-icon>
        </div>
      </div>
      <div class="min-h-[220px]">
        <Donoughtchart />
      </div>

      <div class="bottum px-4 flex flex-col gap-2">
        <div class="flex items-center justify-between w-full">
          <div class="flex gap-2 items-center">
            <div class="bg-[#344BFD] rounded-full w-2 h-2"></div>
            <p class="text-[#767676] font-bold" style="font-size: 8px">Successful paid</p>
          </div>
          <p class="text-[#404040] font-bold" style="font-size: 8px">10,000</p>
        </div>
        <div class="flex items-center justify-between w-full">
          <div class="flex gap-2 items-center">
            <div class="bg-[#344BFD] rounded-full w-2 h-2"></div>
            <p class="text-[#767676] font-bold" style="font-size: 8px">Pending</p>
          </div>
          <p class="text-[#404040] font-bold" style="font-size: 8px">30,000</p>
        </div>
        <div class="flex items-center justify-between w-full">
          <div class="flex gap-2 items-center">
            <div class="bg-[#344BFD] rounded-full w-2 h-2"></div>
            <p class="text-[#767676] font-bold" style="font-size: 8px">Failed</p>
          </div>
          <p class="text-[#404040] font-bold" style="font-size: 8px">70,000</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Barchart from "../chart/barchart.vue";
import Donoughtchart from "../chart/donoughtchart.vue";
import Linechart from "../chart/linechart.vue";
export default {
  name: "AdminChart2",
  components: {
    Barchart,
    Linechart,
    Donoughtchart,
  },
};
</script>

<style scoped></style>
