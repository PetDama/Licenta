<template>
    <section class="relative about-section-bg w-full">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-12 lg:py-24 mt-12 bg-white/65">
            <h1
                class=" mb-4 mt-20 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-none md:leading-loose text-amber-950">
                Welcome to Mary's Tailoring Handmade Workshop!
            </h1>
            <p class="mb-12 text-base md:text-lg lg:text-2xl font-bold text-amber-950 sm:px-8 lg:px-32">
                We are a team dedicated to the passion of tailoring, and Maria, my mother, is the heart and soul of this
                little business.
            </p>
            <div class="flex flex-col space-y-4 mb-12 sm:flex-row sm:justify-center sm:space-y-0">
                <hr class="w-32 sm:w-48 h-1 mx-auto bg-gray-950 border-0 rounded dark:bg-gray-950">
            </div>
        </div>
    </section>
</template>

<style scoped>
@media (max-width: 400px) {
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

.about-section-bg {
    background-image: url('@/assets/aboutSectionBackground.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: multiply;
}

section {
    top: 0;
    left: 0;
    width: 100%;
}
</style>