import { defineStore } from "pinia";

export const cartStore = defineStore("cartStore", {
  state: () => {
    return {
      shoppingCart: [],
    };
  },
  actions: {
    displayObjectsFromCart() {
      const cartFromLocalStorage = localStorage.getItem("shoppingCart");
      if (cartFromLocalStorage) {
        this.shoppingCart = JSON.parse(cartFromLocalStorage);
      }
      return this.shoppingCart;
    },
    addObjectToCart(objectToAdd) {
      const index = this.shoppingCart.findIndex(
        (item) => item.id === objectToAdd.id
      );
      if (index !== -1) {
        this.shoppingCart[index].stock += objectToAdd.stock;
      } else {
        this.shoppingCart.push(objectToAdd);
      }
      localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart));
    },
    deleteObjectFromCart(objectIdToDelete, quantity = null) {
      const index = this.shoppingCart.findIndex(
        (item) => item.id === objectIdToDelete
      );
      if (index !== -1) {
        if (quantity === null || this.shoppingCart[index].stock <= quantity) {
          this.shoppingCart.splice(index, 1);
        } else {
          this.shoppingCart[index].stock -= quantity;
        }
        localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart));
      }
    },
    clearCart() {
      this.shoppingCart = [];
      localStorage.removeItem("shoppingCart");
    },
  },
});
