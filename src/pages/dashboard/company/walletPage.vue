<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <DashboardHeader msg="Wallet" @toggleBar="togglebar($event)"/>
    <div class="flex items-center gap-4 px-4 py-2 overflow-x-auto min-h-[220px]">
      <div
        class="min-w-[395px] rounded-3xl p-4 flex flex-col justify-between min-h-[218px]"
        style="
          background: linear-gradient(rgba(17, 121, 206, 0.92), rgba(17, 121, 206, 0.92)),
            url('/576fe9f3a4e70658a262220df348c21d.jpg');
          background-position: center;
        "
      >
        <div class="flex gap-2 items-center">
          <div class="w-7 h-7 rounded-full flex justify-center items-center bg-white">
            <ion-icon name="wallet-outline"></ion-icon>
          </div>
          <p class="text-white">Wallet balance</p>
        </div>
        <p class="font-bold text-3xl text-white">12,000,000</p>
        <div class="flex gap-3 items-center">
          <button class="text-[#0071CE] bg-white font-medium text-sm w-28">
            Deposit
          </button>
          <button class="text-[#0071CE] bg-white font-medium text-sm w-28">
            Withdrawal
          </button>
        </div>
      </div>

      <div
        class="min-w-[395px] rounded-3xl p-4 flex flex-col gap-6 h-[218px]"
        style="
          background: linear-gradient(#eaebe7, #eaebe7),
            url('/576fe9f3a4e70658a262220df348c21d.jpg');
          background-position: center;
        "
      >
        <div class="flex gap-2 items-center">
          <ion-icon name="wallet-outline" class="text-[#909090]"></ion-icon>
          <p class="text-[#909090] font-bold">Payment details</p>
        </div>
        <div
          class="rounded-full w-full flex justify-between gap-4 items-center py-4 px-2"
          style="border: 1px solid #d3d3d3"
          @click="openCardDetails = true"
        >
          <div class="text-sm text-[#909090] font-bold">Card details</div>
          <div class="flex gap-4 items-center">
            <div class="">
              <p class="text-[#909090] font-bold" style="font-size: 10px">Verve</p>
              <p class="text-[#909090] font-bold" style="font-size: 4px">
                Last updated 20th jan,2024
              </p>
            </div>
            <ion-icon name="caret-forward-outline" class="text-[#0071CE]"></ion-icon>
          </div>
        </div>
        <div
          class="rounded-full w-full flex justify-between gap-4 items-center py-4 px-2"
          style="border: 1px solid #d3d3d3"
          @click="openAcct = true"
        >
          <div class="text-sm text-[#909090] font-bold">Account number</div>
          <div class="flex gap-4 items-center">
            <div class="">
              <p class="text-[#909090] font-bold" style="font-size: 10px">01017262353</p>
              <p class="text-[#909090] font-bold" style="font-size: 4px">
                Last updated 20th jan,2024
              </p>
            </div>
            <ion-icon name="caret-forward-outline" class="text-[#0071CE]"></ion-icon>
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-4">
      <div class="w-1/2">
        <div
          class="flex flex-col rounded-lg p-4 h-80 bg-slate-900"
          style="background-color: #6cd5dc0d"
        >
          <div class="flex justify-between">
            <h3 class="p-2 mb-2">Transaction history</h3>
            <router-link to="#" class="p-2 mb-2 text-[#0071CE] font-bold text-sm">
              See more
            </router-link>
          </div>
          <div class="flex flex-col gap-8">
            <div class="flex items-center justify-between p-3" v-for="() in posts">
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-full flex justify-center items-center bg-[#D4A21B33]"
                >
                  <ion-icon name="cash-outline"></ion-icon>
                </div>

                <div class="">
                  <p class="font-bold text-sm">Pending</p>
                  <p class="font-light text-xs text-[#909090]" style="font-size: 8px">
                    June 22th, 2024
                  </p>
                </div>
              </div>
              <div class="flex gap-1 items-center">
                <p class="text-[#00CE3E]">+4600</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div
          class="flex flex-col rounded-lg p-4 h-80 bg-slate-900"
          style="background-color: #6cd5dc0d"
        >
          <div class="flex justify-between">
            <h3 class="p-2 mb-2">Ongoing escrow payment</h3>
            <router-link to="#" class="p-2 mb-2 text-[#0071CE] font-bold text-sm">
              See more
            </router-link>
          </div>
          <div class="flex flex-col gap-8">
            <div class="flex items-center justify-between p-3" v-for="() in posts">
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-full flex justify-center items-center bg-[#D4A21B33]"
                >
                  <ion-icon name="cash-outline"></ion-icon>
                </div>

                <div class="">
                  <p class="font-bold text-sm">Pending</p>
                  <p class="font-light text-xs text-[#909090]" style="font-size: 8px">
                    June 22th, 2024
                  </p>
                </div>
              </div>
              <div class="flex gap-1 items-center">
                <p class="text-[#CE0300]">-4600</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="fixed top-0 left-0 h-full w-full flex justify-center items-center z-50"
      v-show="openBuy"
      @click="openBuy = !openBuy"
    >
      <PopUpSlot imgSrc="/c9b82157a5d466eed3ce62f1e1c97647.png">
        <div class="bg-white py-3 px-2 flex flex-col justify-between h-full w-2/3">
          <div class="flex flex-col gap-1">
            <p class="text-xl font-bold text-[#606060]">Buy Grifitis</p>
            <p class="text-xs font-medium text-[#909090]">Get grifitis to bid for jobs</p>

            <div
              class="text-sm py-2 px-4 rounded-full bg-[#d4a21b33] w-fit flex gap-1 items-center text-[#0071ce]"
            >
              <ion-icon name="alert-circle"></ion-icon>
              <p class="text-[#0071CE] font-bold" style="font-size: 8px">
                1 Grifitis = $0.5
              </p>
            </div>
          </div>
          <div
            class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <input type="text" placeholder="Amount" class="w-full p-1" name="" />
          </div>
          <button class="w-full" type="submit">Buy</button>
        </div>
      </PopUpSlot>
    </div>

    <div
      class="fixed top-0 left-0 h-full w-full flex justify-center items-center z-50"
      v-show="openCardDetails"
      @click="openCardDetails = !openCardDetails"
    >
      <PopUpSlot imgSrc="/4fb55081a41daeffc0b1449a3f739b1d.png">
        <div class="bg-white py-3 px-4 flex flex-col justify-between h-full w-2/3">
          <div class="flex flex-col gap-1 mb-4">
            <p class="text-xl font-bold text-[#606060]">Card details</p>
            <p class="text-xs font-medium text-[#909090]">Deposit using your card</p>
          </div>
          <div
            class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <input type="text" placeholder="Card number" class="w-full p-1" name="" />
          </div>
          <div
            class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <input type="text" placeholder="Bank name" class="w-full p-1" name="" />
          </div>
          <div class="flex gap-6 items-center">
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <input type="text" placeholder="Expiring date" class="w-full p-1" name="" />
            </div>
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <input type="text" placeholder="Cvv" class="w-full p-1" name="" />
            </div>
          </div>
          <button class="w-full" type="submit">Update</button>
        </div>
      </PopUpSlot>
    </div>

    <div
      class="fixed top-0 left-0 h-full w-full flex justify-center items-center z-50"
      v-show="openAcct"
      @click="openAcct = !openAcct"
    >
      <PopUpSlot imgSrc="/c3902746644b2dc0f2d6d57d9e2cfac4.png">
        <div class="bg-white py-3 px-4 flex flex-col justify-between h-full w-2/3">
          <div class="flex flex-col gap-1 mb-4">
            <p class="text-xl font-bold text-[#606060]">Account number</p>
            <p class="text-xs font-medium text-[#909090]">Deposit using your card</p>
          </div>
          <div
            class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <input type="text" placeholder="Account number" class="w-full p-1" name="" />
          </div>
          <div
            class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <input type="text" placeholder="Bank name" class="w-full p-1" name="" />
          </div>
          <div class="flex gap-6 items-center">
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <input type="text" placeholder="Expiring date" class="w-full p-1" name="" />
            </div>
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <input type="text" placeholder="Cvv" class="w-full p-1" name="" />
            </div>
          </div>
          <button class="w-full" type="submit">Update</button>
        </div>
      </PopUpSlot>
    </div>
  </DashBoardComponentProvider>
</template>

<script>
import DashBoardComponentProvider from "./components/dashboardComponent.vue";
import DashboardHeader from "./components/dashboardHeader.vue";
import PopUpSlot from "./components/popUpSlot.vue";
export default {
  name: "CompanyWalletPage",
  data() {
    return {
      posts: ["1Q", "2D", "3S", "4M"],
      openBuy: false,
      openCardDetails: false,
      openAcct: false,
    };
  },
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
    PopUpSlot,
  },
};
</script>

<style scoped></style>
