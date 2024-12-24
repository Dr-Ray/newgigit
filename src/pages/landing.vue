<template>
    <div class="container">
    <NavigationHeader />
    <div class="banner">
      <div class="relative text-center mx-auto md:w-[600px] w-full">
        <p class="text-2xl text-zinc-900 font-bold">
          Connection between <span style="color:#D4A21B;">gigs</span> and
          <span style="color:#D4A21B;">Freelancers</span> <br />
          starts from here
        </p>
        <p class="text-sm my-2 text-zinc-600 leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
          Connection between Companies and Freelancers starts from here Connection between
          Companies and Freelancers starts from here
        </p>
        <div class="hr-row gap-2 justify-center">
          <ButtonElememt msg="Find a job" />
          <ButtonElememt msg="Find a talent" />
        </div>
        <img src="/u1.png" class="img img-1" alt="" />
        <img src="/u2.png" class="img img-2" alt="" />
      </div>
    </div>
  </div>

  <div class="h-20 mt-16 mb-2 bg-blue hr-row justify-evenly bg-underBanner bg-no-repeat bg-cover" style=" background: linear-gradient(rgba(17, 121, 206, 0.92), rgba(17, 121, 206, 0.92)), url('/576fe9f3a4e70658a262220df348c21d.jpg'); background-position: center;">
    <div class="text-center">
      <h2 class="text-white font-bold">100,000</h2>
      <p class="text-white font-bold">Jobs gotten</p>
    </div>
    <div class="text-center">
      <h2 class="text-white font-bold">400,000</h2>
      <p class="text-white font-bold">Active Freelancers</p>
    </div>
    <div class="text-center">
      <h2 class="text-white font-bold">40,000</h2>
      <p class="text-white font-bold">Employers</p>
    </div>
    <div class="text-center">
      <h2 class="text-white font-bold">4,000,000</h2>
      <p class="text-white font-bold">Current Jobs Openings</p>
    </div>
  </div>

  <div class="container mt-8">
    <div class="hr-row gap-3">
      <AboutComponent image="/0e9705a6fddac4b0764524bbb22732fb.png" heading="Search for jobs" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem nesciunt dignissimos deserunt officiis excepturi."/>
      <div class="flex-1 flex gap-1">
        <img
          src="/a52124d733040fa556b208e1bc17e95a.png"
          class="w-10 h-10 object-cover"
          alt=""
        />
        <div class="">
          <p class="font-bold text-slate-600 leading-8 ">Hire experts in the world</p>
          <p class="text-xs text-slate-400 leading-8 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem nesciunt
            dignissimos deserunt officiis excepturi.
          </p>
        </div>
      </div>
      <div class="flex-1 flex gap-1">
        <img
          src="/2e58421b8d5c6050ecd9f7bbb93980c3.png"
          class="w-10 h-10 object-cover"
          alt=""
        />
        <div class="">
          <p class="text-slate-600 leading-8 font-bold">Messagging freelancers</p>
          <p class="text-xs text-slate-400 leading-8 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem nesciunt
            dignissimos deserunt officiis excepturi.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-8">
    <div class="mb-10">
      <p class="text-center font-bold text-2xl">
        Perfect place built to get a job by show casing your skill
      </p>
      <p class="text-center font-bold text-sm text-slate-400 leading-8">
        Perfect place built to get a job by show casing your skill
      </p>
    </div>
    <div class="flex gap-2">
      <div class="w-1/2">
        <LandinglistStyle heading="Amazing project managemant tool" text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"/>
        <LandinglistStyle heading="Amazing project managemant tool" text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"/>
        <LandinglistStyle heading="Amazing project managemant tool" text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"/>
        <LandinglistStyle heading="Amazing project managemant tool" text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"/>
      </div>
      <div class="w-1/2" style="overflow: hidden; height: 400px; border-radius: 20px">
        <img
          src="/bgl.jpg"
          alt=""
          style="height: 400px; width: auto; object-fit: cover"
        />
      </div>
    </div>
    <div class="flex gap-2">
      <div class="w-1/2 p-2 flex flex-col justify-center items-center relative rounded-lg" style="background-color: #f0f7fc;">
        <img
            src="/dashboard1.png"
            alt=""
            style="
              height: 380px;
              width: 100%;
            "
          />
      </div>
      <div class="w-1/2">
        <div class="mb-4">
          <p
            style="background-color: #fff3d2; width: fit-content"
            class="mb-2 p-2 rounded-lg font-bold"
          >
            Best freelancers search platform
          </p>
          <p class="font-bold text-2xl">Get exports for your required field</p>
        </div>
        <LandinglistStyle heading="Amazing project managemant tool" text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"/>
        <LandinglistStyle heading="Amazing project managemant tool" text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"/>
        <LandinglistStyle heading="Amazing project managemant tool" text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"/>

        <ButtonElememt msg="Get started" />
      </div>
    </div>
  </div>

  <div class="container mt-8">
    <div class="text-center mb-16">
      <h3 class="font-bold text-4xl">2000+ satisfied customers review</h3>
      <p class="font-light text-sm text-slate-400 leading-8">
        Perfect place built to get a job by showcasing your skill
      </p>
    </div>
    <div class="flex gap-2 overflow-x-auto">
      <CustomerReview customerName="Anderson Andrew" customerPosition="CEO Spotify" reviewText="Lols Lols Lols Lols Lols Lols Lols Lols"/>
      <CustomerReview customerName="Anderson Andrew" customerPosition="CEO Spotify" reviewText="Lols Lols Lols Lols Lols Lols Lols Lols"/>
      <CustomerReview customerName="Anderson Andrew" customerPosition="CEO Spotify" reviewText="Lols Lols Lols Lols Lols Lols Lols Lols"/>
    </div>
  </div>

  <div class="flex mt-8">
    <div class="w-1/2" style="background-color: #f0f7fc; padding: 10px">
      <div class="container">
        <div class="my-8">
          <span class="font-bold text-xl my-1">Monitor time spent on projects</span>
          <p class="font-light text-slate-400 leading-8">Perfect place built to get a job by showcasing your skill</p>
        </div>
        <LandinglistStyle heading="Amazing project managemant tool" text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"/>
        <LandinglistStyle heading="Amazing project managemant tool" text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"/>
        <LandinglistStyle heading="Amazing project managemant tool" text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"/>
      </div>
    </div>
    <div class="w-1/2" style="background-color: #d9eaf7; overflow: hidden">
      <div class="container" style="display: flex; justify-content: center; align-items: center; height: 550px">
        <div style="position: relative; height: 500px; width: 100%">
          <img
            src="/dashboard.png"
            alt=""
            style="
              height: 400px;
              width: 100%;
              z-index: 2;
              position: absolute;
              top: 0px;
              left: 0;
            "
          />
          <img
            src="/frame.png"
            alt=""
            style="
              height: auto;
              width: 100%;
              position: absolute;
              top: -100px;
              left: 0;
              z-index: 1;
            "
          />
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
<script>
import NavigationHeader from "../components/navigation.vue";
import ButtonElememt from "../components/button.vue";
import Footer from "../components/footer.vue";
import CustomerReview from "../components/CustomerReview.vue";
import LandinglistStyle from "../components/LandinglistStyle.vue";
import AboutComponent from "../components/aboutComponent.vue";
export default {
    name: "Landing",
    components: {
        NavigationHeader,
        ButtonElememt,
        Footer,
        CustomerReview,
        LandinglistStyle,
        AboutComponent,
    },
}
</script>