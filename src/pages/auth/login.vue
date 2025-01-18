<template>
  <AuthComponentProvider>
    <div class="px-4 py-8 overflow-y-auto">
      <div class="flex flex-col gap-4">
        <p class="font-bold text-4xl">Log in to your account</p>
        <p>
          Connection between Companies and Freelancers starts from here
        </p>
      </div>
      <div class="my-3 w-full">
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </div>
      <form class="flex flex-col justify-evenly h-80 mt-8" @submit.prevent="login">
        <div class="flex flex-col gap-8">
          <div :class="{ 'input-error': errors.email }"
            class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center  bg-[#cce3f533] border border-solid border-[#d3d3d3]">
            <ion-icon name="mail"></ion-icon>
            <input type="text" placeholder="Email address" class="w-full p-1 rounded-lg border-0 focus:border-0"
              name="email" v-model="email" />
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>
          <div :class="{ 'input-error': errors.password }"
            class="rounded-full w-full flex gap-4 px-4 py-2 items-center bg-[#cce3f533] border border-solid border-[#d3d3d3]">
            <ion-icon name="lock-closed" class="text-[]"></ion-icon>
            <input placeholder="Password" class="w-full p-1 rounded-lg border-0 focus:border-0" type="password"
              name="password" v-model="password" />
            <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
          </div>
          <router-link to="/password/forgot" class="ml-auto text-right w-fit text-[#0071CE]">
            forgotten password?
          </router-link>
        </div>
        <div class="mt-auto">
          <SubmitButton msg="Login" background="#0f0" color="#eee" :loading="loading" />
          <p class="text-center">
            Don't have an account?
            <router-link to="/register" class="font-bold" style="color: #0071ce">Sign Up</router-link>
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
  name: "Login",
  components: {
    SubmitButton,
    AuthComponentProvider,
  },
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      errorMessage: null,
      errors: {},
    }
  },
  methods: {
    async login() {
      // Reset errors
      this.errors = {};
      this.errorMessage = null;

      // Basic validation
      if (!this.email) this.errors.email = "Email is required.";
      if (!this.password) this.errors.password = "Password is required.";

      if (Object.keys(this.errors).length) return;

      this.loading = true;
      try {
        const response = await fetch('https://api.gigitright.com/api/v1/login', {
          method: "POST",
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });
        const dta = response.json();
        if(response.ok) {
          if(dta.status == 200) {
            this.$router.push({
              path: '/freelancer/dashboard/', 
              params: {
                token: response.data.token,
              }
            });
          }else{
            this.error = response.message;
          }
        }else{
          this.error = 'An error occurred: ' + err.message;
        }
      } catch (err) {
        this.error = 'An error occurred: ' + err.message;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
<style scoped>
ion-icon {
  font-size: 32px;
}
</style>
