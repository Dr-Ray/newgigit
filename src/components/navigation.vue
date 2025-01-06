<template>
  <div class="hr-row w-full justify-between">
    <div class="hr-row gap-2">
      <router-link to="/">
        <img src="/logo.png" alt="logo" style="width: auto; height: 100px" />
      </router-link>
      <!-- Big screen navigation -->
      <ul class="hidden md:flex items-center justify-between gap-2">
        <li class="text-base text-zinc-900 font-bold">Home</li>
        <li class="text-base text-zinc-500 hover:text-zinc-900 font-bold">Find work</li>
        <li class="text-base text-zinc-500 hover:text-zinc-900 font-bold">
          Search for skill
        </li>
        <li class="text-base text-zinc-500 hover:text-zinc-900 font-bold">
          How it works
        </li>
      </ul>
      <!-- Small screen navigation -->
      <div
        :class="[openBar ? 'left-0' : 'left-[-300px]']"
        class="md:hidden overflow-hidden visible z-50 h-full fixed w-72 top-0 transition-all"
        style="
          background: linear-gradient(rgba(17, 121, 206, 0.92), rgba(17, 121, 206, 0.92)),
            url('/576fe9f3a4e70658a262220df348c21d.jpg');
          background-position: center;
        "
      >
        <router-link to="/" class="font-bold">
          <img src="/Gigitright White PNG.png" alt="" class="w-32 h-32" />
        </router-link>
        <ul class="h-full px-3 flex flex-col gap-4 py-4">
          <li class="text-base text-zinc-900 font-bold">Home</li>
          <li class="text-base text-zinc-500 hover:text-zinc-900 font-bold">Find work</li>
          <li class="text-base text-zinc-500 hover:text-zinc-900 font-bold">
            Search for skill
          </li>
          <li class="text-base text-zinc-500 hover:text-zinc-900 font-bold">
            How it works
          </li>
        </ul>
      </div>
      <div
        :class="[openBar ? 'w-full' : 'w-0']"
        class="fixed z-10 h-full top-0 left-0 bg-transparent"
        @click="openBar = !openBar"
      ></div>
    </div>
    <div class="hr-row gap-3">
      <router-link
        to="/register"
        class="block px-4 py-2 w-fit rounded-full text-white"
        style="background-color: #0071ce"
        >Sign Up</router-link
      >
      <router-link
        to="/login"
        class="block px-4 py-2 w-fit rounded-full"
        style="border: 1px solid #0071ce; color: #0071ce"
        >Log in</router-link
      >
      <div class="md:hidden text-2xl font-bold" @click="openBar = !openBar">&#9776;</div>
      <!-- <div
        :class="[openBar ? 'block' : 'hidden']"
        class="md:hidden text-2xl"
        @click="openBar = !openBar"
      >
        &times;
      </div> -->
    </div>
  </div>
</template>
<script>
import ButtonElememt from "./button.vue";
export default {
  name: "NavigationHeader",
  data() {
    return {
      openBar: false,
    };
  },
  components: {
    ButtonElememt,
  },
};
</script>
<style scoped></style>
