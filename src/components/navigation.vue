<template>
  <div class="hr-row w-full justify-between h-14 mt-2">
    <div class="hr-row gap-2">
      <img src="/logo.png" alt="logo" style="width: auto; height: 100px" />
      <ul class="hr-row justify-between gap-2">
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
    <div class="hr-row gap-2">
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
    </div>
  </div>
</template>
<script>
import ButtonElememt from "./button.vue";
export default {
  name: "NavigationHeader",
  components: {
    ButtonElememt,
  },
};
</script>
<style scoped>
img {
  height: 58px;
  width: auto;
}
</style>
