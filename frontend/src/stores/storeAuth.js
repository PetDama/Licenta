import { defineStore } from "pinia";
import { auth } from "../firebase/firebaseConfigs";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { cartStore } from "@/stores/shoppingCart";

export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
    return {
      user: {},
    };
  },
  actions: {
    initAuth() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          this.router.push("/");
        } else {
          this.user = {};
          // this.router.replace("/Login");
        }
      });
    },
    registerUser(credentials) {
      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {});
    },
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User logged in");
        })
        .catch((error) => {
          console.log("Error logging in", error);
        });
    },
    logoutUser() {
      signOut(auth)
        .then(() => {
          const cart = cartStore();
          cart.clearCart();
        })
        .catch((error) => {
          console.log("Error logging out", error);
        });
    },
  },
});
