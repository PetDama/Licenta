<script setup>
import { ref } from 'vue'

const register = ref(false)

import { computed } from 'vue'
const formTitle = computed(() => {
    return register.value ? 'Register' : 'Login'
});

import { useStoreAuth } from "../stores/storeAuth";
const storeAuth = useStoreAuth();

const onSubmit = () => {
    if (!credentials.email || !credentials.password) {
        alert('Please fill in all fields');
    } else {
        if (register.value) {
            storeAuth.registerUser(credentials);
        }
        else {
            storeAuth.loginUser(credentials);
        }
    }
}

import { reactive } from 'vue'

let credentials = reactive({
    email: '',
    password: '',
})
</script>
<template>
    <div class="flex mt-32 justify-center items-center flex-col sm:flex-row">
        <img src="@/assets/login.svg" alt="" class="max-w-72 h-auto mb-4 sm:mb-0">
        <div class=" flex flex-col">
            <ul class="flex flex-row sm:flex-col text-sm font-medium text-center w-auto h-auto text-gray-600 ">
                <li class="me-2">
                    <a @click.prevent="register = false" href="#" aria-current="page"
                        class="inline-block p-4 hover:text-orange-500 hover:border-b-2 border-orange-500"
                        :class="{ 'text-orange-500 rounded-t-lg active 0': !register }">Login</a>
                </li>
                <li class="me-2">
                    <a @click.prevent="register = true" href="#"
                        class="inline-block p-4 hover:text-orange-500 hover:border-b-2 border-orange-500"
                        :class="{ 'text-orange-500 rounded-t-lg active 0': register }">Register</a>
                </li>
            </ul>
        </div>
        <hr class="mx-8 border border-orange-200 min-h-40 hidden sm:block" />
        <hr class="mx-8 border border-orange-200 min-w-40 block sm:hidden" />
        <div class="flex justify-center items-center mt-4 sm:mt-0">
            <div class="w-auto min-w-80">
                <form @submit.prevent="onSubmit" class="max-w-sm mx-auto">
                    <div class="flex justify-center sm:justify-start my-5">
                        <span class="text-3xl font-bold"> {{ formTitle }}</span>
                    </div>

                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                            placeholder="name.name@gmail.com" required v-model="credentials.email" />
                    </div>
                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your
                            password</label>
                        <input type="password" id="password" placeholder="Enter a password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                            required v-model="credentials.password" />
                    </div>
                    <button type="submit"
                        class="text-black bg-orange-200 hover:bg-orange-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">{{
                            formTitle }}</button>
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped></style>