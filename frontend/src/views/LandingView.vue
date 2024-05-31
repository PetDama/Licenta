<script setup>
import HeroSection from '../components/HeroSection.vue';
import AdBanner from '../components/AdBanner.vue';
import MainGallery from '../components/MainGallery.vue';
import SectionPhotoRight from '../components/SectionPhotoRight.vue';
import AIAd from '../components/AIAd.vue';
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col mt-20 justify-center items-center">
      <HeroSection />
      <AdBanner />
      <AIAd />
      <MainGallery />
      <SectionPhotoRight />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  padding: 0 20px;
}

@media (max-width: 400px) {
  .container {
    min-width: 400px;
    padding: 0 10px;
  }
}
</style>
