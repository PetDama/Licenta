<template>
    <div>
        <form @submit.prevent="submitForm" class="w-full max-w-lg mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label for="email" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email
                        address</label>
                    <input type="email" name="email" id="email"
                        class="block w-full text-gray-700 border border-orange-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        placeholder="Enter your email" v-model="formData.email" required />
                </div>
                <div>
                    <label for="first_name"
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">First name</label>
                    <input type="text" name="first_name" id="first_name"
                        class="block w-full text-gray-700 border border-orange-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        placeholder="Enter your first name" v-model="formData.firstname" required />
                </div>
                <div>
                    <label for="last_name"
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Last name</label>
                    <input type="text" name="last_name" id="last_name"
                        class="block w-full text-gray-700 border border-orange-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        placeholder="Enter your last name" v-model="formData.lastname" required />
                </div>
                <div>
                    <label for="phone" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Phone
                        number (0000 000 000)</label>
                    <input type="tel" name="phone" id="phone"
                        class="block w-full text-gray-700 border border-orange-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        placeholder="Enter your phone number" v-model="formData.phoneNumber" required />
                </div>
                <div>
                </div>
            </div>
            <div>
                <label for="message" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Write a
                    message</label>
                <textarea name="message" id="message" rows="4"
                    class="block w-full text-gray-700 border border-orange-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    placeholder="Write your message" v-model="formData.message" required></textarea>
            </div>
            <div>
                <label for="upload_photo"
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Upload a
                    Photo</label>
                <button type="button" @click="open({ accept: 'image/*,video/*', multiple: true })"
                    class="p-5 border border-orange-200 mb-5 rounded">
                    <template v-if="files?.length === 1">
                        Selected file: {{ files.item(0)?.name }} (Click to select another)
                    </template>
                    <template v-else-if="files?.length > 1">
                        {{ files.length }} files selected (Click to select more)
                    </template>
                    <template v-else>
                        <span class="text-gray-400">Select one or more images or videos</span>
                    </template>
                </button>
            </div>
            <button type="submit"
                class="text-black bg-orange-200 hover:bg-orange-200 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
        <div v-if="successPopup"
            class="flex items-center justify-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
            role="alert">
            <strong class="font-bold">Success!</strong>
            <br class="block sm:hidden">
            <span class="block sm:inline">Your form has been submitted successfully.</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <title>Close</title>
                    <path
                        d="M14.354 5.646a.5.5 0 01.708.708L10.707 10l4.355 4.646a.5.5 0 11-.708.708L10 10.707l-4.646 4.355a.5.5 0 11-.708-.708L9.293 10 4.646 5.354a.5.5 0 01.708-.708L10 9.293l4.646-4.647z"
                        clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../firebase/firebaseConfigs';
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useFileDialog } from '@vueuse/core';

const folderPath = 'contact_uploads';
const showAlert = ref(false);

const {
    files,
    open,
    reset,
} = useFileDialog();

const formData = ref({
    email: '',
    firstname: '',
    lastname: '',
    phoneNumber: '',
    message: '',
});

const successPopup = ref(false);

const submitForm = async () => {
    try {
        const contactRequestsCollectionRef = collection(db, 'contactRequests');
        const timestamp = new Date();
        const data = {
            ...formData.value,
            timestamp: timestamp.getTime(),
        };

        // Handle file uploads
        if (files.value?.length) {
            const uploadedFiles = [];
            for (const file of files.value) {
                const fileRef = storageRef(storage, `${folderPath}/${file.name}`);
                const snapshot = await uploadBytesResumable(fileRef, file);
                const downloadURL = await getDownloadURL(snapshot.ref);
                uploadedFiles.push(downloadURL);
            }
            data.uploadedFiles = uploadedFiles;
        }

        await addDoc(contactRequestsCollectionRef, data);
        console.log('Form submitted successfully!');
        formData.value = {
            email: '',
            firstname: '',
            lastname: '',
            phoneNumber: '',
            message: '',
        };
        reset();
        successPopup.value = true;
        setTimeout(() => {
            successPopup.value = false;
        }, 5000);
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};
</script>

<style scoped>
.fixed {
    position: fixed;
    z-index: 100;
}
</style>
