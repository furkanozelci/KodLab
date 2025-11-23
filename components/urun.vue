<template>
  <div class="max-w-6xl mx-auto p-6">

    <h1 class="text-2xl font-bold mb-4">Ürünler</h1>

    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in products"
        :key="item.id"
        @click="selectProduct(item)"
        class="border p-4 rounded cursor-pointer hover:shadow-lg transition"
      >
        <img :src="item.images[0]" alt="" class="w-full h-40 object-cover mb-2 rounded">
        <h2 class="font-bold">{{ item.title }}</h2>
        <p>₺{{ item.price }}</p>
      </div>
    </div>

    
    <div v-if="selectedProduct" class="mt-8">
      <ProductDetail :product="selectedProduct" />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductDetail from './ProductDetail.vue';

const products = ref([
  {
    id: 1,
    title: 'EXCEL ile TAM GÜÇ',
    author: 'Furkan Özelçi',
    isbn: '9786256677265',
    size: '15 X 21',
    pages: 500,
    year: 2025,
    color: '1.Hamur SB',
    language: 'TR',
    price: 600,
    oldPrice: null,
    images: [
      'https://www.kodlab.com/2512-medium_default/excel-ile-tam-guec.jpg',
      'https://www.kodlab.com/2510-large_default/excel-ile-tam-guec.jpg',
      'https://www.kodlab.com/2511-medium_default/excel-ile-tam-guec.jpg'
    ]
  },
  {
    id: 2,
    title: 'Python Eğitim Kitabı',
    author: 'Fırat Özgül',
    isbn: '9781234567890',
    size: '16 X 24',
    pages: 350,
    year: 2024,
    color: 'Beyaz',
    language: 'TR',
    price: 450,
    oldPrice: 500,
    images: [
      'https://www.kodlab.com/415-large_default/python.jpg',
      'https://www.kodlab.com/1342-medium_default/python.jpg'
    ]
  },
  {
    id: 3,
    title: 'Yapay Zeka Tabanlı Siber Güvenliğe Giriş',
    author: 'Dr. Mohammed Ridha FAISAL',
    isbn: '9789876543210',
    size: '17 X 24',
    pages: 420,
    year: 2025,
    color: 'Beyaz',
    language: 'TR',
    price: 550,
    oldPrice: null,
    images: [
      'https://www.kodlab.com/2468-large_default/yapay-zeka-tabanli-siber-guevenlige-giris.jpg',
      'https://www.kodlab.com/2467-medium_default/yapay-zeka-tabanli-siber-guevenlige-giris.jpg'
    ]
  },
  {
    id: 4,
    title: 'Yapay Zeka İle Pratik Uygulamalar',
    author: 'Anonim',
    isbn: '9781122334455',
    size: '16 X 23',
    pages: 380,
    year: 2023,
    color: 'Beyaz',
    language: 'TR',
    price: 500,
    oldPrice: 550,
    images: [
      'https://www.kodlab.com/2444-large_default/yapay-zeka-ile-pratik-uygulamalar.jpg',
      'https://www.kodlab.com/2443-medium_default/yapay-zeka-ile-pratik-uygulamalar.jpg'
    ]
  },
  {
    id: 5,
    title: 'Yeni Başlayanlar İçin Java',
    author: 'Mehmet Kirazlı',
    isbn: '9785544332211',
    size: '16 X 24',
    pages: 450,
    year: 2024,
    color: 'Beyaz',
    language: 'TR',
    price: 600,
    oldPrice: 650,
    images: [
      'https://www.kodlab.com/2289-medium_default/yeni-baslayanlar-icin-java.jpg',
      'https://www.kodlab.com/2290-medium_default/yeni-baslayanlar-icin-java.jpg'
    ]
  }
]);

const selectedProduct = ref(products.value[0]);

const selectProduct = (item) => {
  selectedProduct.value = item;
};
</script>
