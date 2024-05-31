<template>

    <div class="flex flex-col items-center mt-32">
        <h1 class="mb-4 text-3xl text-center font-extrabold text-gray-900 md:text-4xl lg:text-5xl ">
            Get in Touch with Mary's Tailoring</h1>
        <p class="mb-8 text-lg text-center text-gray-600 ">We are committed to providing the best
        </p>
    </div>
    <div class="flex justify-center items-center flex-col sm:flex-row">
        <div class="flex justify-center items-center mt-4 sm:mt-0">
            <div class="w-auto min-w-80">
                <ContactForm />
            </div>
        </div>
        <hr class="ms-16 me-8 border border-orange-200 min-h-40 hidden sm:block" />
        <hr class="ms-16 me-8 mt-5 border border-orange-200 min-w-40 block sm:hidden" />
        <img src="@/assets/contact.svg" alt="" class="max-w-96 h-auto mb-4 sm:mb-0">
    </div>
</template>
<script setup>
import ContactForm from '../components/ContactForm.vue';
</script>
<style scoped></style>