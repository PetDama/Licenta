<script setup>
import ProductImageRetrieval from './ProductImageRetrieval.vue';

const props = defineProps({
    product: Object
})

import { cartStore } from '../stores/shoppingCart';
const shoppingCartStore = cartStore();

const deleteProduct = () => {
    if (props.product.stock) {
        const confirmDelete = confirm("Are you sure you want to remove this product from your cart?");
        if (confirmDelete) {
            shoppingCartStore.deleteObjectFromCart(props.product.id);
        }
    } else {
        shoppingCartStore.deleteObjectFromCart(props.product.id);
    }
};
const deleteOneFromCart = () => {
    shoppingCartStore.deleteObjectFromCart(props.product.id, 1);
};
import { ref } from 'vue'
const showDescription1 = ref(false);
const showDescription2 = ref(false);
</script>

<template>
    <div
        class="mb-5 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
        <div class="w-full md:w-96">
            <ProductImageRetrieval :imageUrl="props.product.imageURL" :key="props.product.id"
                class="w-full hidden md:block" />
            <ProductImageRetrieval :imageUrl="props.product.imageURL" :key="props.product.id"
                class="w-full md:hidden" />
        </div>
        <div
            class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div class="w-full flex flex-col justify-start items-start space-y-8">
                <h3 class="text-xl  xl:text-2xl font-semibold leading-6 text-gray-800">{{
                    props.product.productName }}
                </h3>
                <div class="flex justify-start items-start flex-col space-y-2">
                    <p class="text-sm  leading-none text-gray-800"><span class=" text-gray-400">Style:
                        </span> {{ props.product.tag }}</p>
                    <p class="text-sm  leading-none text-gray-800"><span class=" text-gray-400">Color:
                        </span> Default Color</p>
                    <p class="text-sm  leading-none text-gray-800"><span class=" text-gray-400">+Info:
                        </span> Random Information</p>
                </div>
            </div>
            <div class="flex justify-between space-x-8 items-start w-full">
                <p class="text-base  xl:text-lg leading-6">${{ props.product.sales }} <span
                        class="text-red-300 line-through ms-4">
                        ${{ props.product.initialPrice }}</span></p>
                <p class="text-base  xl:text-lg leading-6 text-gray-800">Quantity: {{ props.product.stock }}</p>
                <div class="relative">
                    <div @mouseover="showDescription1 = true" @mouseleave="showDescription1 = false"
                        class="cursor-pointer">
                        <button @click="deleteOneFromCart" class="cursor-pointer"><span
                                class="text-green-400 text-xl">-1</span></button>
                    </div>
                    <div v-show="showDescription1"
                        class="text-center absolute top-full left-1/2 transform -translate-x-1/2 p-4 bg-gray-100 rounded shadow-lg text-sm text-gray-800">
                        Delete only 1 product from cart
                    </div>
                </div>
                <div class="relative">
                    <div @mouseover="showDescription2 = true" @mouseleave="showDescription2 = false"
                        class="cursor-pointer">
                        <button @click="deleteProduct" class="cursor-pointer text-red-900"><span
                                class="text-red-400 text-xl "><i class="bi bi-trash2"></i></span></button>
                    </div>
                    <div v-show="showDescription2"
                        class="text-center absolute top-full left-1/2 transform -translate-x-1/2 p-4 bg-gray-100 rounded shadow-lg text-sm text-gray-800">
                        Remove the product from cart
                    </div>
                </div>


                <p class="text-base  xl:text-lg font-semibold leading-6 text-gray-800">TOTAL</p>
            </div>
        </div>
    </div>
</template>