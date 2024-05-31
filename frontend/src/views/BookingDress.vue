<template>
    <div class="relative isolate px-6  lg:px-8">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true">
            <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-100 to-orange-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
            </div>
        </div>
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32 mt-16 sm:mt-0">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                <div
                    class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Explore our diverse range of designs on our <RouterLink :to="{ name: 'products' }"
                        class="font-semibold text-red-800 cursor-pointer">Products Page</RouterLink>!
                </div>
            </div>
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> Create Personalized Outfits
                    with the Help of </h1>
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> Artificial Intelligence <br>
                </h1>
                <p class="mt-6 text-lg leading-8 text-gray-600"><span class="text-black">From Elegant Dresses to
                        Casual
                        Wear. Everything Is Possible!</span><br>Design your own unique style with our AI-powered
                    fashion tool. Our AI tool helps you visualize your design, making fashion design accessible to
                    everyone. </p>
            </div>
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true">
            <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-orange-100 to-orange-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
            </div>
        </div>
    </div>

    <div v-if="isLoggedIn"
        class=" flex flex-col items-center justify-center sm:items-start sm:justify-normal lg:flex-row z-30">
        <div class="flex flex-col">
            <input v-model="prompt" placeholder="Enter prompt ..."
                class=" py-2 mx-4 lg:mx-10 px-3 lg:px-5 h-12 placeholder-gray-600 border-orange-200 bg-orange-200 text-black rounded-md mb-4 text-center ">
            <button @click="generateImage"
                class=" py-2 mx-4 lg:mx-10 px-3 lg:px-5 h-12 text-black bg-orange-200 hover:bg-orange-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm sm:w-auto mb-4 text-center ">Generate
                Image</button>
        </div>

        <div class="p-4 lg:p-5 border-2 border-orange-500 flex items-center justify-center">
            <div v-if="!imageUrl && !loading">
                <p class="text-center">No image generated yet.</p>
            </div>
            <div v-if="loading" class="flex justify-center items-center">
                <svg class="animate-spin h-16 w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="orange" stroke-width="4"></circle>
                    <path class="opacity-75" fill="orange" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>

            </div>
            <div v-if="imageUrl && !loading" class="flex flex-col">
                <img :src="imageUrl" alt="Generated Image" class="max-h-customized2">
                <button @click="downloadImage"
                    class="mt-4 text-black bg-orange-200 hover:bg-orange-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
                    Download Image
                </button>
            </div>
        </div>
    </div>

    <div v-else
        class=" flex flex-col lg:flex-row items-center justify-center container mx-auto space-y-5 lg:space-x-10 p-5 mb-10 sm:mb-0 sm:-mt-20">
        <div class="flex justify-center lg:justify-start">
            <img src="../assets/AIAd.svg" alt="AI Drawing" class="max-w-full h-auto lg:max-w-screen-sm">
        </div>
        <div class="text-center lg:text-left">
            <p class="text-3xl md:text-4xl lg:text-5xl font-bold"> Create Your Dream Dress with AI Fashion Designer
            </p>
            <p class="text-xl mt-5 mb-5">
                Please login to create your dream dress with the help of our AI Fashion Designer.
            </p>
            <RouterLink :to="{ name: 'login' }"
                class="text-black bg-orange-200 hover:bg-orange-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
                Go to Login </RouterLink>
        </div>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';

const prompt = ref('');
const imageAlt = ref('');
const imageUrl = ref('');
const loading = ref(false);

import { useStoreAuth } from '@/stores/storeAuth';
const storeAuth = useStoreAuth();

const isLoggedIn = computed(() => !!storeAuth.user.id);

async function generateImage() {
    loading.value = true;
    console.log(prompt.value)
    try {
        const response = await axios.post("http://localhost:3000/generate_image", { prompt: prompt.value }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        const generatedImage = response.data.image.data[0].url;
        imageAlt.value = prompt.value;
        prompt.value = '';
        console.log(response.data.image);
        console.log(generatedImage);
        imageUrl.value = generatedImage;
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
}

function downloadImage() {
    const link = document.createElement('a');
    link.href = imageUrl.value;
    link.download = 'generated_image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
</script>

<style scoped>
.max-h-customized {
    max-height: 15rem;
}

.max-w-customized {
    max-height: 15rem;
}

.max-h-customized2 {
    max-height: 35rem;
}

.flex {
    display: flex;
}

.justify-center {
    justify-content: center;
}

.items-center {
    align-items: center;
}

.animate-spin {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
