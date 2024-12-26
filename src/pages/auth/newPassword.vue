<template>
  <AuthComponentProvider>
    <div class="px-4 py-8 overflow-y-auto">
      <div class="flex flex-col gap-4">
        <p class="font-bold text-4xl">Create New Pasword</p>
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
            <ion-icon name="mail"></ion-icon>
            <input type="text" placeholder="Email address" class="w-full p-1" name="" />
          </div>
          <div
            class="rounded-full w-full flex gap-4 px-4 py-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <ion-icon name="lock-closed"></ion-icon>
            <input
              placeholder="Password"
              class="w-full p-1 rounded-lg border-0 focus:border-0"
              type="passsword"
              name=""
            />
          </div>
        </div>
        <div class="mt-auto">
          <SubmitButton msg="Create new password" background="#0f0" color="#eee" />
          <p class="text-center">
            Don't have an account?
            <router-link to="/register" class="font-bold" style="color: #0071ce" >Sign Up</router-link>
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
  name: "CreateNewPassword",
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
