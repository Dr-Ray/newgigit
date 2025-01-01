<template>
  <div class="overflow-hidden">
    <div class="pb-16 mb-8">
      <div class="container">
        <NavigationHeader />
        <div class="banner">
          <div class="relative text-center mx-auto md:w-[600px] w-full">
            <p class="text-3xl text-zinc-900 font-bold">
              Connection between <span style="color: #d4a21b">gigs</span> and
              <span style="color: #d4a21b">Freelancers</span> <br />
              starts from here
            </p>
            <p
              class="text-sm my-2 text-zinc-600 leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-[#909090]"
            >
              Connection between Companies and Freelancers starts from here Connection
              between Companies and Freelancers starts from here
            </p>
            <div class="hr-row gap-2 justify-center">
              <ButtonElememt msg="Find a job" />
              <ButtonElememt msg="Find a talent" />
            </div>
            <div class="absolute bottom-0 w-full top-0 h-full z-[-1]">
              <div class="relative w-full">
                <div
                  class="bg-[#F5E9CC99] absolute h-[200px] w-[200px] rounded-full"
                  style="top: -20px; right: -130px"
                >
                  <img src="/u1.png" class="img img-1 hidden sm:block" alt="" />
                </div>
                <div
                  class="bg-[#F5E9CC99] absolute h-[200px] w-[200px] rounded-full"
                  style="top: 160px; left: 0px"
                >
                  <img src="/u2.png" class="img img-2" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="p-2 mt-32 md:h-20 mb-2 bg-blue flex items-center gap-2 md:flex-nowrap flex-wrap justify-between md:justify-evenly bg-no-repeat bg-cover"
      style="
        background: linear-gradient(rgba(17, 121, 206, 0.92), rgba(17, 121, 206, 0.92)),
          url('/576fe9f3a4e70658a262220df348c21d.jpg');
        background-position: center;
      "
    >
      <div class="md:text-center">
        <h2 class="text-white font-bold">100,000</h2>
        <p class="text-white font-bold">Jobs gotten</p>
      </div>
      <div class="md:text-center">
        <h2 class="text-white font-bold">400,000</h2>
        <p class="text-white font-bold">Active Freelancers</p>
      </div>
      <div class="md:text-center">
        <h2 class="text-white font-bold">40,000</h2>
        <p class="text-white font-bold">Employers</p>
      </div>
      <div class="md:text-center">
        <h2 class="text-white font-bold">4,000,000</h2>
        <p class="text-white font-bold">Current Jobs Openings</p>
      </div>
    </div>

    <div class="container mt-16">
      <div class="flex flex-col md:flex-row gap-3">
        <AboutComponent
          image="/0e9705a6fddac4b0764524bbb22732fb.png"
          heading="Search for jobs"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem nesciunt dignissimos deserunt officiis excepturi."
        />
        <AboutComponent
          image="/a52124d733040fa556b208e1bc17e95a.png"
          heading="Hire experts in the world"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem nesciunt dignissimos deserunt officiis excepturi."
        />
        <AboutComponent
          image="/2e58421b8d5c6050ecd9f7bbb93980c3.png"
          heading="Messagging freelancers"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem nesciunt dignissimos deserunt officiis excepturi."
        />
      </div>
    </div>

    <div class="container mt-32">
      <div class="mb-10">
        <p class="text-center font-bold text-2xl text-[#6C6C6C]">
          Perfect place built to get a job by show casing your skill
        </p>
        <p class="text-center font-bold text-sm text-[#909090] leading-8">
          Perfect place built to get a job by show casing your skill
        </p>
      </div>
      <div class="flex flex-col md:flex-row gap-2">
        <div class="w-full md:w-1/2">
          <LandinglistStyle
            heading="Amazing project managemant tool"
            text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"
          />
          <LandinglistStyle
            heading="Amazing project managemant tool"
            text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"
          />
          <LandinglistStyle
            heading="Amazing project managemant tool"
            text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"
          />
          <LandinglistStyle
            heading="Amazing project managemant tool"
            text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"
          />
        </div>
        <div
          class="w-full md:w-1/2"
          style="overflow: hidden; height: 400px; border-radius: 20px"
        >
          <img
            src="/bgl.jpg"
            alt=""
            style="height: 400px; width: auto; object-fit: cover"
          />
        </div>
      </div>
      <div class="flex flex-col-reverse md:flex-row gap-2 mt-16">
        <div
          class="w-full md:w-1/2 p-2 flex flex-col justify-center items-center relative rounded-lg"
          style="background-color: #f0f7fc"
        >
          <img src="/dashboard1.png" alt="" style="height: 380px; width: 100%" />
        </div>
        <div class="w-full md:w-1/2">
          <div class="mb-4">
            <p
              style="background-color: #fff3d2; width: fit-content"
              class="mb-2 p-2 rounded-lg font-bold"
            >
              Best freelancers search platform
            </p>
            <p class="font-bold text-2xl text-[#424242]">
              Get exports for your required field
            </p>
          </div>
          <LandinglistStyle
            heading="Amazing project managemant tool"
            text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"
          />
          <LandinglistStyle
            heading="Amazing project managemant tool"
            text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"
          />
          <LandinglistStyle
            heading="Amazing project managemant tool"
            text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"
          />
          <ButtonElememt msg="Get started" />
        </div>
      </div>
    </div>

    <div class="container mt-20">
      <div class="text-center mb-16">
        <h3 class="font-bold text-4xl text-[#424242]">
          2000+ satisfied customers review
        </h3>
        <p class="font-light text-sm text-[#909090] leading-8">
          Perfect place built to get a job by showcasing your skill
        </p>
      </div>
      <div class="flex justify-center gap-4 overflow-x-auto">
        <CustomerReview
          customerName="Anderson Andrew"
          customerPosition="CEO Spotify"
          reviewText="Lols Lols Lols Lols Lols Lols Lols Lols"
        />
        <CustomerReview
          customerName="Anderson Andrew"
          customerPosition="CEO Spotify"
          reviewText="Lols Lols Lols Lols Lols Lols Lols Lols"
        />
        <CustomerReview
          customerName="Anderson Andrew"
          customerPosition="CEO Spotify"
          reviewText="Lols Lols Lols Lols Lols Lols Lols Lols"
        />
      </div>
    </div>

    <div class="flex flex-col md:flex-row mt-16">
      <div class="w-full md:w-1/2" style="background-color: #f0f7fc; padding: 10px">
        <div class="container">
          <div class="my-8">
            <span class="font-bold text-[#6C6C6C] text-xl my-1"
              >Monitor time spent on projects</span
            >
            <p class="font-light text-[#909090] leading-8">
              Perfect place built to get a job by showcasing your skill
            </p>
          </div>
          <LandinglistStyle
            heading="Amazing project managemant tool"
            text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"
          />
          <LandinglistStyle
            heading="Amazing project managemant tool"
            text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"
          />
          <LandinglistStyle
            heading="Amazing project managemant tool"
            text="Show case skills, Experience and portfolio, certificate reviews and many more to put you on spot"
          />
        </div>
      </div>
      <div class="w-full md:w-1/2" style="background-color: #d9eaf7; overflow: hidden">
        <div
          class="md:w-[90%]"
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            height: 550px;
          "
        >
          <div style="position: relative; height: 500px; width: 100%">
            <img
              src="/dashboard.png"
              alt=""
              class="absolute w-full left-0 top-0 h-[400px] z-[2]"
            />
            <img
              src="/frame.png"
              alt=""
              class="absolute w-full h-auto left-0 top-[100px] md:top-[-10px] lg:top-[-100px] z-[1]"
            />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script>
import NavigationHeader from "../components/navigation.vue";
import ButtonElememt from "../components/button.vue";
import Footer from "../components/footer.vue";
import CustomerReview from "../components/customerReview.vue";
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
};
</script>
