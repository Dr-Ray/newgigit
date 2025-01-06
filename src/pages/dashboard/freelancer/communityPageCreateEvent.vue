<template>
  <DashBoardComponentProvider v-slot="{ togglebar }">
    <DashboardHeader msg="Event" @toggleBar="togglebar($event)" />
    <div class="flex">
      <div class="w-full my-4 flex flex-col p-2">
        <router-link
          to="/freelancer/dashboard/"
          class="text-sm font-medium p-2 rounded-xl w-full flex gap-3 items-center mb-8"
          style="color: #0071ce; background-color: #d4a21b33"
        >
          <ion-icon name="caret-back-outline"></ion-icon>
          <p>Go back</p>
        </router-link>
        <div class="w-full bg-white py-3 px-2">
          <form action="" class="flex flex-col gap-6">
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <ion-icon name="person"></ion-icon>
              <input type="text" placeholder="Event title" class="w-full p-1" name="" />
            </div>
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <input
                type="text"
                placeholder="Event Description"
                class="w-full p-1"
                name=""
              />
            </div>
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <input type="text" placeholder="Event Tags" class="w-full p-1" name="" />
            </div>
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <input type="text" placeholder="Date" class="w-full p-1" name="" />
            </div>
            <div
              class="rounded-full w-full bg-white flex gap-4 px-4 py-2 items-center"
              style="background-color: #cce3f533; border: 1px solid #d3d3d3"
            >
              <input type="text" placeholder="Time" class="w-full p-1" name="" />
            </div>
            <button class="w-full" type="submit">Create Event</button>
          </form>
        </div>
      </div>
      <div class="md:flex flex-col gap-6 px-3 w-[450px] my-4 hidden">
        <div
          class="border-2 w-full md:w-[420px] bg-white py-3 px-2 flex flex-col rounded-2xl gap-5"
        >
          <div class="flex justify-between">
            <p>Communities for you</p>

            <router-link
              to="#"
              class="text-right text-[#0071ce] text-sm font-medium p-2 rounded-full"
            >
              Explore Community
            </router-link>
          </div>
          <div class="" v-for="post in posts">
            <div class="flex items-center gap-4">
              <img src="/u4.png" class="h-20 w-20 rounded-full object-cover" alt="" />
              <div>
                <h2 class="font-bold text-2xl">Design talks</h2>
                <div class="flex items-center gap-4">
                  <p class="text-xs font-light text-light">Ui and Ux design</p>
                  <div class="flex items-center gap-3">
                    <ion-icon name="people-outline"></ion-icon>
                    <p class="text-xs font-light text-light">2000 members</p>
                  </div>
                </div>
              </div>
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashBoardComponentProvider>
</template>

<script>
import DashBoardComponentProvider from "./components/dashboardComponent.vue";
import DashboardHeader from "./components/dashboardHeader.vue";
import SearchWithIcon from "./components/searchWithIcon.vue";
import CommunityPostLeft from "./components/communityPostLeft.vue";
export default {
  name: "CommunityPageCreateEvent",
  components: {
    DashBoardComponentProvider,
    DashboardHeader,
    SearchWithIcon,
    CommunityPostLeft,
  },
  data() {
    return {
      posts: ["Andrew Garfield", "Mark Ronsoon", "Mark Jones", "Mc Alister"],
    };
  },
};
</script>

<style scoped></style>
