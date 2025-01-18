<template>
  <router-link :to="lnk" class="div mt-4">
    <div
      class="w-full rounded-xl shadow-md flex flex-col gap-5 py-4 px-2"
      style="background-color: #cce3f50d"
    >
      <div class="wdgt-tops flex flex-col gap-4">
        <p class="font-light">{{ heading }}</p>
        <div class="">
          <h3 class="font-bold text-xl mb-2">{{ subHeading }}</h3>
          <p class="font-extralight">{{ business }}</p>
        </div>
      </div>
      <div class="wdgt-main">
        <div class="leading-6">
          {{ msg }}
          <h5 class="text-sm font-medium pr-4" style="color: #0071ce">See more</h5>
        </div>
        <button class="mt-4">Check it out</button>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "TaskLibsRight",
  props: {
    msg: String,
    business: String,
    subHeading: String,
    heading: String,
    lnk:String
  },
};
</script>

<style scoped></style>
