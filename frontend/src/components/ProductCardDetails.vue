<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfigs';

const route = useRoute();
const productId = route.params.productId;
const productDetails = ref(null);

onMounted(async () => {
    if (productId) {
        await loadProduct(productId);
    }
});

async function loadProduct(productId) {
    const productRef = doc(db, 'products', productId);
    const productSnapshot = await getDoc(productRef);

    if (productSnapshot.exists()) {
        productDetails.value = {
            id: productSnapshot.id,
            ...productSnapshot.data()
        };
    } else {
        console.error('Product not found');
    }
}
</script>
<template>
    <div v-if="productDetails">
        <div class="py-8 mt-20">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <RouterLink :to="{ name: 'products' }"
                    class="p-2 px-6 bg-newColor2 border-white border text-black rounded-md hover:bg-newColor3">Back
                    to
                    Products</RouterLink>
                <div class=" flex flex-col md:flex-row -mx-4 mt-4">
                    <!-- Product Image Section -->
                    <div class="md:flex-1 px-4">
                        <div class="h-[460px] rounded-lg mb-4">
                            <ProductImageRetrievalCustomized :imageUrl="productDetails.imageURL" />
                        </div>
                    </div>
                    <!-- Product Details Section -->
                    <div class="md:flex-1 px-4">
                        <h2 class="text-2xl font-bold text-gray-800 dark:text-white">{{ productDetails.productName
                            }}</h2>
                        <p class="text-gray-700 dark:text-gray-300 text-md mb-2">
                            {{ productDetails.tag }}
                        </p>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {{ productDetails.description }}
                        </p>
                        <div class="flex mb-4">
                            <div class="mr-4">
                                <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                <span class="text-gray-600 dark:text-gray-300">$ {{ productDetails.sales }}</span>
                            </div>
                            <div>
                                <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                <span class="text-gray-600 dark:text-gray-300">In Stock</span>
                            </div>
                        </div>
                        <!-- Color Selection -->
                        <div class="mb-4">
                            <span class="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                            <div class="flex items-center mt-2">
                                <button v-for="i in 5"
                                    class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                            </div>
                        </div>
                        <!-- Size Selection -->
                        <div class="mb-4">
                            <span class="font-bold text-black">Select Size:</span>
                            <div class="flex items-center mt-2">
                                <button v-for="size in productDetails.sizes"
                                    class="bg-newColor2 text-black  py-2 px-4 rounded-full font-bold mr-2 hover:bg-newColor3">{{
                                        size }}</button>

                            </div>
                        </div>
                        <!-- Product Description -->
                        <div>
                            <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                            <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo
                                nulla ut
                                lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit.
                                Quisque
                                ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum
                                lacinia, non
                                sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi
                                consectetur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Loading product...</p>
    </div>
</template>

<style scoped></style>
