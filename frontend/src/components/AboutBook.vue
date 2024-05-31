<template>
    <div class="flex justify-center items-center ">
        <div class="border border-newColor2 drop-shadow-sm p-5 flex flex-col md:flex-row mx-auto">
            <div
                class="max-w-md mx-auto p-6 bg-newColor2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
                <div v-for="(page, index) in pages" :key="index" :class="{ 'hidden': currentPage !== index }"
                    class="flex justify-center items-center">
                    <span
                        class="bg-newColor2 text-xs font-medium text-black border text-center py-1 px-3 leading-none rounded-full dark:bg-newColor2 dark:text-black absolute -translate-y-1/2 -translate-x-1/2 right-auto top-0 left-0">Page
                        {{ index + 1 }}</span>
                    <div class="text-center">
                        <h2 class="lavishly-yours-font text-5xl font-bold mb-4">{{ page.title }}</h2>
                        <p class="text-lg">{{ page.content }}</p>
                    </div>
                </div>
                <div class="flex justify-between px-4 py-2 p-2 bg-white relative md:absolute bottom-0 left-0 right-0">
                    <i class="bi bi-skip-backward-btn text-4xl cursor-pointer" @click="prevPage"
                        :disabled="currentPage === 0" :class="{ 'cursor-not-allowed': currentPage === 0 }"></i>
                    <i class="bi bi-skip-forward-btn text-4xl cursor-pointer" @click="nextPage"
                        :disabled="currentPage === pages.length - 1"
                        :class="{ 'cursor-not-allowed': currentPage === pages.length - 1 }"></i>
                </div>
            </div>

            <Vue3Lottie :animationData="lottieOptions.animationData" :loop="lottieOptions.loop"
                :autoplay="lottieOptions.autoplay" :width="500" :height="500" />
        </div>

    </div>

</template>

<script setup>
import { ref } from 'vue'

const pages = ref([
    { title: 'From a young age,', content: 'Maria discovered her love for creation by crocheting and knitting clothes for dolls. Although her time was limited in a small village in Bihor, where household chores took precedence, Maria always found ways to combine the practical with the enjoyable. Whether she was tending to animals in the fields or at home with an old pedal-operated sewing machine, Maria honed her tailoring skills, turning this passion into a constant in her life.' },
    { title: 'After graduating', content: ' from an industrial high school specialized in tailoring, Maria continued to create and innovate in the art of tailoring. However, the opportunity to open her own workshop remained a memory, and tailoring became a hobby, creating beautiful dresses for her daughter, and for herself.' },
    { title: 'Nevertheless,', content: " I firmly believe that her passion and talent deserve more recognition. Hence, we decided to bring Maria's tailoring skills to the online world through this website. We aim to share her creativity and craftsmanship with a wider audience, providing everyone the opportunity to discover the beauty of handmade clothing." },
    { title: 'Step into our workshop', content: " and immerse yourself in a world where fabrics come to life under Maria's skilled hands. Whether it's a bespoke gown for a special occasion or a tailored suit for everyday elegance, we tailor each garment to reflect the unique style and personality of our clients." }
]);

const currentPage = ref(0);

const nextPage = () => {
    if (currentPage.value < pages.value.length - 1) {
        currentPage.value++;
    }
};

const prevPage = () => {
    if (currentPage.value > 0) {
        currentPage.value--;
    }
};

import animationData from '../assets/animations/book.json';

const lottieOptions = {
    animationData: animationData,
    loop: true,
    autoplay: true,
};

</script>

<style scoped></style>