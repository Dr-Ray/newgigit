<template>
  <div class="flex items-center gap-4">
    <img :src="img" class="h-20 w-20 rounded-full object-cover" alt="" />
    <div>
      <h2 class="font-bold text-2xl">{{ name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProfileTop",
  props: {
    img: String,
    name: String,
  },
};
</script>

<style scoped></style>
