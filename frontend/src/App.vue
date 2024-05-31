<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import Banner from './components/Banner.vue';

import { onMounted } from 'vue'

import { useStoreAuth } from "./stores/storeAuth";
const storeAuth = useStoreAuth();

onMounted(() => {
    storeAuth.initAuth();
})

import { ref } from 'vue';
const showModal = ref(false);
</script>

<template>
    <!-- <Banner /> -->
    <div class="flex flex-col min-h-screen">
        <header class="fixed top-0 left-0 right-0 z-50 bg-white" v-if="$route.name !== 'not-found'">
            <NavBar />
        </header>
        <RouterView class="flex-grow" />
        <Footer v-if="$route.name !== 'not-found'" />

        <button @click="showModal = true"
            class="fixed z-50 bottom-8 right-8 bg-newColor4 text-black px-8 py-2 rounded-full shadow-md hover:bg-newColor2 focus:outline-none focus:ring-2 focus:ring-orange-600">
            Info
        </button>
        <div v-if="showModal"
            class="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-4 sm:p-8 rounded-md shadow-lg flex flex-col items-center text-center space-y-3">
            <h2 class="text-xl sm:text-3xl font-extrabold mb-4">Mary's Tailoring</h2>
            <p class="text-sm">• A website dedicated to your imagination. <span class="hidden sm:block"></span></p>
            <p class="text-sm hidden sm:block">• Mary's Tailoring offers a wide range of <RouterLink
                    :to="{ name: 'products' }" class="text-red-700" @click="showModal = false">products</RouterLink>
                that you can customize.</p>
            <p class="text-sm hidden sm:block">• In the '<RouterLink :to="{ name: 'about' }" class="text-red-700"
                    @click="showModal = false">About
                </RouterLink>'
                section, you can learn the story behind "Mary's Tailoring".</p>
            <p class="text-sm"><span class="hidden sm:block">• Put your imagination to the test, and we'll bring it to
                    life.</span> Try out our <RouterLink :to="{ name: 'createDress' }" class="text-red-700"
                    @click="showModal = false">personalized
                    generator</RouterLink> for
                various items such as: dresses, suits, bowties, shirts, ties, etc.</p>
            <p class="text-sm hidden sm:block">• Contact us at <span
                    class="text-red-700">marystailoring@contact.com</span> or leave us
                a
                message in the '<RouterLink :to="{ name: 'contact' }" class="text-red-700" @click="showModal = false">
                    Contact</RouterLink>'
                section.
            </p>
            <div class="text-sm flex flex-col"><span>Turn your dream into reality!</span>
                <RouterLink :to="{ name: 'contact' }" class="text-red-700 block sm:hidden" @click="showModal = false">
                    Contact us!</RouterLink>
                <span class="hidden sm:block">Contact us!</span>
            </div>

            <button @click="showModal = false"
                class="mt-4 bg-newColor4 text-black px-4 py-2 rounded-md shadow-md hover:bg-newColor2 focus:outline-none focus:ring-2 focus:ring-orange-600">
                Close
            </button>
        </div>
    </div>
</template>

<style scoped></style>
