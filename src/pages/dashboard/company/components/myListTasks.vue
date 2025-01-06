<template>
  <router-link to="/company/dashboard/find-a-talent/single/1" class="div mt-4">
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
        <p class="leading-6 my-2">
          {{ msg }}
        </p>
        <p
          class="text-sm font-medium p-2 rounded-full w-fit"
          style="color: #0071ce; background-color: #d4a21b33"
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
  },
};
</script>

<style scoped></style>
