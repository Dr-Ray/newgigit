<template>
  <AuthComponentProvider>
    <div class="px-4 py-8 h-full overflow-y-auto">
      <p class="font-bold text-4xl">Create an account</p>
      <p>Connection between Companies and Freelancers starts from here</p>
      <form class="flex flex-col justify-evenly h-[400px] mt-8">
        <div class="flex flex-col gap-8">
          <div
            class="rounded-full w-full bg-white flex gap-4 p-2 items-center  bg-[#cce3f533] border border-solid border-[#d3d3d3] "
            :class="{ 'input-error': errors.name }">
            <ion-icon name="person-circle-outline"></ion-icon>
            <input type="text" placeholder="Name" class="w-full px-2 py-1" name="name" />
          </div>
          <div
            class="rounded-full w-full bg-white flex gap-4 p-2 items-center  bg-[#cce3f533] border border-solid border-[#d3d3d3] "
            :class="{ 'input-error': errors.email }">
            <ion-icon name="mail"></ion-icon>
            <input type="email" placeholder="Email address" class="w-full px-2 py-1" name="email" />
          </div>
          <div
            class="rounded-full w-full bg-white flex gap-4 p-2 items-center  bg-[#cce3f533] border border-solid border-[#d3d3d3] "
            :class="{ 'input-error': errors.country }">
            <ion-icon name="lock-closed"></ion-icon>
            <input type="text" placeholder="Country" class="w-full px-2 py-1" name="country" v-model="country" />
          </div>
          <div
            class="rounded-full w-full flex gap-4 p-2 items-center  bg-[#cce3f533] border border-solid border-[#d3d3d3]"
            :class="{ 'input-error': errors.cpassword }">
            <ion-icon name="lock-closed"></ion-icon>
            <input placeholder="password" class="w-full px-2 py-1 rounded-lg border-0 focus:border-0" type="password"
              name="password" v-model="password" />
          </div>
          <div
            class="rounded-full w-full flex gap-4 p-2 items-center  bg-[#cce3f533] border border-solid border-[#d3d3d3]"
            :class="{ 'input-error': errors.cpassword }">
            <ion-icon name="lock-closed"></ion-icon>
            <input placeholder="Confirm password" class="w-full px-2 py-1 rounded-lg border-0 focus:border-0" type="password"
              name="password" v-model="cpassword" />
          </div>
        </div>
        <div class="mt-auto">
          <SubmitButton msg="Register" background="#0f0" color="#eee" :loading="loading" />
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
  data() {
    return {
      name: "",
      email: "",
      country: "",
      password: "",
      cpassword: "",
      loading: false,
      errorMessage: null,
      errors: {},
    }
  },
  methods: {
    async register() {
      // Reset errors
      this.errors = {};
      this.errorMessage = null;

      // Basic validation
      if (!this.name) this.errors.name = "Name is required.";
      if (!this.email) this.errors.email = "Email is required.";
      if (!this.country) this.errors.country = "Country is required.";
      if (!this.password) this.errors.password = "Password is required.";
      if (!this.cpassword) this.errors.cpassword = "Please confirm password.";
      if (this.password !== this.cpassword) this.errors.password = "Password does not match" 
      
      if (Object.keys(this.errors).length) return;

      this.loading = true;
      try {
        const response = await fetch('https://api.gigitright.com/api/v1/register', {
          method: "POST",
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            country: this.country, 
            password: this.password,
            password_confirmation: this.password
          })
        });
        const dta = response.json();
        if (response.ok) {
          if (dta.status == 200) {
            this.$router.push({
              path: '/verify/email/',
              params: {
                token: response.data.token,
              }
            });
          } else {
            this.error = response.message;
          }
        } else {
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
