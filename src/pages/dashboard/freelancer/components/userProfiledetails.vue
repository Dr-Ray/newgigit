<template>
  <div
    class="h-36 rounded-3xl flex items-center justify-between px-4 py-2"
    style="background-color: rgb(240, 251, 252)"
  >
    <div class="flex items-center gap-4">
      <img :src="img" class="h-20 w-20 rounded-full object-cover" alt="" />
      <div>
        <h2 class="font-bold text-2xl">{{ name }}</h2>
        <p class="font-medium">{{ position }}</p>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <router-link class="flex gap-2 items-center" to="/freelancer/dashboard/profile/">
        <p class="text-xs text-red-700">Complete Profile</p>
        <ion-icon name="caret-forward" class="text-red-700"></ion-icon>
      </router-link>
      <img src="/Frame18.png" class="h-20 w-20 rounded-full" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileDetails",
  props: {
    name: String,
    position: String,
    img: String,
  },
};
</script>

<style scoped></style>
