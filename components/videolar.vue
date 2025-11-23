<template>
  <div class="p-6">
    <!-- Logo -->
    <div class="flex justify-center">
      <img src="/images/tvlogo.png" alt="Logo" class="w-24 h-auto mb-4" />
    </div>

    <!-- Search Bar -->
    <div class="flex justify-center mb-6">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Video Ara"
        class="border rounded-lg p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="video in filteredVideos"
        :key="video.id"
        class="border rounded-lg overflow-hidden shadow-md"
      >
        <img :src="video.image" alt="Video Image" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-lg font-semibold">{{ video.title }}</h3>
          <p class="text-sm text-gray-500">Yayıncı: {{ video.publisher }}</p>
          <p class="text-sm text-gray-500 mt-2">Süre: {{ video.duration }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 //video die değişkenin içinde video nesneleri tanımladım
  data() {
    return {
      searchTerm: "",
      videos: [
        {
          id: 1,
          title: "Sıfırdan Uygulamalarla Python Eğitim Kitabı",
          publisher: "KODLAB",
          duration: "04:34:00",
          image: "/images/tvlogo.png",
        },
        {
          id: 2,
          title: "Arduino Projeleri",
          publisher: "KODLAB",
          duration: "02:44:00",
          image: "/images/tvlogo.png",
        },
        {
          id: 3,
          title: "App Inventor ile Robotik Kodlama",
          publisher: "KODLAB",
          duration: "02:50:00",
          image: "/images/tvlogo.png",
        },
        {
          id: 4,
          title: "Excel VBA Programlama",
          publisher: "KODLAB",
          duration: "03:14:07",
          image: "/images/tvlogo.png",
        },
      ],
    };
  },
  //computed ozellği serchterm e girilen başlıkla eşleşen vidoları dondurur
  computed: {
    filteredVideos() {
      return this.videos.filter((video) =>
        video.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
};
</script>

<style>

</style>
