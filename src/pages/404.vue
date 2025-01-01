<template>
  <div
    class="h-screen w-full md:w-[400px] mx-auto flex flex-col gap-20 justify-center items-center"
  >
    <div class="flex gap-4 items-center">
      <p class="font-bold text-4xl">404</p>
      <p class="font-bold text-lg">Page Not Found</p>
    </div>

    <router-link to="/" class="w-full">
      <button class="w-full">Home</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped></style>
