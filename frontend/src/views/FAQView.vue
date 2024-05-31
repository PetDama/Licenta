<template>
    <section class="relative z-20 overflow-hidden bg-white pt-20 lg:pt-36">
        <div class="container mx-auto">
            <FAQTitleSection />
            <FAQAccordion />
        </div>
    </section>
</template>
<script setup>
import FAQAccordion from '../components/FAQAccordion.vue';
import FAQTitleSection from '../components/FAQTitleSection.vue';
</script>
<style scoped></style>