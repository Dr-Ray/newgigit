<template>
  <div class="flex w-full h-screen overflow-hidden">
    <!-- Big screen -->
    <div
      class="relative hidden w-64 md:flex flex-col h-full py-4 px-2"
      style="
        background: linear-gradient(rgba(17, 121, 206, 0.92), rgba(17, 121, 206, 0.92)),
          url('/576fe9f3a4e70658a262220df348c21d.jpg');
        background-position: center;
      "
    >
      <router-link to="/" class="font-bold">
        <img src="/Gigitright White PNG.png" alt="" class="w-32 h-32" />
      </router-link>
      <div class="w-40 px-2 mx-auto">
        <ul class="flex flex-col gap-8">
          <li>
            <router-link
              to="/company/dashboard/"
              class="font-bold px-4 py-2 text-white flex items-center gap-1 hover:bg-[#639AC3] rounded-3xl"
            >
              <ion-icon name="grid-outline"></ion-icon>
              Dashboard
            </router-link>
          </li>
          <li>
            <router-link
              to="/company/dashboard/find-a-talent/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="briefcase-outline"></ion-icon>
              Find a Talent
            </router-link>
          </li>
          <li>
            <router-link
              to="/company/dashboard/community/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="people-outline"></ion-icon>
              Community
            </router-link>
          </li>
          <li>
            <router-link
              to="/company/dashboard/wallet/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="wallet-outline"></ion-icon>
              Wallet
            </router-link>
          </li>
          <li>
            <router-link
              to="/company/dashboard/message/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="chatbubbles-outline"></ion-icon>
              Message
            </router-link>
          </li>
          <li>
            <router-link
              to="/company/dashboard/security/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="bag-check-outline"></ion-icon>
              Security
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- Small Screen -->
    <div
      :class="[openBar ? 'left-[0px]' : 'left-[-260px]']"
      class="absolute z-20 w-64 md:hidden flex-col h-full py-4 px-2 transition-all"
      style="
        background: linear-gradient(rgba(17, 121, 206, 0.92), rgba(17, 121, 206, 0.92)),
          url('/576fe9f3a4e70658a262220df348c21d.jpg');
        background-position: center;
      "
    >
      <router-link to="/" class="font-bold">
        <img src="/Gigitright White PNG.png" alt="" class="w-32 h-32" />
      </router-link>
      <div class="w-40 px-2 mx-auto">
        <ul class="flex flex-col gap-8">
          <li>
            <router-link
              to="/company/dashboard/"
              class="font-bold px-4 py-2 text-white flex items-center gap-1 hover:bg-[#639AC3] rounded-3xl"
            >
              <ion-icon name="grid-outline"></ion-icon>
              Dashboard
            </router-link>
          </li>
          <li>
            <router-link
              to="/company/dashboard/find-a-talent/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="briefcase-outline"></ion-icon>
              Find a Talent
            </router-link>
          </li>
          <li>
            <router-link
              to="/company/dashboard/community/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="people-outline"></ion-icon>
              Community
            </router-link>
          </li>
          <li>
            <router-link
              to="/company/dashboard/wallet/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="wallet-outline"></ion-icon>
              Wallet
            </router-link>
          </li>
          <li>
            <router-link
              to="/company/dashboard/message/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="chatbubbles-outline"></ion-icon>
              Message
            </router-link>
          </li>
          <li>
            <router-link
              to="/company/dashboard/security/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="bag-check-outline"></ion-icon>
              Security
            </router-link>
          </li>
        </ul>
      </div>
      <div
        :class="[openBar ? 'w-full' : 'w-0']"
        class="fixed z-[-1] h-full top-0 left-0"
        @click="openBar = !openBar"
      ></div>
    </div>

    <div class="flex-1 flex flex-col overflow-y-auto">
      <slot :togglebar="toggleBar"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "DashBoardComponentProvider",
  data() {
    return {
      openBar: false,
    };
  },
  methods: {
    toggleBar() {
      this.openBar = !this.openBar;
    },
  },
};
</script>
