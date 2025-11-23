<template>
  <div class="flex">
    <!-- Sol Menü -->
    <aside class="w-1/4 p-4 bg-gray-100">
      
      <ul class="space-y-2">
        <li v-for="category in programmingCategories" :key="category">
          <NuxtLink
            :to="'/category/' + category.toLowerCase()"
            class="block text-gray-700 hover:text-blue-600"
          >
            {{ category }}
          </NuxtLink>
        </li>
      </ul>

      
      <h2 class="text-lg font-semibold mt-6 mb-4">Kategoriler</h2>
      <div
        v-for="category in dynamicFilterCategories"
        :key="category.name"
        class="flex items-center mb-2"
      >
        <input
          type="checkbox"
          :id="category.name"
          class="mr-2"
          v-model="category.checked"
          @change="filterProducts"
        />
        <label :for="category.name" class="text-gray-700">{{ category.name }} ({{ category.count }})</label>
      </div>
    </aside>

    
    <section class="w-3/4 p-4">
      <h2 class="text-xl font-bold mb-4">Programlama</h2>

      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="product in paginatedProducts"
          :key="product.name"
          class="border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
        >
          
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-48 object-contain rounded-t"
          />

          
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 truncate">{{ product.name }}</h3>
            <p class="text-xl font-bold text-blue-600 mt-2">₺{{ product.price }}</p>

            <!-- Counter ve Sepete Ekle Butonu -->
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

            
            <button
              @click="addToCart(product)"
              class="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>

      
      <div class="mt-6 flex justify-center">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          class="mx-2 px-4 py-2 border rounded text-gray-700 hover:bg-gray-200"
          :class="currentPage === page ? 'bg-gray-300 font-bold' : ''"
        >
          {{ page }}
        </button>
      </div>
    </section>

   
    <div v-if="showToast" class="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow">
      Sepete Eklendi!
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";



const products = ref([
  {
    name: "KOTLIN ile PRATİK UYGULAMALAR",
    price: 250,
    category: "JAVA",
    image: "/images/kotlin.jpg",
    quantity: 1,
  },
  {
    name: "YAPAY ZEKA UYGULAMALARI",
    price: 250,
    category: "ALGORİTMA",
    image: "/images/yapay-zeka.jpg",
    quantity: 1,
  },
  {
    name: "DİJİTAL SANATLAR",
    price: 250,
    category: "DİĞER",
    image: "/images/dijital-sanatlar.jpg",
    quantity: 1,
  },
  {
    name: "ROBOTİK KODLAMA",
    price: 250,
    category: "ALGORİTMA",
    image: "/images/robotik-kodlama.jpg",
    quantity: 1,
  },
  {
    name: "PYTHON ile SIFIRDAN UYGULAMALAR",
    price: 250,
    category: "PYTHON",
    image: "/images/python.jpg",
    quantity: 1,
  },
]);


const dynamicFilterCategories = computed(() => {
  const counts = {};
  products.value.forEach((product) => {
    counts[product.category] = (counts[product.category] || 0) + 1;
  });

  return Object.keys(counts).map((category) => ({
    name: category,
    count: counts[category],
    checked: false,
  }));
});


const filteredProducts = ref([...products.value]);


const filterProducts = () => {
  const selectedCategories = dynamicFilterCategories.value
    .filter((category) => category.checked)
    .map((category) => category.name);

  if (selectedCategories.length === 0) {
    // Eğer hiçbir kategori seçilmediyse, tüm ürünleri göster
    filteredProducts.value = [...products.value];
  } else {
    // Seçilen kategorilere göre ürünleri filtrele
    filteredProducts.value = products.value.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }
};


const itemsPerPage = 6;
const currentPage = ref(1);

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredProducts.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage);
});


const showToast = ref(false);
let toastTimeout;

const addToCart = (product) => {
  showToast.value = true;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    showToast.value = false;
  }, 2000);
};


const increaseQuantity = (product) => {
  product.quantity += 1;
};

const decreaseQuantity = (product) => {
  if (product.quantity > 1) {
    product.quantity -= 1;
  }
};
</script>

<style scoped>

a:hover {
  text-decoration: underline;
}


img {
  transition: transform 0.3s ease-in-out;
}
img:hover {
  transform: scale(1.05);
}

button:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
