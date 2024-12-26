<template>
  <div class="flex w-full h-screen overflow-hidden">
    <div class="w-20 h-full bg-blue-800">
        
    </div>
    <div class="flex-1 overflow-y-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardComponent",
};
</script>

<style scoped></style>
