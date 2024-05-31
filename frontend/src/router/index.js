import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingView,
    },
    {
      path: "/",
      name: "homepage",
      component: LandingView,
    },
    {
      path: "/About",
      name: "about",
      component: () => import("../views/AboutUsView.vue"),
    },
    {
      path: "/Contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/FAQ",
      name: "faq",
      component: () => import("../views/FAQView.vue"),
    },
    {
      path: "/Login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/Products",
      name: "products",
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/ProductDetails/:productId",
      name: "productDetails",
      component: () => import("../views/ProductDetailsView.vue"),
    },
    {
      path: "/Shop",
      name: "order",
      component: () => import("../views/ShoppingCartView.vue"),
    },
    {
      path: "/CreateYourDress",
      name: "createDress",
      component: () => import("../views/BookingDress.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0, behavior: "smooth" });
        }, 300);
      })
    );
  },
});

import { useStoreAuth } from "@/stores/storeAuth";

router.beforeEach(async (to, from, next) => {
  const storeAuth = useStoreAuth();
  console.log("to: ", to);

  if (storeAuth.user.id && to.name === "login") {
    next({ name: "home" });
  } else {
    next();
  }
});
export default router;
