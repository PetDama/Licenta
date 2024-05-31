<template>
  <img :src="imageUrl" alt="Image" class="w-full h-full object-cover" />
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage";

const props = defineProps(['imageUrl', 'firebaseApp']);

const imageUrl = ref(null);

onMounted(async () => {
  try {
    const storage = getStorage(props.firebaseApp);
    const imageRef = storageRef(storage, props.imageUrl);
    const url = await getDownloadURL(imageRef);
    imageUrl.value = url;

    console.log("Image name:", imageRef.name);
  } catch (error) {
    console.error('Error retrieving image:', error);
  }
});
</script>

<style scoped></style>