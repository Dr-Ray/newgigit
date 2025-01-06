<template>
  <div class="container md:hidden">
    <NavigationHeader />
  </div>
  <div class="flex w-full h-screen overflow-hidden">
    <div
      class="relative w-1/2 hidden md:flex flex-col justify-between h-full py-4 px-2"
      style="
        background: linear-gradient(rgba(17, 121, 206, 0.92), rgba(17, 121, 206, 0.92)),
          url('/576fe9f3a4e70658a262220df348c21d.jpg');
        background-position: center;
      "
    >
      <router-link to="/" class="font-bold">
        <img src="/Gigitright White PNG.png" alt="" class="w-32 h-32" />
      </router-link>
      <img
        src="/9555fa124c260622828367f7a198a7c8.png"
        class="absolute h-[45px] md:h-auto"
        style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
        alt=""
      />
      <p class="font-bold text-3xl text-white mb-2 text-center">
        Get your next job using
        <span
          class="text-3xl"
          style="border: 2px solid #d4a21b; border-radius: 50%; padding: 2px"
          >Gigitright</span
        >
      </p>
    </div>
    <div class="flex-1 overflow-y-auto">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import NavigationHeader from "./navigation.vue";
export default {
  name: "AuthComponentProvider",
  components: {
    NavigationHeader,
  },
};
</script>
