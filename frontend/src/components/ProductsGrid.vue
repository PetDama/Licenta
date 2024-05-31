<template>
  <div class="flex flex-col sm:flex-row items-center justify-center md:justify-between mx-10">
    <div class="flex flex-col md:flex-row items-center mb-4 md:mb-0 sm:me-10">
      <input type="text" v-model="searchTerm" placeholder="Search products"
        class="w-full md:w-72 px-4 mb-2 md:mb-0 md:me-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
      <label for="category" class="sr-only text-center">Select Category</label>
      <div class="relative">
        <select id="category" v-model="selectedCategory" @change="filterProducts"
          class="block w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <option value="" disabled>Select Category</option>
          <option v-for="category in subCategories" :key="category.name" :value="category.name">{{ category.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="flex gap-10 items-center justify-center">
      <div class="relative">
        <button @click="toggleSortDropdown" class="relative">
          <i class="bi bi-grid text-4xl"></i>
        </button>
        <div v-if="showSortDropdown"
          class="z-10 absolute left-1/2 transform -translate-x-1/2 bg-white rounded shadow-lg mt-2 w-32 h-auto text-center">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button @click="sortByProductName"
              class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
              Sort by Product Name
            </button>
            <button @click="sortByLowestPrice"
              class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
              Sort by Lowest Price
            </button>
            <button @click="sortByHighestPrice"
              class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
              Sort by Highest Price
            </button>
          </div>
        </div>
      </div>

      <button @click="clearFilters"
        class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Clear Filters
      </button>
    </div>
  </div>
  <section class="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
    <section v-if="filteredProducts.length > 0"
      class="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-start ">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </section>
    <p v-else class="text-center text-gray-500 mt-8">No products available in this category.</p>
  </section>

</template>

<style></style>

<script setup>
import ProductCard from './ProductCard.vue';
import { ref, onMounted, computed } from 'vue';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from '../firebase/firebaseConfigs';


import subCategoriesData from '@/data/subCategories.json';
const subCategories = ref(subCategoriesData.subCategories);

const showSortDropdown = ref(false)
const toggleSortDropdown = () => {
  showSortDropdown.value = !showSortDropdown.value
}


const productsCollectionRef = collection(db, 'products');

const products = ref([]);
let orderByCriteria = "productName";

onMounted(async () => {
  await loadProducts(orderByCriteria);
});

async function loadProducts(orderByCriteria) {
  const orderByField = orderByCriteria.split("_")[0];
  const orderDirection = orderByCriteria.split("_")[1];

  const productsCollectionQuery = query(productsCollectionRef, orderBy(orderByField, orderDirection));
  const querySnapshot = await getDocs(productsCollectionQuery);
  let tempProducts = [];
  querySnapshot.forEach((doc) => {
    const product = {
      id: doc.id,
      productName: doc.data().productName,
      description: doc.data().description,
      initialPrice: doc.data().initialPrice,
      sales: doc.data().sales,
      sizes: doc.data().sizes,
      stock: doc.data().stock,
      tag: doc.data().tag,
      imageURL: doc.data().imageURL,
      done: doc.data().done
    }
    tempProducts.push(product);
  });
  products.value = tempProducts;
}

function sortByProductName() {
  if (selectedCategory.value !== '') {
    orderByCriteria = "productName";
    filterProducts();
  } else {
    orderByCriteria = "productName";
    loadProducts(orderByCriteria);
  }
}

function sortByLowestPrice() {
  if (selectedCategory.value !== '') {
    orderByCriteria = "sales";
    filterProducts();
  } else {
    orderByCriteria = "sales";
    loadProducts(orderByCriteria);
  }
}

function sortByHighestPrice() {
  if (selectedCategory.value !== '') {
    orderByCriteria = "sales_desc";
    filterProducts();
  } else {
    orderByCriteria = "sales_desc";
    loadProducts(orderByCriteria);
  }
}


const selectedCategory = ref('');
async function filterProducts() {
  if (selectedCategory.value === '') {
    loadProducts(orderByCriteria);
  } else {
    const productsCollectionQuery = query(productsCollectionRef, orderBy(orderByCriteria.split("_")[0], orderByCriteria.split("_")[1]));
    const querySnapshot = await getDocs(productsCollectionQuery);
    let tempProducts = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().tag === selectedCategory.value) {
        const product = {
          id: doc.id,
          productName: doc.data().productName,
          description: doc.data().description,
          initialPrice: doc.data().initialPrice,
          sales: doc.data().sales,
          sizes: doc.data().sizes,
          stock: 0, // Set stock to 0 for new object
          tag: doc.data().tag,
          imageURL: doc.data().imageURL,
          done: doc.data().done
        }
        tempProducts.push(product);
      }
    });
    products.value = tempProducts;
  }
}

function clearFilters() {
  searchTerm.value = '';
  selectedCategory.value = '';
  orderByCriteria = 'productName';
  loadProducts(orderByCriteria);
}

const searchTerm = ref('');
const filteredProducts = computed(() => {
  return products.value.filter(product => {
    return product.productName.toLowerCase().includes(searchTerm.value.toLowerCase());
  });
});
</script>
