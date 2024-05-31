<template>
    <div class="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <div class="text-center">
            <h2
                class="font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
                From a young age, Maria
            </h2>
            <p class="text-xl font-normal leading-6 text-gray-600 mt-4 mx-auto">
                Discover Maria's Passion: A Tale of Creativity and Inspiration Unveiled!
            </p>
        </div>
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-4 mt-10">
            <div v-for="(image, index) in imageSources" :key="index" class="relative group">
                <RouterLink :to="{ name: 'products' }">
                    <ProductImageRetrievalCustomized :imageUrl="image.src" class="" />
                    <div
                        class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                    </div>
                    <div
                        class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <i class="bi bi-bag-heart text-7xl text-white"></i>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ref as storageRef, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '@/firebase/firebaseConfigs.js';

import ProductImageRetrievalCustomized from './ProductImageRetrievalCustomized.vue';

const imageSources = ref([]);

const fetchImages = async () => {
    const folderRef = storageRef(storage, 'about_us');

    try {
        const res = await listAll(folderRef);
        const urls = await Promise.all(
            res.items.map(itemRef => getDownloadURL(itemRef))
        );[1, 2, 3, 4, 4, 5, 5]
        imageSources.value = urls.map(url => ({ src: url }));
    } catch (error) {
        console.error('Error fetching images from Firebase Storage:', error);
    }
};

onMounted(() => {
    fetchImages();
});
</script>