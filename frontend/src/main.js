import "@/assets/css/main.css";
import "@/assets/css/animations.css";
import "@/assets/fonts/fonts.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase/firebaseConfigs";

import "bootstrap-icons/font/bootstrap-icons.css";
import Vue3Lottie from "vue3-lottie";

const app = createApp(App);

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;

import { createPinia } from "pinia";
import { markRaw } from "vue";

const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(router);
app.use(pinia);
app.use(Vue3Lottie);
app.mount("#app");
