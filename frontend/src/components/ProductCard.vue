<script setup>
import ProductImageRetrieval from './ProductImageRetrieval.vue';
import firebaseApp from '@/main.js';

const props = defineProps({
  product: Object
})

import { cartStore } from '@/stores/shoppingCart';
const shoppingCartStore = cartStore();

import { ref } from 'vue';
const addToCart = () => {
  if (!isAddingToCart.value) {
    isAddingToCart.value = true;
    const productToAdd = { ...props.product, stock: 1 };
    shoppingCartStore.addObjectToCart(productToAdd);
    setTimeout(() => {
      isAddingToCart.value = false;
    }, 1000);
  }
};

const isAddingToCart = ref(false);
</script>

<script>
import firebaseApp from '@/main.js';

export default {
  props: ['product'],
  setup() {
    return { imageUrl, firebaseApp };
  }
};
</script>


<template>

  <section
    class="p-5 py-8 md:py-10 max-h-custom bg-orange-50 text-center rounded-lg transform duration-500 hover:-translate-y-2 flex flex-col">
    <ProductImageRetrieval :imageUrl="props.product.imageURL" />
    <div class="flex-grow flex flex-col justify-between">
      <div class="space-x-1 flex justify-center mt-8 md:mt-10">
        <i v-for="i in 4" class="bi bi-star-fill text-orange-400 text-xl"></i>
        <i class="bi bi-star-fill text-gray-400 text-xl"></i>
      </div>
      <h1 class="text-3xl my-5">{{ props.product.productName }}</h1>
      <p class="flex-grow uppercase">{{ props.product.tag }}</p>
      <p class="mb-5 flex-grow">Short Description for the products</p>
      <h2 class="font-semibold mb-5">${{ props.product.sales }}</h2>
      <div class="flex justify-between">
        <RouterLink :to="{ name: 'productDetails', params: { productId: props.product.id } }"
          class="text-xl font-semibold leading-6 text-gray-900 me-5">
          <button class="p-2 px-6 bg-newColor2 border-white border text-black rounded-md hover:bg-newColor3">View
            Product</button>
        </RouterLink>
        <button @click="addToCart" :disabled="isAddingToCart"
          :class="{ 'opacity-50 cursor-not-allowed': isAddingToCart }"
          class="p-2 px-6 bg-newColor2 border-white border text-black rounded-md hover:bg-newColor3">
          <span v-if="isAddingToCart">Adding...</span>
          <span v-else>Add To Cart</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>