<template>
  <div class=" flex flex-wrap ">
    <div class="w-full md:w-1/2 flex px-4 mt-8 md:mt-0">
      <div class="flex justify-center">
        <div class="flex flex-col">
          <div class="text-pink-500 mx-5 md:mx-0">FAQ</div>
          <div class="md:text-5xl text-4xl font-bold my-3 mx-5 md:mx-0">
            Answers to Your Questions:<br> Explore Our FAQ Section
          </div>
          <div class="text-gray-500 flex flex-col mx-5 md:mx-0">
            <span class="w-auto">Welcome to our FAQ (Frequently Asked Questions) page, designed to provide you with
              quick and comprehensive answers to common queries about <RouterLink :to="{ name: 'homepage' }"
                class="inline font-bold text-red-600 underline underline-offset-2 decoration-600 decoration-solid hover:no-underline ">
                Mary's Tailoring Handmade</RouterLink> Workshop. Whether you're a new visitor or a returning customer,
              this page serves as a valuable resource to address any uncertainties you may have.</span>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full md:w-1/2 flex px-4 sm:-mt-20 mt-0">
      <Vue3Lottie :animationData="lottieOptions.animationData" :loop="lottieOptions.loop"
        :autoplay="lottieOptions.autoplay" :width="450" />
    </div>
  </div>

</template>

<script setup>
import animationData from '../assets/animations/faq.json';

const lottieOptions = {
  animationData: animationData,
  loop: true,
  autoplay: true,
};
</script>

<style scoped></style>