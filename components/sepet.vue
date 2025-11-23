<template>
  <div class="flex flex-col lg:flex-row gap-6">

    <!-- Sol Bölüm: Ürünler -->
    <div class="flex-1">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">Alışveriş Sepeti</h1>

      <div v-if="cartItems.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
        <div
          v-for="(item, index) in cartItems"
          :key="item.id"
          class="p-4 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
        >
          <img :src="item.image" alt="Product Image" class="w-full h-auto object-contain rounded" />
          <h2 class="mt-4 text-lg font-semibold text-gray-700 truncate">{{ item.title }}</h2>
          <p class="text-sm font-medium text-gray-600">Yazar: {{ item.author }}</p>
          <p class="text-sm font-medium text-gray-600">Ebat: {{ item.size }}</p>
          <p class="text-sm font-medium text-gray-600">Sayfa Sayısı: {{ item.pageCount }}</p>
          <p class="text-sm font-medium text-gray-600">Ağırlık: {{ item.weight }}</p>
          <p class="text-xl font-bold text-blue-600 mt-2">₺{{ item.price }}</p>

          <div class="mt-4 flex items-center space-x-4">
            <input v-model.number="item.quantity" type="number" min="1" class="w-16 text-center border border-gray-300 rounded" />
            <button @click="updateQuantity(item)" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
              Güncelle
            </button>
            <button @click="removeFromCart(item.id)" class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
              Sil
            </button>
          </div>
        </div>
      </div>

      <div v-else class="text-center text-gray-500 text-lg font-semibold py-8">
        Sepetinizde Kitap yok. Ürün eklemek için alışverişe başlayın.
      </div>
    </div>

    
    <div
      v-if="cartItems.length"
      class="w-full lg:w-80 bg-white p-6 border border-gray-300 rounded-xl shadow-md h-fit sticky top-6"
    >
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Sipariş Özeti</h2>

      <div class="flex justify-between text-lg font-medium mb-4">
        <span>Toplam Fiyat:</span>
        <span class="text-blue-600 font-bold">₺{{ totalPrice }}</span>
      </div>

      <button
        @click="checkout"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded"
      >
        Satın Al
      </button>
    </div>

  </div>
</template>


<script setup>
import { ref, onMounted, computed } from "vue";
import { db } from "@/firbase/firebaseConfig.ts"; // Firebase Firestore bağlantısı
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

const cartItems = ref([]);

// Sepetteki ürünleri Firestore'dan çekme
const loadCartItems = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "cart"));
    cartItems.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      title: doc.data().title || "Ürün Başlığı Yok",
      author: doc.data().author || "Belirtilmemiş",
      size: doc.data().size || "Bilinmiyor",
      pageCount: doc.data().pageCount || "Bilinmiyor",
      weight: doc.data().weight || "Bilinmiyor",
      price: doc.data().price || 0,
      image: doc.data().image || "https://via.placeholder.com/150",
      quantity: doc.data().quantity || 1,
    }));
  } catch (error) {
    console.error("Sepet ürünleri yüklenirken hata:", error);
  }
};


const removeFromCart = async (id) => {
  try {
    await deleteDoc(doc(db, "cart", id));
    cartItems.value = cartItems.value.filter((item) => item.id !== id);
    alert("Ürün sepetten silindi!");
  } catch (error) {
    console.error("Ürün silinirken hata oluştu:", error);
    alert("Ürün silinirken bir hata oluştu!");
  }
};


const updateQuantity = async (item) => {
  try {
    await updateDoc(doc(db, "cart", item.id), { quantity: item.quantity });
    alert("Ürün miktarı güncellendi!");
  } catch (error) {
    console.error("Ürün miktarı güncellenirken hata oluştu:", error);
    alert("Ürün miktarı güncellenemedi!");
  }
};


const totalPrice = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
});


const checkout = async () => {
  try {
    // Firestore'daki tüm ürünleri sil
    for (const item of cartItems.value) {
      await deleteDoc(doc(db, "cart", item.id));
    }
    cartItems.value = [];
    alert("Satın alma işlemi başarıyla tamamlandı!");
  } catch (error) {
    console.error("Satın alma işlemi sırasında hata oluştu:", error);
    alert("Satın alma işlemi sırasında bir hata oluştu!");
  }
};

onMounted(() => {
  loadCartItems();
});
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 1rem;
}
</style>
