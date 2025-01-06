<template>
  <footer class="mt-16 py-4 w-full" style="background-color: #002645">
    <div class="container">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="md:w-[400px]">
          <div>
            <img src="/Gigitright White PNG.png" class="w-auto h-28" alt="" />
            <div>
              <p class="leading-5 font-medium" style="color: #8f9fa3; font-size: 16px">
                The first free end-to-end analytics service for the site, designed to work
                with enterprises of various levels and business segments.
              </p>
              <a href="#" class="block mt-4 text-white font-medium">More about us</a>
            </div>
          </div>
          <div class="social-icons flex gap-5 mt-4">
            <div class="flex flex-col gap-4 mt-4">
              <ion-icon name="logo-facebook" style="color: #fff"></ion-icon>
              <ion-icon name="logo-twitter" style="color: #fff"></ion-icon>
              <ion-icon name="logo-snapchat" style="color: #fff"></ion-icon>
              <ion-icon name="logo-whatsapp" style="color: #fff"></ion-icon>
            </div>
            <div class="flex flex-col-reverse gap-4 mt-4">
              <ion-icon name="logo-instagram" style="color: #fff"></ion-icon>
              <ion-icon name="logo-tiktok" style="color: #fff"></ion-icon>
              <ion-icon name="logo-reddit" style="color: #fff"></ion-icon>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-between gap-4 w-full md:w-1/2 mt-8">
          <ul class="flex flex-col md:flex-row gap-2 justify-between">
            <li class="text-white font-bold">About</li>
            <li class="text-white font-bold">Testimonials</li>
            <li class="text-white font-bold">Pricing</li>
            <li class="text-white font-bold">Contacts</li>
          </ul>
          <div class="flex flex-col md:flex-row justify-between">
            <div class="flex flex-col gap-8">
              <div class="flex flex-col gap-2">
                <p class="text-white font-bold">Contact Us</p>
                <div>
                  <p style="color: #8f9fa3; font-size: 16px">+1 (999) 888-77-66</p>
                  <p style="color: #8f9fa3; font-size: 16px">Bujoha@gmail.com</p>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-white font-bold">Location</p>
                <p class="font-medium" style="color: #8f9fa3; font-size: 16px">
                  483920, Moscow, Myasnitskaya 22/2/5, Office 4
                </p>
              </div>
            </div>
            <div class="mt-auto">
              <p class="text-right font-bold text-white my-2">Languages</p>
              <ul class="flex justify-end gap-2">
                <li class="text-white font-bold" style="font-size: 16px">En</li>
                <li class="font-bold" style="color: #8f9fa3; font-size: 16px">Es</li>
                <li class="font-bold" style="color: #8f9fa3; font-size: 16px">Fr</li>
                <li class="font-bold" style="color: #8f9fa3; font-size: 16px">De</li>
                <li class="font-bold" style="color: #8f9fa3; font-size: 16px">Ru</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <p class="text-center text-white">© 2021 All rights reserved</p> -->
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
