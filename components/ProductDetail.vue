<template>
  <div class="max-w-6xl mx-auto p-6 flex flex-col lg:flex-row gap-8" v-if="product">

    
    <div class="flex flex-col gap-4">
      <img
        v-for="(img, index) in product.images"
        :key="index"
        :src="img"
        alt="Ürün Görseli"
        class="w-24 h-24 object-cover border rounded cursor-pointer hover:scale-105 transition-transform"
        @click="selectedImage = img"
      />
    </div>

    
    <div class="flex-1">
      <img
        :src="selectedImage"
        alt="Seçilen Ürün"
        class="w-full h-auto object-contain rounded shadow"
      />
    </div>

    
    <div class="flex-1 flex flex-col gap-4">
      <h1 class="text-3xl font-bold">{{ product.title }}</h1>

      <table class="w-full text-sm text-gray-700 border-collapse">
        <tbody>
          <tr><td class="py-1 font-medium">Yazar-Adı</td><td class="py-1">{{ product.author }}</td></tr>
          <tr><td class="py-1 font-medium">ISBN</td><td class="py-1">{{ product.isbn }}</td></tr>
          <tr><td class="py-1 font-medium">Ebat</td><td class="py-1">{{ product.size }}</td></tr>
          <tr><td class="py-1 font-medium">Sayfa-Sayısı</td><td class="py-1">{{ product.pages }}</td></tr>
          <tr><td class="py-1 font-medium">Basım-Yılı</td><td class="py-1">{{ product.year }}</td></tr>
          <tr><td class="py-1 font-medium">Renk</td><td class="py-1">{{ product.color }}</td></tr>
          <tr><td class="py-1 font-medium">Baskı-Dili</td><td class="py-1">{{ product.language }}</td></tr>
        </tbody>
      </table>

      <div class="mt-2">
        <span class="text-2xl font-bold text-blue-600">₺{{ product.price.toFixed(2) }}</span>
        <span class="text-gray-400 text-sm ml-2 line-through" v-if="product.oldPrice">₺{{ product.oldPrice.toFixed(2) }}</span>
      </div>

      <div class="mt-4 flex items-center gap-4">
        <input type="number" v-model.number="quantity" min="1" class="w-20 border border-gray-300 rounded px-2 py-1 text-center" />
        <button @click="addToCart" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-medium">
          Sepete Ekle
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  product: { type: Object, required: true }
});

const selectedImage = ref(props.product.images?.[1] || props.product.images?.[0] || '');
const quantity = ref(1);

watch(() => props.product, (newVal) => {
  selectedImage.value = newVal.images?.[1] || newVal.images?.[0] || '';
});

const addToCart = () => {
  alert(`${quantity.value} adet "${props.product.title}" sepete eklendi!`);
};
</script>

<style scoped>
table td {
  padding: 4px 8px;
}
img {
  transition: transform 0.3s;
}
img:hover {
  transform: scale(1.05);
}
</style>
