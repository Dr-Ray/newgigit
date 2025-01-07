<template>
  <div class="flex items-center gap-4 py-2 overflow-x-auto min-h-[220px]">
    <div class="min-w-[395px] min-h-[180px]">
      <div
        class="flex flex-col gap-6 justify-between min-h-[160px] rounded-3xl px-4 py-6"
        style="
          background: linear-gradient(rgba(17, 121, 206, 0.92), rgba(17, 121, 206, 0.92)),
            url('/25b7ab24368c362af2da71359277cef6.jpg');
          background-position: center;
        "
      >
        <div class="flex gap-2 items-center">
          <div class="w-7 h-7 rounded-full flex justify-center items-center bg-white">
            <ion-icon name="people"></ion-icon>
          </div>
          <p class="text-white">Total users</p>
        </div>
        <p class="font-bold text-3xl text-white">40,000</p>
      </div>
    </div>
    <div class="min-w-[395px] min-h-[180px]">
      <div
        class="rounded-3xl px-4 py-6 flex flex-col gap-6 justify-between min-h-[160px] border border-solid border-[#1C77BE]"
        style="
          background: linear-gradient(
              rgba(245, 241, 233, 0.92),
              rgba(245, 241, 233, 0.92)
            ),
            url('/25b7ab24368c362af2da71359277cef6.jpg');
          background-position: center;
        "
      >
        <div class="flex gap-2 items-center">
          <div class="w-7 h-7 rounded-full flex justify-center items-center bg-white">
            <ion-icon name="people"></ion-icon>
          </div>
          <p class="text-[#606060]">Online users</p>
        </div>
        <p class="font-bold text-3xl text-[#606060]">40,000</p>
      </div>
    </div>
    <div class="min-w-[395px] min-h-[180px]">
      <div
        class="rounded-3xl px-4 py-6 flex flex-col gap-6 justify-between min-h-[160px] border border-solid border-[#1C77BE]"
        style="
          background: linear-gradient(
              rgba(245, 241, 233, 0.92),
              rgba(245, 241, 233, 0.92)
            ),
            url('/25b7ab24368c362af2da71359277cef6.jpg');
          background-position: center;
        "
      >
        <div class="flex gap-2 items-center">
          <div class="w-7 h-7 rounded-full flex justify-center items-center bg-white">
            <ion-icon name="people"></ion-icon>
          </div>
          <p class="text-[#606060]">Blocked users</p>
        </div>
        <p class="font-bold text-3xl text-[#606060]">40,000</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopFrame",
};
</script>

<style scoped></style>
