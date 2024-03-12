<script setup>
import FooterBottom from "@/components/FooterBottom/index.vue";
import footerBg from "@/assets/img/footerbg.png";
</script>
<template>
  <footer class="bg-white bg-cover bg-center h-full" :style="{ backgroundImage: `url(${footerBg})` }">
    <div class="h-[700px] flex flex-col justify-center items-center pt-[130px]">
      <h1 class="uppercase font-bold text-lg text-white">NEWSLETTER</h1>
      <h1 class="text-7xl font-bold mb-5 mt-2 text-white">Get The Latest News</h1>
      <p class="text-white text-center pb-10">
        Get the latest travel inspirations and deals from Emigrar semimonthly with your email. You can <br />
        unsubscribe at any time. Your privacy & personal information will be treated.
      </p>
      <div class="w-full md:w-5/12 lg:w-5/12 mb-10">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div class="relative">
          <input
            type="search"
            id="default-search"
            class="block w-full p-5 ps-10 text-lg text-white border border-gray-300 rounded-full bg-transparent focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email address"
            required
          />
          <button
            type="submit"
            class="text-white absolute end-1 bottom-1 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-8 py-4"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
          <h2 class="mb-6 text-xl font-bold capitalize text-white">Company Info</h2>
          <ul class="text-gray-100 font-medium">
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">About Us</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Contact Us</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Authenticity Guarantee</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Customer Reviews</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Privacy Policy</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Business License</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-xl font-bold capitalize text-white">Work With Us</h2>
          <ul class="text-gray-100 font-medium">
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Become Partner</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Careers</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Become Affiliate</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Associations</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Advertise With Us</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Retirement Plan</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Travel APIs</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-xl font-bold capitalize text-white">My Account</h2>
          <ul class="text-gray-100 font-medium">
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Manage Your Account</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Build your own trip</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Order Status</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Booking Guide</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Travel Insurence & Safety Guide</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-xl font-bold capitalize text-white">Plan Your Trip</h2>
          <ul class="text-gray-100 font-medium">
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Special Offers</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Hotels</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Flights</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Tour package</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="sm" />
                <span class="pl-1 hover:pl-2 transition-all duration-300">Accommodations</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="cursor-pointer hover:text-gray-300">
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
