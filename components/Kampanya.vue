<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">

    <div
      v-for="urun in urunler"
      :key="urun.id"
      class="relative p-4 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
    >
      
      <span class="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
        -%20 
      </span>
      <span class="absolute top-10 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
        PAKET
      </span>

      
      <img
        :src="urun.image"
        :alt="urun.title"
        class="w-full h-auto object-contain rounded"
      />

      
      <h2 class="mt-4 text-lg font-semibold text-gray-700 truncate">
        {{ urun.title }}
      </h2>

      
      <div class="mt-2 flex flex-col gap-1">
        <span class="text-gray-400 line-through text-sm">₺{{ urun.orijinalFiyat.toFixed(2) }}</span>
        <span class="text-xl font-bold text-blue-600">₺{{ urun.indirimliFiyat.toFixed(2) }}</span>
      </div>

     
      <div class="mt-4 flex items-center space-x-4">
        <input
          v-model.number="urun.miktar"
          type="number"
          min="1"
          class="w-16 text-center border border-gray-300 rounded"
        />

        <button
          @click="addToCart(urun)"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex items-center"
        >
          Sepete Ekle
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";


const urunler = ref([
  { id: 1, title: "Bilgisayar Öğrenim Seti", orijinalFiyat: 1550.50, image: "https://www.kodlab.com/2472-home_default/bilgisayar-ogreniyorum-seti.jpg", miktar: 1 },
  { id: 2, title: "Elektronik Eğitim Seti", orijinalFiyat: 1250.00, image: "https://www.kodlab.com/2345-home_default/elektronik-egitim-seti.jpg", miktar: 1 },
  { id: 3, title: "Programaya Giriş Seti", orijinalFiyat: 1325.50, image: "https://www.kodlab.com/2101-home_default/programlamaya-giris-seti-2.jpg", miktar: 1 },
  { id: 4, title: "Global Hacking ve Güvenlik Seti", orijinalFiyat: 1150.50, image: "https://www.kodlab.com/2099-home_default/global-hacking-ve-guvenlik-seti.jpg", miktar: 1 },
  { id: 5, title: "PHP Tabanlı Web Tasarım Seti", orijinalFiyat: 1100.50, image: "https://www.kodlab.com/2011-home_default/php-tabanli-web-tasarim-seti.jpg", miktar: 1 },
  { id: 6, title: "Linux Eğitim Seti", orijinalFiyat: 1300.50, image: "https://www.kodlab.com/136-home_default/linux-egitim-seti.jpg", miktar: 1 },
]);


urunler.value.forEach(u => {
  u.indirimliFiyat = u.orijinalFiyat * 0.8;
});


const addToCart = (urun) => {
  alert(`${urun.miktar} adet "${urun.title}" sepete eklendi!`);
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


h2 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


@media (max-width: 640px) {
  .absolute {
    top: 4px;
    right: 4px;
  }
}
</style>
