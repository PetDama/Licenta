<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

import Logo from './Icons/Logo.vue'


const navigation = [
  { name: 'Home', href: 'homepage' },
  { name: 'About', href: 'about' },
  { name: 'Products', href: 'products' },
  { name: 'FAQ', href: 'faq' },
  { name: 'Book a Dress', href: 'createDress' },
  { name: 'Contact', href: 'contact' },
]

const mobileNavLog = [
  { name: 'Log in', href: 'login' },
]

const mobileMenuOpen = ref(false)

import { computed } from 'vue';
import { cartStore } from '@/stores/shoppingCart';
const shoppingCartStore = cartStore();

const shoppingCartLength = computed(() => {
  if (shoppingCartStore.shoppingCart.length > 0) {
    return shoppingCartStore.shoppingCart.length;
  } else {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    return shoppingCart ? shoppingCart.length : 0;
  }
});

import { useRoute } from 'vue-router';
const route = useRoute();

function isPageActive(page) {
  return route.name === page;
}

import { useStoreAuth } from "../stores/storeAuth";
const storeAuth = useStoreAuth();

let dropdownOpen = ref(false);

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}
</script>

<style scoped></style>

<template>
  <div>
    <header class="fixed top-0 z-50 w-full inset-x-0 bg-white lustria-regular-font uppercase">
      <nav class="flex items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <RouterLink :to="{ name: 'homepage' }" class="-m-1.5 p-1.5">
            <Logo :width="7" :height="5" />
          </RouterLink>
        </div>
        <!-- mobile menu -->
        <div class="flex items-center lg:hidden">
          <RouterLink :to="{ name: 'order' }" class="text-xl font-semibold leading-6 text-gray-900 me-5">
            <div class="relative">
              <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{{
                  shoppingCartLength }}</p>
              </div>
              <i class="bi bi-cart text-xl"></i>
            </div>
          </RouterLink>
          <button type="button"
            class="me-4 md:-m-2.5  inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true">

            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <!-- desktop -->
        <div class="hidden lg:flex lg:gap-x-12">
          <RouterLink v-for="item in navigation" :key="item.name" :to="{ name: item.href }"
            class="text-md font-semibold leading-6 text-gray-900"
            :class="{ 'border-b-4 border-newColor3': isPageActive(item.href) }">{{ item.name }}
          </RouterLink>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <RouterLink :to="{ name: 'order' }" class="text-xl font-semibold leading-6 text-gray-900 me-5">
            <div class="relative">
              <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{{
                  shoppingCartLength }}</p>
              </div>
              <i class="bi bi-cart text-xl"></i>
            </div>
          </RouterLink>


          <li v-if="storeAuth.user.id" class="flex flex-col items-center">
            <div class="relative">
              <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown"
                data-dropdown-placement="bottom-start" class="w-10 h-10 rounded-full cursor-pointer"
                src="@/assets/avatar.svg" alt="User dropdown" @click="toggleDropdown" />
              <div v-if="dropdownOpen" id="userDropdown"
                class="absolute z-100 right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 flex flex-col items-center ">
                <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div class="font-medium truncate">{{ storeAuth.user.email }}</div>
                </div>
                <ul class=" flex flex-col items-center py-2 text-sm text-gray-700" aria-labelledby="avatarButton">
                  <li>
                    <button @click="storeAuth.logoutUser" class="block px-4 py-2 hover:bg-gray-100 uppercase">
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <RouterLink v-else v-for="item in mobileNavLog" :key="item.name" :to="{ name: item.href }"
            class="text-md font-semibold leading-6 text-gray-900">{{ item.name }}
          </RouterLink>
        </div>
      </nav>

      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50"></div>
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <Logo :width="7" :height="5" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <RouterLink v-for="item in navigation" :key="item.name" :to="{ name: item.href }"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  @click="mobileMenuOpen = false">{{ item.name }}</RouterLink>
              </div>
              <div class="py-6">
                <li v-if="storeAuth.user.id" class="flex flex-col items-start">
                  <div class="relative">
                    <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown"
                      data-dropdown-placement="bottom-start" class="w-10 h-10 rounded-full cursor-pointer"
                      src="@/assets/avatar.svg" alt="User dropdown" @click="toggleDropdown" />
                    <span>Account</span>
                    <div v-if="dropdownOpen" id="userDropdown"
                      class="absolute z-100 left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 flex flex-col items-center ">
                      <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div class="font-medium truncate">{{ storeAuth.user.email }}</div>
                      </div>
                      <ul class=" flex flex-col items-center py-2 text-sm text-gray-700" aria-labelledby="avatarButton">
                        <li @click="mobileMenuOpen = false">
                          <button @click="storeAuth.logoutUser" class="block px-4 py-2 hover:bg-gray-100 uppercase">
                            Log out
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <RouterLink v-else :to="{ name: 'login' }" @click="mobileMenuOpen = false"
                  class="text-md font-semibold leading-6 text-gray-900">Log in
                </RouterLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>
</template>
