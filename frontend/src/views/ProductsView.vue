<template>
    <div class="bg-white mt-20">
        <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <main>
                <h1 class="text-2xl font-bold text-gray-900 md:text-4xl tracking-tight text-center">
                    Explore Our Collection</h1>
                <section aria-labelledby="products-heading" class="pt-6 flex">
                    <h2 id="products-heading" class="sr-only">Products</h2>
                    <div class="w-full">
                        <ProductsGrid />
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>

<script setup>
import ProductsGrid from '@/components/ProductsGrid.vue'
</script>