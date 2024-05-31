<script setup>
import { ref } from 'vue';

import data from '../data/faq.json';

const faqData = ref(data.map(faq => ({ ...faq, active: false })));


const handleToggle = (faqId) => {
  faqData.value.forEach((faq) => {
    if (faq.id === faqId) {
      faq.active = !faq.active;
    } else {
      faq.active = false;
    }
  });
};
</script>

<template>
  <div class="-mx-4 flex flex-wrap">
    <div class="w-full px-4 lg:w-1/2" v-for="faq in faqData" :key="faq.id">
      <div
        class="mb-8 w-full rounded-lg bg-newColor2 p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
        <button class="faq-btn flex w-full text-left" @click="handleToggle(faq.id)">
          <div
            class="mr-5 flex h-10 w-full max-w-[2rem] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
            <i class="bi bi-chevron-down duration-200 ease-in-out" :class="{ 'rotate-180': faq.active }"></i>
          </div>
          <div class="w-full">
            <h4 class="mt-1 text-lg font-semibold text-dark dark:text-white">{{ faq.question }}</h4>
          </div>
        </button>
        <div v-show="faq.active" class="pl-[3rem]">
          <p class="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
