<template>
  <AuthComponentProvider>
    <div class="px-4 py-8 overflow-y-auto">
      <div class="flex flex-col gap-4">
        <p class="font-bold text-4xl">Forgotten passsword?</p>
        <p class="text-xs leading-8 font-medium">
          Connection between Companies and Freelancers starts from here
        </p>
      </div>
      <form class="flex flex-col justify-evenly h-80 mt-8">
        <div class="flex gap-8 w-full justify-center">
          <input
            type="number"
            class="w-12 h-14 p-1 text-center"
            max="1"
            min="1"
            required="required"
            name=""
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          />
          <input
            type="number"
            class="w-12 h-14 p-1 text-center"
            max="1"
            min="1"
            required="required"
            name=""
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          />
          <input
            type="number"
            class="w-12 h-14 p-1 text-center"
            max="1"
            min="1"
            required="required"
            name=""
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          />
          <input
            type="number"
            class="w-12 h-14 p-1 text-center"
            max="1"
            min="1"
            required="required"
            name=""
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          />
        </div>
        <div class="text-center">
          Didn't get code?<a href="#">Resend</a>
          <p class="font-bold" style="color: #0071ce">(20 sec)</p>
        </div>

        <div class="mt-auto">
          <SubmitButton msg="Create an account" background="#0f0" color="#eee" />
          <p class="text-center">
            Don't have an account?
            <router-link to="/register" class="font-bold" style="color: #0071ce"
              >Sign Up</router-link
            >
          </p>
        </div>
      </form>
    </div>
  </AuthComponentProvider>
</template>
<script>
import SubmitButton from "../../components/submit_long.vue";
import AuthComponentProvider from "../../components/authComponent.vue";

export default {
  name: "ForgottenPasswordVerify",
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
