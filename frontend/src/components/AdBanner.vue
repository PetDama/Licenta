<script setup>
import animationData from '../assets/animations/random2.json';

const lottieOptions = {
    animationData: animationData,
    loop: true,
    autoplay: true,
};
</script>

<template>
    <div class="w-full px-6">
        <div
            class="mx-auto  flex items-center flex-col md:flex-row lg:mt-80 md:mt-52 sm:mt-48 mt-36 p-4 px-6 text-center bg-newColor2 border justify-center  border-gray-200 rounded-lg shadow sm:p-8">
            <div class="flex flex-col justify-center items-center align-middle tracking-in-contract mt-5 md:mt-0">
                <h5 class=" mb-2 text-4xl font-bold text-black">Elevate Your Wardrobe with Mary's
                    Tailoring</h5>
                <p class="mb-5 font-light text-black md:text-lg lg:text-xl ">Shop Now for Unique Dresses, Dapper
                    Costumes,
                    <br>and Stylish Accessories - Your Signature Look Awaits!
                </p>
            </div>
            <div class="items-center justify-center sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <Vue3Lottie :animationData="lottieOptions.animationData" :loop="lottieOptions.loop"
                    :autoplay="lottieOptions.autoplay" :width="350" />
            </div>
        </div>
    </div>
</template>
