<template>
  <AuthComponentProvider>
    <div class="px-4 py-8 h-full overflow-y-auto">
      <p class="font-bold text-4xl">Create an account</p>
      <p>Connection between Companies and Freelancers starts from here</p>
      <form class="flex flex-col justify-evenly h-[400px] mt-8">
        <div class="flex flex-col gap-8">
          <div
            class="rounded-full w-full bg-white flex gap-4 p-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <ion-icon name="person-circle-outline"></ion-icon>
            <input type="text" placeholder="Name" class="w-full px-2 py-1" name="" />
          </div>
          <div
            class="rounded-full w-full bg-white flex gap-4 p-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <ion-icon name="mail"></ion-icon>
            <input
              type="email"
              placeholder="Email address"
              class="w-full px-2 py-1"
              name=""
            />
          </div>
          <div
            class="rounded-full w-full bg-white flex gap-4 p-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <ion-icon name="lock-closed"></ion-icon>
            <input type="text" placeholder="Country" class="w-full px-2 py-1" name="" />
          </div>
          <div
            class="rounded-full w-full flex gap-4 p-2 items-center"
            style="background-color: #cce3f533; border: 1px solid #d3d3d3"
          >
            <ion-icon name="lock-closed"></ion-icon>
            <input
              placeholder="password"
              class="w-full px-2 py-1 rounded-lg border-0 focus:border-0"
              type="password"
              name=""
            />
          </div>
        </div>
        <div class="mt-auto">
          <SubmitButton msg="Login" background="#0f0" color="#eee" />
          <p class="text-center">
            Already have an account?
            <router-link to="/login" class="font-bold" style="color: #0071ce">
              Login
            </router-link>
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
  name: "Register",
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
