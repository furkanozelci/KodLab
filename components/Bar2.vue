<template>
  <div>
    <nav class="bg-white border-b border-gray-300 shadow-sm">
      <ul class="flex items-center justify-center space-x-6 py-3">
        <li
          v-for="item in menuItems"
          :key="item.label"
          :class="[
            'flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded relative',
            currentMenu === item.label ? 'active' : ''
          ]"
          @click="selectMenu(item.label)"
        >
          <i :class="item.icon" class="text-lg"></i>
          <span class="text-sm font-semibold">{{ item.label }}</span>
          <div
            v-if="currentMenu === item.label"
            class="absolute bottom-0 left-0 right-0 h-[3px] bg-red-500 rounded-t-md"
          ></div>
        </li>
      </ul>
    </nav>

    <div v-if="filteredProducts.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <div
        v-for="(product, index) in filteredProducts"
        :key="index"
        class="p-4 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
      >
        <img :src="product.image" alt="Product Image" class="w-full h-auto object-contain rounded" />
        <h2 class="mt-4 text-lg font-semibold text-gray-700 truncate">{{ product.title }}</h2>
        <p class="text-xl font-bold text-blue-600 mt-2"> ₺ {{ product.price }} </p>
        <div class="mt-4 flex items-center space-x-4">
          <input v-model="quantity" type="number" min="1" class="w-16 text-center border border-gray-300 rounded" />
          <button @click="addToCart(product)" class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>

    <div class="p-4">
      <h2 class="text-lg font-semibold">Yeni Ürün Ekle</h2>
      <form @submit.prevent="addProduct" class="grid gap-4 mt-4">
        <input v-model="newProduct.title" type="text" placeholder="Ürün Adı" class="p-2 border rounded" />
        <input v-model="newProduct.image" type="text" placeholder="Ürün Görseli URL" class="p-2 border rounded" />
        <input v-model="newProduct.price" type="text" placeholder="Ürün Fiyatı" class="p-2 border rounded" />
        <input v-model="newProduct.author" type="text" placeholder="Yazar Adı" class="p-2 border rounded" />
        <input v-model="newProduct.size" type="text" placeholder="Ebat (cm)" class="p-2 border rounded" />
        <input v-model="newProduct.pageCount" type="number" placeholder="Sayfa Sayısı" class="p-2 border rounded" />
        <input v-model="newProduct.weight" type="text" placeholder="Ağırlık (gr)" class="p-2 border rounded" />
        <select v-model="newProduct.category" class="p-2 border rounded">
          <option v-for="item in menuItems" :key="item.label" :value="item.label">
            {{ item.label }}
          </option>
        </select>
        <button type="submit" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
          Ürün Ekle
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { db } from "@/firbase/firebaseConfig.ts"; // Firebase Firestore bağlantısı
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";

const menuItems = [
  { label: "YENİ ÇIKANLAR", icon: "fas fa-phone-alt" },
  { label: "ÇOK SATANLAR", icon: "fas fa-phone-alt" },
  { label: "TEKRAR BASKILAR", icon: "fas fa-search" },
  { label: "SÜPER SETLER", icon: "fas fa-sign-in-alt" },
];

const currentMenu = ref("YENİ ÇIKANLAR");
const products = ref([]);
const newProduct = ref({
  title: "",
  image: "",
  price: "",
  author: "",
  size: "",
  pageCount: "",
  weight: "",
  category: "YENİ ÇIKANLAR",
});
const quantity = ref(1);

// Ürünleri Firestore'dan çekme
const loadProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    products.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Ürünler yüklenirken hata:", error);
  }
};

// Yeni ürün ekleme
const addProduct = async () => {
  if (
    !newProduct.value.title ||
    !newProduct.value.image ||
    !newProduct.value.price ||
    !newProduct.value.author ||
    !newProduct.value.size ||
    !newProduct.value.pageCount ||
    !newProduct.value.weight ||
    !newProduct.value.category
  ) {
    alert("Lütfen tüm alanları doldurun!");
    return;
  }

  try {
    await addDoc(collection(db, "products"), newProduct.value);
    alert("Ürün başarıyla eklendi!");
    newProduct.value = {
      title: "",
      image: "",
      price: "",
      author: "",
      size: "",
      pageCount: "",
      weight: "",
      category: "YENİ ÇIKANLAR",
    };
    loadProducts(); // Listeyi güncelle
  } catch (error) {
    console.error("Ürün eklenirken hata:", error);
    alert("Ürün eklenirken bir hata oluştu!");
  }
};

// Filtrelenmiş ürünler
const filteredProducts = computed(() => {
  return products.value.filter((product) => product.category === currentMenu.value);
});

// Menü seçimi
const selectMenu = (menu) => {
  currentMenu.value = menu;
};

// Sepete ürün ekleme
const addToCart = async (product) => {
  try {
    const cartItem = {
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: quantity.value,
      addedAt: new Date().toISOString(),
    };
    await setDoc(doc(db, "cart", product.id), cartItem);
    alert("Ürün sepete eklendi!");
  } catch (error) {
    console.error("Sepete eklerken hata oluştu:", error);
    alert("Sepete ekleme sırasında bir hata oluştu!");
  }
};

onMounted(() => {
  loadProducts();
});
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

li {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: transform 0.3s, background-color 0.3s;
}

li:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
}

.active div {
  height: 3px;
  background-color: #e3342f;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 2px 2px 0 0;
}
</style>
