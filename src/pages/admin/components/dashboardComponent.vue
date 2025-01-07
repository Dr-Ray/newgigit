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
      <div class="w-60 px-2 mx-auto">
        <ul class="flex flex-col gap-8">
          <li>
            <router-link
              to="/admin/dashboard/"
              class="font-bold px-4 py-2 text-white flex items-center gap-1 hover:bg-[#639AC3] rounded-3xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>

              Users
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin/dashboard/payment/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="briefcase-outline"></ion-icon>
              Payment Method
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin/dashboard/announcement/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="people-outline"></ion-icon>
              Announcement
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin/dashboard/wallet/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="wallet-outline"></ion-icon>
              Wallet
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin/dashboard/mail/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="chatbubbles-outline"></ion-icon>
              Mail
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin/dashboard/buyer-mgt/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="bag-check-outline"></ion-icon>
              Buyer management
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin/dashboard/seller-mgt/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="bag-check-outline"></ion-icon>
              Seller management
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
      <div class="w-60 px-2 mx-auto">
        <ul class="flex flex-col gap-8">
          <li>
            <router-link
              to="/admin/dashboard/"
              class="font-bold px-4 py-2 text-white flex items-center gap-1 hover:bg-[#639AC3] rounded-3xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>

              Users
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin/dashboard/payment/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="briefcase-outline"></ion-icon>
              Payment Method
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin/dashboard/announcement/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="people-outline"></ion-icon>
              Announcement
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin/dashboard/wallet/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="wallet-outline"></ion-icon>
              Wallet
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin/dashboard/mail/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="chatbubbles-outline"></ion-icon>
              Mail
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin/dashboard/buyer-mgt/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="bag-check-outline"></ion-icon>
              Buyer management
            </router-link>
          </li>
          <li>
            <router-link
              to="/admin/dashboard/seller-mgt/"
              class="text-white font-bold px-4 py-2 flex items-center gap-1 rounded-3xl hover:bg-[#639AC3]"
            >
              <ion-icon name="bag-check-outline"></ion-icon>
              Seller management
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
