<template>
  <h3 class="font-bold text-lg my-2">{{ day }}</h3>
  <div class="flex flex-col gap-8 px-4">
    <div class="flex justify-between items-center" v-for="{ message, pdate } in items">
      <div class="flex gap-4 items-center">
        <img src="/749748c72d11ac9f5b388e20a9547fd6.png" class="h-10 w-10" alt="" />
        <p class="text-sm font-bold">{{ message }}</p>
      </div>
      <p class="text-xs font-medium">{{ pdate }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotificationComponent",
  data() {
    return {
      items: [
        {
          message: "Congratulations, you just got paid!",
          pdate: "5 hours ago",
        },
        {
          message: "Congratulations, you just got paid!",
          pdate: "5 hours ago",
        },
        {
          message: "Congratulations, you just got paid!",
          pdate: "5 hours ago",
        }
      ],
    };
  },
  props: {
    day: String,
    data: [],
  },
};
</script>
