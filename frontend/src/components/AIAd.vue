<template>
    <section class="relative z-20 overflow-hidden bg-white pt-20">
        <div class="container mx-auto flex flex-col lg:flex-row lg:items-center">
            <div class="">
                <!-- Image -->
                <img src="@/assets/AIAd.svg" alt="" class="max-h-96 mb-4 sm:mb-0">
            </div>
            <div class="flex flex-col items-center justify-center">
                <h1 class="max-w-2xl mb-4 text-3xl text-center font-extrabold tracking-tight md:text-4xl xl:text-5xl">
                    AI Dress Designer: Your Dream Wardrobe Awaits!</h1>
                <p class="max-w-2xl font-light text-center text-gray-500 md:text-lg lg:text-xl">
                    Experience the Future of Fashion! Try Our AI Dress Designer Now.</p>
                <p class="max-w-2xl font-light text-center text-gray-500 md:text-lg lg:text-xl">
                    Questions? Ideas? Contact us now to explore AI dress design!</p>
                <Vue3Lottie :animationData="lottieOptions2.animationData" :loop="lottieOptions2.loop"
                    :autoplay="lottieOptions2.autoplay" :width="200" />
            </div>
        </div>
    </section>

    <section class="relative z-20 overflow-hidden bg-white">
        <div class="container mx-auto flex flex-col lg:flex-row lg:items-center">
            <div class="flex flex-col items-center">
                <h1 class="max-w-2xl mb-4 text-2xl text-center font-extrabold tracking-tight md:text-3xl xl:text-4xl">
                    Revolutionize Your Style Today! Explore Our AI Dress Designer.</h1>
                <p class="max-w-2xl mb-4 font-light text-center text-gray-500 md:text-lg lg:text-xl">
                    Experience the Future of Fashion! Try Our AI Dress Designer Now.</p>
                <RouterLink :to="{ name: 'createDress' }"
                    class="hover:text-black text-center hover:bg-transparent border bg-newColor3 transition duration-150 ease-in-out focus:outline-none rounded text-black px-4 sm:px-8 py-1 sm:py-3 text-sm">
                    Give it a try!</RouterLink>
            </div>
            <div class="flex flex-col items-center justify-center">
                <Vue3Lottie :animationData="lottieOptions.animationData" :loop="lottieOptions.loop"
                    :autoplay="lottieOptions.autoplay" :width="350" />
            </div>
        </div>
    </section>
</template>


<script setup>
import animationData from '../assets/animations/AILoading.json';
import animationData2 from '../assets/animations/writingTool.json';


const lottieOptions = {
    animationData: animationData,
    loop: true,
    autoplay: true,
};

const lottieOptions2 = {
    animationData: animationData2,
    loop: true,
    autoplay: true,
};


</script>

<style scoped></style>