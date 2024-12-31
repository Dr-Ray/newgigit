<template>
  <div
    class="rounded-lg py-3 px-5 min-w-96 h-[250px] flex flex-col justify-between"
    style="background-color: #f5f9fd"
  >
    <div class="hr-row">
      <span class="font-bold">5.0</span>
      <img src="/star.png" alt="" style="height: 20px; width: auto" />
      <img src="/star.png" alt="" style="height: 20px; width: auto" />
      <img src="/star.png" alt="" style="height: 20px; width: auto" />
      <img src="/star.png" alt="" style="height: 20px; width: auto" />
      <img src="/star.png" alt="" style="height: 20px; width: auto" />
    </div>
    <p class="text-sm text-[#6C6C6C] leading-8 font-light">
      {{ reviewText }}
    </p>
    <div class="hr-row gap-2">
      <img src="/u3.png" alt="" class="rounded-full h-14 w-14 object-cover" />
      <div>
        <p class="font-bold">{{ customerName }}</p>
        <p class="text-[#424242] font-light">{{ customerPosition }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CustomerReview",
  props: {
    customerName: String,
    reviewText: String,
    customerPosition: String,
  },
};
</script>
