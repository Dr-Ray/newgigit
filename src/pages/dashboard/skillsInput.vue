<template>
  <AuthComponentProvider>
    <div class="px-4 py-8 overflow-y-auto">
      <div class="flex flex-col gap-4">
        <p class="font-bold text-4xl">Please input your skills</p>
        <p class="text-xs leading-8 font-medium">
          Connection between Companies and Freelancers starts from here
        </p>
      </div>
      <form class="flex flex-col justify-evenly h-80 mt-8">
        <div class="flex flex-col gap-8">
          <div
            class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <input
              type="text"
              placeholder="Input your skills here"
              class="w-full p-1"
              name=""
            />
          </div>
        </div>
        <div class="mt-auto">
          <SubmitButton msg="Next" background="#0f0" color="#eee" />
        </div>
      </form>
    </div>
  </AuthComponentProvider>
</template>
<script>
import SubmitButton from "../../components/submit_long.vue";
import AuthComponentProvider from "../../components/authComponent.vue";
export default {
  name: "SkilsInput",
  components: {
    SubmitButton,
    AuthComponentProvider,
  },
};
</script>
<style scoped>
ion-icon {
  font-size: 32px;
}
</style>
