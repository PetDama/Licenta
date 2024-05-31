<template>
    <div class="container mx-auto py-10 mt-24">
        <div v-if="shoppingCart.length > 0" class="mt-8">
            <div class="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center mb-5">
                <div class="text-gray-800">
                    <h1 class="text-3xl font-semibold">Your Order </h1>
                    <p class="text-base text-gray-600">{{ getFormattedDate() }}</p>
                </div>
            </div>
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
                <div class="px-6 py-4">
                    <h2 class="text-xl font-semibold text-gray-800">Customer's Cart</h2>
                    <div>
                        <ProductCartDetails v-for="(product, index) in shoppingCart" :key="index" :product="product" />
                    </div>

                </div>
            </div>
        </div>

        <div v-else class="text-black text-center flex flex-col items-center">
            <div v-if="isOrderPlaced">
                <div class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
                    <div class="text-center">
                        <h1 class="text-2xl font-semibold mb-2">Thanks for buying from us!</h1>
                        <h2 class="text-2xl font-semibold mb-2">Receipt</h2>
                        <p class="text-gray-600">{{ getFormattedDate() }}</p>
                    </div>
                    <div class="mt-6">
                        <div>
                            <div v-if="tempShoppingCart.length > 0" class="grid grid-cols-2 gap-4">
                                <div v-for="(product, index) in tempShoppingCart" :key="index"
                                    class="p-4 border rounded-lg mt-6 grid grid-cols-1 gap-4">
                                    <h3 class="text-lg font-semibold">{{ product.productName }}</h3>
                                    <p class="text-gray-600">Price: ${{ product.sales }}</p>
                                    <p class="text-gray-600">Quantity: {{ product.stock }}</p>
                                    <p class="text-gray-600">Total: ${{ product.sales * product.stock }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-8">
                            <div class="flex justify-between">
                                <p class="text-gray-700">Subtotal:</p>
                                <p class="text-gray-700">${{ tempSubTotal }}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="text-gray-700">Shipping:</p>
                                <p class="text-gray-700">${{ shippingCost }}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="text-gray-700">Total:</p>
                                <p class="text-gray-700">${{ tempTotal }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span class="mt-5">
                Your cart is currently empty.
            </span>
            <div class="flex text-orange-400 hover:text-orange-600">
                <RouterLink :to="{ name: 'products' }">Time to fill it up!
                </RouterLink>
                <i class="bi bi-arrow-up"></i>
            </div>
        </div>

        <div v-if="shoppingCart.length > 0"
            class="mt-10 flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                    <div class="flex justify-between w-full">
                        <p class="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                        <p class="text-base dark:text-gray-300 leading-4 text-gray-600">${{ subtotal }}</p>
                    </div>
                    <div class="flex justify-between items-center w-full">
                        <p class="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
                        <p class="text-base dark:text-gray-300 leading-4 text-gray-600">${{ shippingCost }}</p>
                    </div>
                </div>
                <div class="flex justify-between items-center w-full">
                    <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                    <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">${{ total }}</p>
                </div>
            </div>
        </div>
    </div>

    <div v-if="shoppingCart.length > 0" class="flex justify-center mt-8">
        <button @click="submitOrder"
            class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Confirm
            Order</button>
    </div>
</template>

<script setup>
import ProductCartDetails from '../components/ProductCartDetails.vue';

const getFormattedDate = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    return date.toLocaleDateString('en-US', options);
};

import { cartStore } from '@/stores/shoppingCart';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const shoppingCartStore = cartStore();

const shoppingCart = computed(() => {
    return shoppingCartStore.displayObjectsFromCart().map(product => ({
        id: product.id,
        productName: product.productName,
        description: product.description,
        initialPrice: product.initialPrice,
        sales: product.sales,
        sizes: product.sizes,
        stock: product.stock,
        tag: product.tag,
        imageURL: product.imageURL,
    }));
});
const shippingCost = 8.00;
const subtotal = computed(() => {
    return parseFloat(shoppingCart.value.reduce((total, product) => total + (product.sales * product.stock), 0)).toFixed(2);
});

const total = computed(() => (parseFloat(subtotal.value) + shippingCost).toFixed(2));

import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfigs';

import { ref } from "vue";

const tempShoppingCart = ref([]);
const isOrderPlaced = ref(false);

const tempSubTotal = computed(() => {
    return parseFloat(tempShoppingCart.value.reduce((total, product) => total + (product.sales * product.stock), 0)).toFixed(2);
});

const tempTotal = computed(() => (parseFloat(tempSubTotal.value) + shippingCost).toFixed(2));

const submitOrder = async () => {
    try {
        const ordersCollectionRef = collection(db, 'orders');
        const timestamp = new Date();

        const orderData = {
            timestamp: timestamp.getTime(),
            products: shoppingCart.value,
            shippingCost: parseFloat(shippingCost),
            subtotal: parseFloat(subtotal.value),
            total: parseFloat(total.value)
        };

        orderData.products.forEach((product, index) => {
            console.log(`Product ${index + 1}:`, product);
        });
        await addDoc(ordersCollectionRef, orderData);
        isOrderPlaced.value = true;
        tempShoppingCart.value = shoppingCart.value;

        console.log('Order submitted successfully!');
        shoppingCartStore.clearCart();
    } catch (error) {
        console.error('Error submitting order:', error);
    }
};
</script>

<style scoped></style>