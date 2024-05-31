<template>
  <div class="relative w-full overflow-hidden md:h-96 rounded-lg border border-white">
    <img :src="imageUrl" alt="Image"
      class="object-cover w-full h-auto md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage";

const props = defineProps(['imageUrl', 'firebaseApp']);

const imageUrl = ref(null);

onMounted(async () => {
  try {
    const storage = getStorage(props.firebaseApp);
    const imageRef = storageRef(storage, props.imageUrl);
    const url = await getDownloadURL(imageRef);
    imageUrl.value = url;

    // console.log("Image name:", imageRef.name);
  } catch (error) {
    console.error('Error retrieving image:', error);
  }
});
</script>

<style scoped></style>