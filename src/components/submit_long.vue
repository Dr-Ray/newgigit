<template>
  <router-link to="/freelancer/dashboard/">
    <button>
      {{ msg }}
    </button>
  </router-link>
</template>
<script>
export default {
  name: "SubmitButton",
  props: {
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
