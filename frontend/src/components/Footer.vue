<script setup>
import Logo from './Icons/Logo.vue'

const navigation = [
  { name: 'Home', href: 'homepage' },
  { name: 'About', href: 'about' },
  { name: 'Products', href: 'products' },
  { name: 'FAQ', href: 'faq' },
  { name: 'Contact', href: 'contact' },
]
</script>

<template>
  <footer class="bg-nude-100 text-nude-900 py-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-row justify-between items-center mb-4">
        <div class="flex flex-col sm:flex-row items-center mb-2 md:mb-0">
          <Logo :width="7" :height="7" class="mr-2" />
          <span class="text-2xl text-center uppercase mt-2">Mary's Tailoring</span>
        </div>
        <div class="flex flex-col md:flex-row items-center">
          <img src="@/assets/sewingMachine.svg" alt="" class="max-w-32 h-auto mb-4 sm:mb-0">
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between border-t border-nude-300 pt-4">
        <div class="flex flex-row space-x-5 mt-5">
          <div v-for="nav in navigation" class="flex mb-2 md:mb-0 md:me-5">
            <RouterLink :to="{ name: nav.href }" class="hover:text-nude-700">{{ nav.name }}</RouterLink>
          </div>
        </div>
        <div class="md:text-right">
          <p><span class="font-bold">Email</span>: marystailoring@contact.ro</p>
          <p><span class="font-bold">Phone</span>: (0752) 153 890</p>
        </div>
      </div>

      <div class="flex justify-center md:justify-end gap-4 mt-4 mb-4">
        <a href="https://facebook.com" target="_blank">
          <i class="bi bi-facebook text-xl"></i>
        </a>
        <a href="https://instagram.com" target="_blank">
          <i class="bi bi-instagram text-xl"></i>
        </a>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <p class="text-xs text-nude-700">© 2024 Mary's Tailoring. All rights reserved.</p>
    </div>
  </footer>

</template>