<template>
  <div class="flex-1 flex gap-1">
    <img :src="image" class="w-10 h-10 object-cover" alt="" />
    <div class="">
      <p class="font-bold text-slate-600 leading-8">{{ heading }}</p>
      <p class="text-xs text-slate-400 leading-2 font-normal">
        {{ text }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutComponent",
  props: {
    heading: String,
    text: String,
    image: String,
  },
};
</script>
