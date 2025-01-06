<template>
  <div class="w-3/5 flex h-[350px] rounded-3xl my-8 overflow-hidden shadow-md border-2">
    <div
      class="p-4 flex items-center justify-center h-full w-[300px]"
      style="
        background: linear-gradient(rgba(17, 121, 206, 0.92), rgba(17, 121, 206, 0.92)),
          url('/576fe9f3a4e70658a262220df348c21d.jpg');
        background-position: center;
      "
    >
      <img :src="imgSrc" class="" alt="" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PopUpSlot",
  props: {
    imgSrc: String,
  },
};
</script>

<style scoped></style>
