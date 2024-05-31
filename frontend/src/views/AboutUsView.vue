<template>
    <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <AboutHeroSection />

        <div class="flex flex-col mt-20 sm:mt-24 md:mt-28 lg:mt-32 justify-center items-center">
            <div class="hidden sm:block">
                <AboutBook />
            </div>
            <div class="block sm:hidden mb-10">
                <h3 class="text-3xl text-center">Our Story</h3>
                <p class="text-center">
                    Our story is one of passion, creativity, and inspiration. From a young age, Maria has been
                    dedicated to the art of tailoring. She is the heart and soul of this little business.
                </p>
            </div>
            <AboutPicsList />
        </div>
    </div>
</template>

<script setup>
import AboutHeroSection from '../components/AboutHeroSection.vue';
import AboutPicsList from '../components/AboutPicsList.vue';
import AboutBook from '../components/AboutBook.vue';
</script>

<style scoped>
.container {
    max-width: 1200px;
}

@media (max-width: 639px) {
    .py-12 {
        padding-top: 6rem;
        padding-bottom: 6rem;
    }

    .mb-4 {
        margin-bottom: 1.5rem;
    }

    .mb-8 {
        margin-bottom: 2rem;
    }
}
</style>
