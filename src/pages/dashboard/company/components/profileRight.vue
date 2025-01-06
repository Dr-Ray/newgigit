<template>
  <div
    class="h-36 rounded-3xl flex items-center justify-between px-4 py-2"
    style="background-color: rgb(240, 251, 252)"
  >
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-3">
        <ion-icon name="wallet-outline"></ion-icon>
        <p class="font-medium">{{ title }}</p>
      </div>
      <h2 class="font-bold text-2xl">{{ balance }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileDetailsRight",
  props: {
    balance: String,
    title: {
      type: String,
      default() {
        return "Wallet balance"
      },
    },
  },
};
</script>

<style scoped></style>
