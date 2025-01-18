<template>
  <!-- <router-link to="/admin/dashboard/"> -->
    <button type="submit" class="btn" :disabled="loading">
      <span v-if="loading" class="loader"></span>
      <span v-else>{{ msg }}</span>
    </button>
  <!-- </router-link> -->
</template>
<script>
export default {
  name: "SubmitButton",
  props: {
    loading:Boolean,
    msg: String,
    color: String,
    background: String,
  },
};
</script>

<style scoped>
button {
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 50px;
  border: none;
  background-color: #0071ce;
  color: #fff;
}
</style>
