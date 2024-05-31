<script setup>
import { ref } from 'vue';

const isVisible = ref(true);
</script>

<template>
  <div v-if="isVisible" id="sticky-banner" tabindex="-1"
    class="fixed z-40 mt-12 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50">
    <!-- Banner content -->
    <div class="flex items-center mx-auto">
      <p class="flex items-center text-sm font-normal text-gray-900">
        <span class="inline-flex p-1 me-3 rounded-full w-6 h-6 items-center justify-center flex-shrink-0">
          <i class="bi bi-calendar2-check"></i>
        </span>
        <span>Limited Time Offer: Shop Dresses Now! Explore our handpicked selection of <RouterLink
            :to="name = 'products'"
            class="inline font-medium text-red-600 underline underline-offset-2 decoration-600 decoration-solid hover:no-underline">
            dresses.</RouterLink></span>
      </p>
    </div>
    <!-- Close button -->
    <div class="flex items-center">
      <button @click="isVisible = false" type="button"
        class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 rounded-lg text-sm p-1.5">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
  </div>

</template>
