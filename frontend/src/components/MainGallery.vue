<template>
    <div class="flex justify-center items-center">
        <div class="2xl:mx-auto 2xl:container lg:px-20 lg:pt-16 md:pt-12 md:px-6 pt-9 px-4 w-96 sm:w-auto">
            <div role="main" class="flex flex-col items-center justify-center">
                <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800">Step into Style: Explore Our
                    Collections</h1>
                <p class="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">From
                    Timeless Elegance to Modern Chic - Discover Your Perfect Look</p>
            </div>
            <div class="lg:flex items-stretch md:mt-12 mt-8">
                <div class="lg:w-1/2">
                    <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                        <div class="sm:w-1/2 relative">
                            <div>
                                <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">25 April
                                    2024</p>
                                <div class="absolute bottom-0 left-0 p-6">
                                    <h2 class="text-xl font-semibold 5 text-white">Chic Everyday Style</h2>
                                    <p class="text-base leading-4 text-white mt-2">Effortless comfort meets trendy
                                        designs</p>
                                </div>
                            </div>
                            <RouterLink :to="{ name: 'products' }"><img src="../assets/gallery3.jpg" class="w-full"
                                    alt="chair" /></RouterLink>
                        </div>
                        <div class="sm:w-1/2 sm:mt-0 mt-4 relative">
                            <div>
                                <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">25 April
                                    2024</p>
                                <div class="absolute bottom-0 left-0 p-6">
                                    <h2 class="text-xl font-semibold 5 text-white">Personalized Tie Selection</h2>
                                    <p class="text-base leading-4 text-white mt-2">Make a statement with custom-made
                                        ties.</p>
                                </div>
                            </div>
                            <RouterLink :to="{ name: 'products' }"><img src="../assets/gallery4.jpg" class="w-full"
                                    alt="wall design" /></RouterLink>
                        </div>
                    </div>
                    <div class="relative">
                        <div>
                            <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">25
                                April 2024</p>
                            <div class="absolute bottom-0 left-0 md:p-10 p-6">
                                <h2 class="text-xl font-semibold 5 text-white">Tailored Excellences</h2>
                                <p class="text-base leading-4 text-white mt-2">Sharp looks for every occasion.</p>
                            </div>
                        </div>
                        <RouterLink :to="{ name: 'products' }"><img src="../assets/gallery2.jpg" alt="sitting place"
                                class="w-full mt-8 md:mt-6 hidden sm:block" /></RouterLink>
                        <RouterLink :to="{ name: 'products' }"><img class="w-full mt-4 sm:hidden"
                                src="../assets/gallery2.jpg" alt="sitting place" /></RouterLink>
                    </div>
                </div>
                <div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                    <div class="relative">
                        <div>
                            <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">25
                                April 2024</p>
                            <div class="absolute bottom-0 left-0 md:p-10 p-6">
                                <h2 class="text-xl font-semibold 5 text-white">Timeless Long Gowns</h2>
                                <p class="text-base leading-4 text-white mt-2">Graceful elegance that never goes out of
                                    style</p>
                            </div>
                        </div>
                        <RouterLink :to="{ name: 'products' }"><img src="../assets/gallery1.jpg" alt="sitting place"
                                class="w-full sm:block hidden" /></RouterLink>
                        <RouterLink :to="{ name: 'products' }"><img class="w-full sm:hidden"
                                src="../assets/gallery1.jpg" alt="sitting place" /></RouterLink>
                    </div>
                    <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                        <div class="relative w-full">
                            <div>
                                <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">25 April
                                    2024</p>
                                <div class="absolute bottom-0 left-0 p-6">
                                    <h2 class="text-xl font-semibold 5 text-white">Flirty Skirt Collection</h2>
                                    <p class="text-base leading-4 text-white mt-2">Twirl-worthy styles for every mood.
                                    </p>
                                </div>
                            </div>
                            <RouterLink :to="{ name: 'products' }"><img src="../assets/gallery5.jpg" class="w-full"
                                    alt="chair" /></RouterLink>
                        </div>
                        <div class="relative w-full sm:mt-0 mt-4">
                            <div>
                                <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">25 April
                                    2024</p>
                                <div class="absolute bottom-0 left-0 p-6">
                                    <h2 class="text-xl font-semibold 5 text-white">Versatile Midi Dresses</h2>
                                    <p class="text-base leading-4 text-white mt-2">"Perfectly balanced between casual
                                        and formal.</p>
                                </div>
                            </div>
                            <RouterLink :to="{ name: 'products' }"><img src="../assets/gallery6.jpg" class="w-full"
                                    alt="wall design" /></RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup></script>
<style scoped></style>