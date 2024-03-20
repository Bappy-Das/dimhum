<script setup>
import FooterBottom from "@/components/FooterBottom/index.vue";
import footerBg from "@/assets/img/footerbg.png";
</script>
<template>
  <footer class="bg-white bg-cover bg-center h-full" :style="{ backgroundImage: `url(${footerBg})` }">
    <div class="md:h-[700px] lg:h-[700px] flex flex-col justify-center items-center pt-[130px]">
      <h1 class="text-md text-start md:text-lg lg:text-lg font-bold md:font-normal lg:font-normal uppercase text-white">NEWSLETTER</h1>
      <h1 class="text-4xl md:text-7xl lg:text-7xl font-bold mb-5 mt-2 text-white" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        Get The Latest News
      </h1>
      <p class="text-sm md:text-xl text-white text-center pb-10" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        Get the latest travel inspirations and deals from Emigrar semimonthly with your email. You can <br />
        unsubscribe at any time. Your privacy & personal information will be treated.
      </p>
      <div class="w-full md:w-5/12 lg:w-5/12 mb-10 px-4 md:px-0 lg:px-0" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div class="relative">
          <input
            type="search"
            id="default-search"
            class="block w-full p-3 md:p-5 lg:p-5 ps-10 text-sm md:text-lg lg:text-lg text-white border border-gray-300 rounded-full bg-transparent focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email address"
            required
          />
          <button
            type="submit"
            class="text-white absolute end-1 bottom-1 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs md:text-lg lg:text-lg px-4 md:px-8 lg:px-8 py-[0.7rem] md:py-4 lg:py-4"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
          <h2 class="mb-6 text-xl md:text-2xl lg:text-2xl font-bold capitalize text-white">Company Info</h2>
          <ul class="text-gray-100 font-normal">
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">About Us</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Contact Us</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Authenticity Guarantee</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Customer Reviews</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Privacy Policy</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Business License</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-xl md:text-2xl lg:text-2xl font-bold capitalize text-white">Work With Us</h2>
          <ul class="text-gray-100 font-normal">
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1300">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Become Partner</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1300">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Careers</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1300">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Become Affiliate</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1300">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Associations</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1300">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Advertise With Us</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1300">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Retirement Plan</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1300">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Travel APIs</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-xl md:text-2xl lg:text-2xl font-bold capitalize text-white">My Account</h2>
          <ul class="text-gray-100 font-normal">
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1400">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Manage Your Account</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1400">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Build your own trip</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1400">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Order Status</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1400">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Booking Guide</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1400">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Travel Insurence & Safety Guide</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-xl md:text-2xl lg:text-2xl font-bold capitalize text-white">Plan Your Trip</h2>
          <ul class="text-gray-100 font-normal">
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Special Offers</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Hotels</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Flights</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Tour package</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Accommodations</span>
              </div>
            </li>
            <li class="mb-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
              <div class="cursor-pointer text-xs md:text-md lg:text-md hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Transportation</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <FooterBottom></FooterBottom>
  </footer>
</template>
<style scoped></style>
