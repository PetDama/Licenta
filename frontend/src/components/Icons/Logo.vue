<script setup>
import logoImage from '../../assets/logo.png';

const logoSrc = logoImage;

defineProps({
  width: Number,
  height: Number
});

</script>

<template>
  <img :src="logoSrc" alt="Logo" class="logo" :style="{ maxWidth: `${width}rem`, height: `${height}rem` }" />
</template>

<style scoped></style>