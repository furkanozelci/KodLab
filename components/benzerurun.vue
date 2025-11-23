<template>
  <div class="p-6 bg-white rounded-lg shadow-md">
    <!-- Başlık -->
    <h2 class="text-xl font-bold mb-4">Bu kitabı alanlar şunları da aldı</h2>

    
    <div class="relative">
      <!-- Sol Ok -->
      <button
        @click="prevSlide"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300 z-10"
      >
        &#10094;
      </button>

      
      <div
        ref="slider"
        class="flex overflow-x-hidden scroll-smooth"
      >
        <div
          v-for="product in products"
          :key="product.name"
          class="flex-none w-60 mx-2 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-48 object-contain rounded-t"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 truncate">{{ product.name }}</h3>
            <p class="text-blue-600 font-bold mt-2">₺{{ product.price }}</p>

            <!-- Counter -->
            <div class="mt-4 flex items-center space-x-2">
              <button
                @click="decreaseQuantity(product)"
                class="w-8 h-8 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300"
              >
                -
              </button>
              <span class="text-lg font-semibold">{{ product.quantity }}</span>
              <button
                @click="increaseQuantity(product)"
                class="w-8 h-8 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <!-- Sepete Ekle -->
            <button
              @click="addToCart(product)"
              class="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>

      
      <button
        @click="nextSlide"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300 z-10"
      >
        &#10095;
      </button>
    </div>

    
    <div v-if="showToast" class="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow">
      Sepete Eklendi!
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Props ile ürünleri dışardan al
defineProps({
  products: {
    type: Array,
    default: () => [
      { name: "KOTLIN ile Pratik Uygulamalar", price: 280, image: "/images/kotlin.jpg", quantity: 1 },
      { name: "Yapay Zeka Uygulamaları", price: 300, image: "/images/yapay-zeka.jpg", quantity: 1 },
      { name: "Dijital Sanatlar", price: 500, image: "/images/dijital-sanatlar.jpg", quantity: 1 },
      { name: "Robotik Kodlama", price: 360, image: "/images/robotik-kodlama.jpg", quantity: 1 },
      { name: "Yeni Başlayanlar İçin JAVA", price: 400, image: "https://www.kodlab.com/2290-home_default/yeni-baslayanlar-icin-java.jpg", quantity: 1 },
      { name: "Her Yönüyle C Eğitim Kitabı", price: 630, image: "https://www.kodlab.com/2288-home_default/heryonuyle-c.jpg", quantity: 1 },
      { name: "Dijital Yaşam Rehberi", price: 99, image: "https://www.kodlab.com/2505-home_default/dijital-yasam-rehberi.jpg", quantity: 1 },
      { name: "Dijital Dünyada Güven Adımlar", price: 299, image: "https://www.kodlab.com/2451-home_default/dijital-duenyada-guevenli-adimlar.jpg", quantity: 1 },
      { name: "Python İle Sıfırdan Uygulamalar ", price: 250, image: "/images/python.jpg", quantity: 1 },
      ],
  },
});


const slider = ref(null);
const scrollAmount = 300; // Kaydırma miktarı px


const nextSlide = () => {
  slider.value.scrollLeft += scrollAmount;
};
const prevSlide = () => {
  slider.value.scrollLeft -= scrollAmount;
};


const increaseQuantity = (product) => { product.quantity += 1; };
const decreaseQuantity = (product) => { if (product.quantity > 1) product.quantity -= 1; };


const showToast = ref(false);
let toastTimeout;

const addToCart = (product) => {
  showToast.value = true;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => { showToast.value = false; }, 2000);
};
</script>

<style scoped>
img {
  transition: transform 0.3s ease-in-out;
}
img:hover {
  transform: scale(1.05);
}
button:hover {
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>
