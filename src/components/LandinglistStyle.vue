<template>
  <div class="flex gap-3 my-3">
    <div>
      <input type="checkbox" name="" checked />
    </div>
    <div class="w-full md:w-2/3">
      <p class="font-bold text-[#424242] mb-2">{{ heading }}</p>
      <p class="text-sm text-[#909090] leading-8">
        {{ text }}
      </p>
    </div>
    <ion-icon name="chevron-forward-outline"></ion-icon>
  </div>
</template>
<script>
export default {
  name: "LandinglistStyle",
  props: {
    heading: String,
    text: String,
  },
};
</script>
