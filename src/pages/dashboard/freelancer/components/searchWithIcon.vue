<template>
  <div
    class="rounded-full w-full bg-white flex gap-4 pr-4 items-center"
    style="background-color: #cce3f533; border: 1px solid #d3d3d3"
  >
    <input type="text" :placeholder="hint" class="w-full p-1 px-2" name="" />
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "SearchWithIcon",
  props: {
    hint: String,
  },
};
</script>
