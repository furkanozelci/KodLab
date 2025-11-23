// src/stores/cartStore.ts
import { defineStore } from "pinia";

interface CartItem {
  product: any; // TODO: Replace with proper product interface
  quantity: number;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [] as CartItem[], // Sepetteki ürünler
  }),
  getters: {
    totalQuantity: (state) => state.cart.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) =>
      state.cart
        .reduce((sum, item) => sum + item.quantity * parseFloat(item.product.price), 0)
        .toFixed(2),
  },
  actions: {
    addToCart(product: any, quantity = 1) {
      const existingItem = this.cart.find((item) => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.cart.push({ product, quantity });
      }
    },
    removeFromCart(productId: string) {
      this.cart = this.cart.filter((item) => item.product.id !== productId);
    },
    updateQuantity(productId: string, quantity: number) {
      const item = this.cart.find((item) => item.product.id === productId);
      if (item) item.quantity = quantity;
    },
    clearCart() {
      this.cart = [];
    },
  },
});

// TODO: Define a proper interface for the product object used in the cart