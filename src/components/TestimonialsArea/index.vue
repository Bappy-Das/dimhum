<script setup>
import shape4 from "@/assets/img/shape-4.png";
import test1 from "@/assets/testimonial/t_1.png";
import test2 from "@/assets/testimonial/t_2.png";
import test3 from "@/assets/testimonial/t_3.png";
import test4 from "@/assets/testimonial/t_4.png";
import test5 from "@/assets/testimonial/t_5.png";
import test6 from "@/assets/testimonial/t_6.png";
import test7 from "@/assets/testimonial/t_7.png";
import test8 from "@/assets/testimonial/t_8.png";
import test9 from "@/assets/testimonial/t_9.png";
import test10 from "@/assets/testimonial/t_10.png";
</script>
<template>
  <div class="relative my-10 md:mt-40 lg:mt-40">
    <div
      class="absolute hidden md:block lg:block shape2 z-2 top-[200px] right-[-400px] bottom-[100px] md:right-[30px] w-[100px] h-[100px] md:w-[500px] md:h-[500px] lg:w-[522px] lg:h-[558px]"
    >
      <div class="absolute top-0 right-[-250px] w-full h-full bg-cover bg-center" :style="{ backgroundImage: `url(${shape4})` }"></div>
    </div>
    <div class="max-w-screen-xl mx-auto md:py-2 lg:py-2 px-8">
      <div class="">
        <div class="mb-28">
          <div class="flex flex-col justify-center items-center">
            <h1
              class="text-md text-start md:text-lg lg:text-lg font-bold md:font-normal lg:font-normal uppercase text-[#496cfe]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              TESTIMONIALS
            </h1>
            <h1 class="text-4xl md:text-7xl lg:text-7xl font-bold text-black mb-5 mt-2 text-center" data-aos="fade-up" data-aos-duration="1000">
              What Our Customers Say
            </h1>
            <p class="text-center text-sm md:text-xl" data-aos="fade-up" data-aos-duration="1000">
              We have many happy customers that have booked holidays with us.Some Impresions from our Customers! Please read <br />
              some of the lovely things our Customers say about us.
            </p>
          </div>
        </div>
      </div>

      <div class="relative h-[400px] md:h-[550px] lg:h-[550px] flex justify-center items-center" data-aos="fade-up" data-aos-duration="1500">
        <div class="absolute left-1/2 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="relative mb-9 shadow-2xl w-[160px] h-[160px] md:w-[260px] md:h-[260px] lg:w-[260px] lg:h-[260px] from-[#9d5bfe] to-[#3890fe] bg-gradient-to-br rounded-full"
            >
              <div
                class="absolute top-[0.30rem] left-[0.35rem] mx-auto w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[250px] lg:h-[250px] rounded-full bg-black bg-cover bg-center"
                :style="{ backgroundImage: `url(${test1})` }"
              ></div>
              <div
                class="absolute top-0 right-5 w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[60px] lg:h-[60px] z-2 from-[#9d5bfe] to-[#3890fe] bg-gradient-to-br rounded-full"
              >
                <span class="flex justify-center items-center mt-5"><font-awesome-icon :icon="['fab', 'linkedin-in']" class="text-white" /></span>
              </div>
            </div>
            <!-- <div class="flex flex-col justify-center items-center">
              <h1 class="text-lg font-extrabold">Oliver Wolfe</h1>
              <p class="text-sm my-3">United Kingdom,15th December, 2018</p>
              <div class="">
                <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-sm" />
                <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-sm" />
                <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-sm" />
                <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-sm" />
                <font-awesome-icon :icon="['far', 'star']" class="fa-sm" />
              </div>
              <div class="text-center mt-5 text-sm md:text-md lg:text-lg">
                Memorable holidays planned an amazing trip for us to Italy. The trip had a mix of all activities that we were interested in. The
                hotels were nice and situated very close to the station. This made travelling in the city very easy. The tours planned were also very
                good with very nice guides. We would definitely recommend a trip with them.
              </div>
            </div> -->
          </div>
        </div>
        <div class="flex flex-col justify-center items-center mt-40 md:mt-[300px] lg:mt[315px] w-full md:w-[550px] lg:w-[550px]">
          <h1 class="text-lg font-extrabold">Oliver Wolfe</h1>
          <p class="text-xs md:text-sm lg:text-sm md:my-3 lg:my-3">United Kingdom,15th December, 2018</p>
          <div class="">
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-sm" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-sm" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-sm" />
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-500 fa-sm" />
            <font-awesome-icon :icon="['far', 'star']" class="fa-sm" />
          </div>
          <div class="text-center mt-2 md:mt-5 lg:mt-5 text-sm md:text-md lg:text-lg">
            Memorable holidays planned an amazing trip for us to Italy. The trip had a mix of all activities that we were interested in. The hotels
            were nice and situated very close to the station. This made travelling in the city very easy. The tours planned were also very good with
            very nice guides. We would definitely recommend a trip with them.
          </div>
        </div>
        <div class="absolute left-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute mx-auto md:top-0 md:left-0 lg:top-0 lg:left-0 w-[40px] h-[40px] md:w-[120px] md:h-[120px] lg:w-[120px] lg:h-[120px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test2})` }"
            ></div>
          </div>
        </div>
        <div class="absolute left-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute top-[.5rem] left-[2.5rem] md:top-[40px] md:left-[160px] lg:top-[40px] lg:left-[160px] mx-auto w-[40px] h-[40px] md:w-[140px] md:h-[140px] lg:w-[140px] lg:h-[140px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test3})` }"
            ></div>
          </div>
        </div>
        <div class="absolute left-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute top-[3rem] left-[-0.8rem] md:top-[160px] md:left-[20px] lg:top-[160px] lg:left-[20px] mx-auto w-[40px] h-[40px] md:w-[120px] md:h-[120px] lg:w-[120px] lg:h-[120px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test4})` }"
            ></div>
          </div>
        </div>
        <div class="absolute left-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute top-[5rem] left-[2.3rem] md:top-[258px] md:left-[155px] lg:top-[258px] lg:left-[155px] mx-auto w-[40px] h-[40px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test5})` }"
            ></div>
          </div>
        </div>
        <div class="absolute right-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute md:top-0 md:right-[200px] lg:top-0 lg:right-[200px] mx-auto w-[40px] h-[40px] md:w-[140px] md:h-[140px] lg:w-[140px] lg:h-[140px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test6})` }"
            ></div>
          </div>
        </div>
        <div class="absolute right-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute right-[55px] md:top-[40px] md:right-[-40px] lg:top-[40px] lg:right-[-40px] mx-auto w-[40px] h-[40px] md:w-[140px] md:h-[140px] lg:w-[140px] lg:h-[140px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test7})` }"
            ></div>
          </div>
        </div>
        <div class="absolute right-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute top-[3rem] md:top-[200px] md:right-[170px] lg:top-[200px] lg:right-[170px] mx-auto w-[40px] h-[40px] md:w-[110px] md:h-[110px] lg:w-[110px] lg:h-[110px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test8})` }"
            ></div>
          </div>
        </div>
        <div class="absolute right-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute top-[3rem] right-[40px] md:top-[240px] md:right-[-40px] lg:top-[240px] lg:right-[-40px] mx-auto w-[40px] h-[40px] md:w-[110px] md:h-[110px] lg:w-[110px] lg:h-[110px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test9})` }"
            ></div>
          </div>
        </div>
        <div class="absolute right-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute top-[7rem] right-[10px] md:top-[350px] md:right-[80px] lg:top-[350px] lg:right-[80px] mx-auto w-[40px] h-[40px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test10})` }"
            ></div>
          </div>
        </div>
        <!-- <div class="absolute left-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute top-[0.30rem] left-[0.35rem] mx-auto w-[40px] h-[40px] md:w-[120px] md:h-[120px] lg:w-[120px] lg:h-[120px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test2})` }"
            ></div>
          </div>
        </div>
        <div class="absolute left-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute top-[40px] left-[160px] mx-auto w-[40px] h-[40px] md:w-[140px] md:h-[140px] lg:w-[140px] lg:h-[140px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test3})` }"
            ></div>
          </div>
        </div>
        <div class="absolute left-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute top-[160px] left-[20px] mx-auto w-[40px] h-[40px] md:w-[120px] md:h-[120px] lg:w-[120px] lg:h-[120px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test4})` }"
            ></div>
          </div>
        </div>
        <div class="absolute left-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute top-[258px] left-[155px] mx-auto w-[40px] h-[40px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test5})` }"
            ></div>
          </div>
        </div>
        <div class="absolute right-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute top-0 right-[200px] mx-auto w-[40px] h-[40px] md:w-[140px] md:h-[140px] lg:w-[140px] lg:h-[140px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test6})` }"
            ></div>
          </div>
        </div>
        <div class="absolute right-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute top-[40px] right-[-40px] mx-auto w-[40px] h-[40px] md:w-[140px] md:h-[140px] lg:w-[140px] lg:h-[140px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test7})` }"
            ></div>
          </div>
        </div>
        <div class="absolute right-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute top-[200px] right-[170px] mx-auto w-[40px] h-[40px] md:w-[110px] md:h-[110px] lg:w-[110px] lg:h-[110px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test8})` }"
            ></div>
          </div>
        </div>
        <div class="absolute right-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute top-[240px] right-[-40px] mx-auto w-[40px] h-[40px] md:w-[110px] md:h-[110px] lg:w-[110px] lg:h-[110px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test9})` }"
            ></div>
          </div>
        </div>
        <div class="absolute right-0 top-0 transform -translate-x-1/2">
          <div class="flex flex-col justify-center items-center">
            <div
              class="absolute top-[350px] right-[80px] mx-auto w-[40px] h-[40px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] rounded-full bg-black bg-cover bg-center"
              :style="{ backgroundImage: `url(${test10})` }"
            ></div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<style></style>
