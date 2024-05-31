<template>
  <div class=" w-full px-6 ">
    <div class="mt-8 relative rounded-lg background-image container mx-auto flex flex-col items-center pt-12 pb-24">
      <div class="w-11/12 sm:w-2/3  flex items-center flex-col">
        <hr class="w-48 h-1 mx-auto  bg-black border-0 rounded mb-10 ">
        <h1 class="text-3xl lg:text-4xl xl:text-5xl text-center  text-black font-light">
          Mary's Tailoring
        </h1>
        <h1 class="text-3xl lg:text-4xl xl:text-5xl text-center  text-black font-light mt-3">
          Where Style is Tailored to You
        </h1>
        <p class="max-w-2xl mt-4 font-light text-black text-center lg:mt-3 md:text-lg lg:text-xl ">
          Find
          the Perfect Fit
          with Our Collection of Dresses, Costumes, and Accessories.</p>
        <Vue3Lottie :animationData="lottieOptions.animationData" :loop="lottieOptions.loop"
          :autoplay="lottieOptions.autoplay" :width="350" :height="150" />
      </div>
      <div class="flex justify-center items-center sm:mb-20 uppercase">
        <RouterLink :to="{ name: 'products' }"
          class="hover:text-black hover:bg-transparent hover:border-black border bg-white transition duration-150 ease-in-out focus:outline-none rounded text-black px-4 sm:px-8 py-1 sm:py-3 text-sm">
          Shop</RouterLink>
        <RouterLink :to="{ name: 'contact' }"
          class="hover:bg-white hover:text-black hover:border-white ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none rounded border border-black text-black px-4 sm:px-8 py-1 sm:py-3 text-sm">
          Contact
          Us</RouterLink>
      </div>
    </div>
    <div class="container mx-auto flex justify-center md:-mt-42 -mt-20 sm:-mt-40">
      <div class="relative sm:w-2/3 w-11/12">
        <img src="../assets/landing-background.png" alt="" class="absolute" />
      </div>
    </div>
  </div>
</template>

<script setup>
import animationData from '../assets/animations/sewing_machine.json';

const lottieOptions = {
  animationData: animationData,
  loop: true,
  autoplay: true,
};
</script>

<style scoped>
.background-image {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
}

@media (min-width: 1023px) {
  .background-image {
    background-image: url('../assets/backgroundImage.svg');
  }
}

@media (max-width: 1022px) {
  .background-image {
    background-color: #f7ebdb;
  }
}
</style>