<template>
  <div class="py-2 px-4 flex justify-between items-center">
    <p class="font-bold">{{ msg ? msg : "Hello, Virtue Andrew" }}</p>
    <div class="flex justify-between items-center gap-8">
      <SearchWithIcon hint="Search" class="hidden md:flex">
        <ion-icon name="search"></ion-icon>
      </SearchWithIcon>

      <div class="flex gap-2 relative">
        <ion-icon
          name="notifications"
          @click="openNotificationBar = !openNotificationBar"
        ></ion-icon>
        <ion-icon name="person" @click="openProfileBar = !openProfileBar"></ion-icon>

        <ion-icon name="menu" class="block md:hidden"></ion-icon>
        <!-- Profile dropdown -->
        <div
          :class="[openProfileBar ? 'flex flex-col' : 'hidden']"
          class="absolute shadow-lg w-[250px] h-[250px] top-8 left-[-210px] bg-white py-6 px-3 flex flex-col rounded-lg gap-8"
        >
          <div class="flex justify-between">
            <h4 class="text-sm font-bold">Profile</h4>
          </div>
          <div class="flex flex-col gap-5 px-4">
            <div class="flex justify-between items-center">
              <p class="font-bold text-sm">Goto my profile</p>
              <ion-icon name="caret-forward-outline"></ion-icon>
            </div>
            <div class="flex justify-between items-center">
              <p class="font-bold text-sm">My gigs profile</p>
              <ion-icon name="caret-forward-outline"></ion-icon>
            </div>
            <div class="flex justify-between items-center">
              <p class="font-bold text-sm">Switch to search for talent</p>
              <ion-icon name="caret-forward-outline"></ion-icon>
            </div>
            <div class="flex justify-between items-center">
              <p class="text-red-600 font-bold text-sm">Logout</p>
              <ion-icon name="caret-forward-outline" class="text-red-600"></ion-icon>
            </div>
          </div>
        </div>

        <!-- Notification dropdown -->
        <div
          :class="[openNotificationBar ? 'flex flex-col' : 'hidden']"
          class="absolute shadow-lg w-full md:w-[420px] h-[200px] top-8 left-[-380px] bg-white py-3 px-2 flex flex-col rounded-lg gap-5"
        >
          <div class="flex justify-between">
            <h4 class="text-sm font-bold">Notifications</h4>
            <router-link
              class="text-sm font-medium pr-4"
              style="color: #0071ce"
              to="/user/dashboard/notification/"
            >
              See more
            </router-link>
          </div>
          <div class="flex flex-col gap-3 px-4">
            <div class="flex justify-between items-center">
              <div class="flex gap-4 items-center">
                <img
                  src="/749748c72d11ac9f5b388e20a9547fd6.png"
                  class="h-10 w-10"
                  alt=""
                />
                <p class="text-sm font-bold">Congratulations, you just got paid!</p>
              </div>
              <p class="text-xs font-medium">5 hours ago</p>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex gap-4 items-center">
                <img
                  src="/749748c72d11ac9f5b388e20a9547fd6.png"
                  class="h-10 w-10"
                  alt=""
                />
                <p class="text-sm font-bold">Congratulations, you just got paid!</p>
              </div>
              <p class="text-xs font-medium">5 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchWithIcon from "./searchWithIcon.vue";
export default {
  name: "DashboardHeader",
  data() {
    return {
      openNotificationBar: false,
      openProfileBar: false,
    };
  },
  props: {
    msg: String,
  },
  components: { SearchWithIcon },
};
</script>

<style scoped>
ion-icon {
  font-size: 20px;
}
</style>
