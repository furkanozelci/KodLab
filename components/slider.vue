<template>
  <div class="slider-container w-full h-[60vh] max-h-[500px] mx-auto overflow-hidden relative">
   
    <div
      class="flex transition-transform duration-500"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="min-w-full h-full flex-shrink-0"
      >
        <img
          :src="image.url"
          alt="Slide Image"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    
    <button
      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full z-10"
      @click="prevSlide"
    >
      ‹
    </button>
    <button
      class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full z-10"
      @click="nextSlide"
    >
      ›
    </button>

    
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
      <button
        v-for="(image, index) in images"
        :key="'dot-' + index"
        class="w-3 h-3 rounded-full"
        :class="currentIndex === index ? 'bg-white' : 'bg-gray-400'"
        @click="goToSlide(index)"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const images = ref([
  { url: '/images/slide1.jpg' },
  { url: '/images/slide2.jpg' },
  { url: '/images/slide3.jpg' },
]);

const currentIndex = ref(0);
const totalSlides = images.value.length;

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + totalSlides) % totalSlides;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};
</script>

<style scoped>

img {
  transition: transform 0.3s ease-in-out;
}
img:hover {
  transform: scale(1.05);
}


button.w-3.h-3 {
  transition: background-color 0.3s;
}


button {
  transition: background-color 0.3s;
}
button:hover {
  background-color: #4b5563;
}
</style>
