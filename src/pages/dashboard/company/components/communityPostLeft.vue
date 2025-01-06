<template>
  <router-link to="/company/dashboard/ongoing/1" class="mt-8">
    <div
      class="w-full rounded-xl flex flex-col gap-5 p-4"
      style="background-color: #cce3f50d"
    >
      <div class="wdgt-tops flex flex-col gap-4">
        <div class="flex items-center gap-4">
          <img :src="img" alt="" class="h-8 w-8 rounded-full object-cover" />
          <div>
            <h2 class="font-bold text-base">{{ name }}</h2>
            <div class="flex gap-4">
              <p class="font-light text-xs">{{ moredetails }}</p>
              <p class="font-light text-xs">{{ time }}</p>
            </div>
          </div>
        </div>
        <p class="font-extralight text-sm">
          {{ message }}
        </p>
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-2">
            <ion-icon name="heart"></ion-icon>
            <p>{{ likeCount }} Likes</p>
          </div>
          <div class="flex items-center gap-2">
            <ion-icon name="chatbubbles"></ion-icon>
            <p>{{ commentCount }} Comment</p>
          </div>
          <div class="flex items-center gap-2">
            <ion-icon name="share-social"></ion-icon>
            <p>Shares</p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "CommunityPostLeft",
  props: {
    message: String,
    name: String,
    commentCount: String,
    likeCount: String,
    PostTime: String,
    moredetails: String,
    img: String,
  },
};
</script>
