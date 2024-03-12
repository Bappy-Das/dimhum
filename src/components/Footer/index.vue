<script setup>
import FooterBottom from "@/components/FooterBottom/index.vue";
import footerBg from "@/assets/img/footerbg.png";
</script>
<template>
  <footer class="bg-white mt-16 bg-cover bg-center min-h-auto" :style="{ backgroundImage: `url(${footerBg})` }">
    <div class="h-[500px] flex flex-col justify-center items-center">
      <h1 class="uppercase font-bold text-lg text-white">NEWSLETTER</h1>
      <h1 class="text-7xl font-bold mb-5 mt-2 text-white">Get The Latest News</h1>
      <p class="text-white text-center md:mx-[630px] lg-[630px]">
        Get the latest travel inspirations and deals from Emigrar semimonthly with your email. You can unsubscribe at any time. Your privacy &
        personal information will be treated.
      </p>
      <div class="w-full md:w-4/12 lg:w-4/12 mb-10">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-5 ps-10 text-sm text-gray-100 border border-gray-300 rounded-full bg-transparent focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email address"
            required
          />
          <button
            type="submit"
            class="text-white absolute end-1 bottom-[3px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-8 py-3.5"
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
