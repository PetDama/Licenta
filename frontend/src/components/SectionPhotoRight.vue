<template>
    <div class="w-full px-6 bg-white lustria-regular mt-16">
        <div class="mx-auto flex items-center flex-col md:flex-row p-4 px-6 text-center justify-center rounded-lg">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1
                    class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Transform Your Style Today!</h1>
                <p class="max-w-2xl font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">Watch as Your
                    Dream Dress Comes to Lige. Ready to Make it Yours?</p>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Contact Us for Custom Tailoring Services!</p>
            </div>
            <div class="lg:mt-0 lg:col-span-5 lg:flex">
                <Vue3Lottie :animationData="lottieOptions.animationData" :loop="lottieOptions.loop"
                    :autoplay="lottieOptions.autoplay" :width="350" />
            </div>
        </div>
    </div>
</template>

<script setup>
import animationData from '../assets/animations/random1.json';


const lottieOptions = {
    animationData: animationData,
    loop: true,
    autoplay: true,
};


</script>

<style scoped></style>