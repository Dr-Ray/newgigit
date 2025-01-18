<template>
  <router-link :to="lnk" class="div mt-4">
    <div
      class="w-full rounded-xl shadow-md flex flex-col gap-5 py-4 px-8 bg-[#cce3f50d]"
    >
      <div class="wdgt-tops flex flex-col gap-4">
        <p class="font-light">{{ heading }}</p>
        <div class="">
          <h3 class="font-bold text-xl mb-2">{{ subHeading }}</h3>
          <p class="font-extralight">{{ business }}</p>
        </div>
      </div>
      <div class="wdgt-main">
        <p class="leading-6 my-2">
          {{ msg }}
        </p>
        <p
          class="text-sm font-medium p-2 rounded-full w-fit bg-[#d4a21b33] text-[#0071ce]"
        >
          {{ payment }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "TaskLibs",
  props: {
    payment: String,
    msg: String,
    business: String,
    subHeading: String,
    heading: String,
    lnk:String
  },
};
</script>

<style scoped></style>
