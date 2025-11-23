<template>
  <div class="max-w-md mx-auto p-6 bg-white shadow rounded">
    <h1 class="text-2xl font-bold mb-4">Hesabınız</h1>
    <ul class="divide-y divide-gray-200">
      <li v-for="(item, index) in menuItems" :key="index">
        <button
          @click="handleClick(item)"
          class="w-full text-left flex items-center gap-2 p-3 hover:bg-gray-100 rounded"
        >
          <span v-html="item.icon"></span>
          <span>{{ item.label }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const menuItems = [
  { label: 'Bilgilerim',  },
  { label: 'İlk adresi ekle',  },
  { label: 'Siparişlerim',  },
  { label: 'Kredi fişleri',  },
  { label: 'Kupon',  },
  { label: 'Mesajlarım', },
  { label: 'Beğendiklerim',  },
  { label: 'Oturumu Kapat',  },
];

const handleClick = (item) => {
  alert(`"${item.label}" `);
};
</script>

<style scoped>
button {
  transition: background-color 0.2s;
}
</style>
