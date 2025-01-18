<template>
  <AuthComponentProvider>
    <div class="px-4 py-8 overflow-y-auto">
      <div class="flex flex-col gap-4">
        <p class="font-bold text-4xl">Verify your email</p>
        <p class="text-xs leading-8 font-medium">
          Connection between Companies and Freelancers starts from here
        </p>
      </div>
      <form class="flex flex-col justify-evenly h-80 mt-8">
        <div class="flex gap-8 w-full justify-center">
          <input
            type="number"
            class="w-12 h-14 p-1 text-center bg-[#cce3f533] border border-solid border-[#d3d3d3]"
            :class="{ 'input-error': errors.inp }"
            max="1"
            min="1"
            required="required"
            name="inp1"
            v-model="inp1"
          />
          <input
            type="number"
            class="w-12 h-14 p-1 text-center bg-[#cce3f533] border border-solid border-[#d3d3d3]"
            :class="{ 'input-error': errors.inp }"
            max="1"
            min="1"
            required="required"
            name="inp2"
            v-model="inp2"
          />
          <input
            type="number"
            class="w-12 h-14 p-1 text-center bg-[#cce3f533] border border-solid border-[#d3d3d3]"
            :class="{ 'input-error': errors.inp }"
            max="1"
            min="1"
            required="required"
            name="inp3"
            v-model="inp3"
          />
          <input
            type="number"
            class="w-12 h-14 p-1 text-center bg-[#cce3f533] border border-solid border-[#d3d3d3]"
            :class="{ 'input-error': errors.inp }"
            max="1"
            min="1"
            required="required"
            name="inp4"
            v-model="inp4"
          />
        </div>
        <div class="text-center">
          Didn't get code?<a href="#">Resend</a>
          <p class="font-bold" style="color: #0071ce">(20 sec)</p>
        </div>

        <div class="mt-auto">
          <SubmitButton msg="Verify" background="#0f0" color="#eee" :loading="loading"/>
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
  name: "VerifyEmail",
  components: { 
    SubmitButton,
    AuthComponentProvider,
  },
  data() {
    return {
      inp1: "",
      inp2: "",
      inp3: "",
      inp4: "",
      txt:"",
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
      if (!this.name) this.errors.inp = "Name is required.";
      if (!this.email) this.errors.inp = "Email is required.";
      if (!this.country) this.errors.inp = "Country is required.";
      if (!this.password) this.errors.inp = "Password is required."; 
      
      if (Object.keys(this.errors).length) return;

      this.loading = true;
      try {
        const response = await fetch('https://api.gigitright.com/api/v1/verify-email', {
          method: "POST",
          body: JSON.stringify({
            data: `${this.inp1}${this.inp2}${this.inp3}${this.inp4}`,
          })
        });
        const dta = response.json();
        if (response.ok) {
          if (dta.status == 200) {
            this.$router.push({
              path: '/language/',
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
