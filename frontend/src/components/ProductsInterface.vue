<template>
  <div class="bg-white">
    <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <main class="pb-24">
        <h1 class="text-2xl font-bold text-gray-900 md:text-4xl tracking-tight">Explore Our Collection</h1>
        <div class="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
          <div class="w-full lg:w-3/4">
            <ProductsGrid />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import ProductsGrid from './ProductsGrid.vue'
</script>