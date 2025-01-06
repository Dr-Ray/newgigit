<template>
  <div class="flex">
    <div class="w-1/2">
      <div
        class=""
        style="
          background: linear-gradient(rgba(17, 121, 206, 0.92), rgba(17, 121, 206, 0.92)),
            url('/576fe9f3a4e70658a262220df348c21d.jpg');
          background-position: center;
        "
      >
        <img src="/c9b82157a5d466eed3ce62f1e1c97647.png" alt="" />
      </div>
    </div>
    <div class="w-1/2">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUpComponent",
};
</script>

<style scoped></style>
