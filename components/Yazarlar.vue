<template>
    <div class="container mx-auto px-4">
      <h1 class="text-2xl font-bold text-center mb-8">Yazarlar</h1>
      <div class="flex justify-center mb-4">
        <input
          v-model="searchQuery"
          @input="updateSearch"
          type="text"
          placeholder="Yazar Ara"
          class="border border-gray-300 p-2 rounded w-1/2"
        />
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="author in filteredAuthors"
          :key="author.id"
          class="text-center"
        >
          <img
            :src="author.photo"
            :alt="author.name"
            class="w-24 h-24 mx-auto rounded-full border border-gray-300"
          />
          <p class="mt-2 font-semibold text-gray-700">{{ author.name }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed, ref } from "vue";
  import { useAuthorStore } from "@/stores/yazarlar";
  
  const authorStore = useAuthorStore();
  const searchQuery = ref<string>("");
  
  const filteredAuthors = computed(() => authorStore.filteredAuthors);
  
  const updateSearch = () => {
    authorStore.setSearchQuery(searchQuery.value);
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  
  



  