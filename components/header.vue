<template>
  <header class="bg-white shadow p-6">
    <div class="container mx-auto flex items-center justify-between">
      
      <div class="flex items-center space-x-4">
        <img src="/images/logo.jpg" alt="Logo" class="h-20 object-contain" />
      </div>

      <!-- Search Bar -->
      <div class="flex-1 mx-4 relative">
        <input
          type="text"
          placeholder="Kitap Ara..."
          class="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
      </div>

      
      <div class="flex items-center space-x-6">
        <NuxtLink to="/components/login"> 
          <button class="text-gray-600 hover:text-black">
            <font-awesome-icon icon="fa-solid fa-user" class="h-6 w-6" />
          </button> 
        </NuxtLink>
        
        <NuxtLink to="/components/sepet">
        <button class="text-gray-600 hover:text-black">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" class="h-6 w-6" />
        </button>
      </NuxtLink>
      </div>
    </div>

    
    <nav class="bg-white border-b border-gray-300 shadow-sm">
      <ul class="flex items-center justify-center space-x-6 py-3">
        <!-- Ana Sayfa Linki -->
        <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <font-awesome-icon :icon="['fas', 'home']" class="text-lg" />
          </NuxtLink>
        </li>

       
<li class="relative group">
  <div class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded bg-blue-100">
    <font-awesome-icon :icon="['fas', 'bars']" class="text-lg" />
    <span class="text-sm font-semibold">KATEGORİLER</span>
  </div>

  <div class="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg border-t border-gray-300 p-6 w-[80vw] max-w-screen-xl mx-auto">
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
      <!-- Sol Sütun -->
      <div>
        <h3 class="font-bold mb-3">İNDİRİMLİ SUPER SETLER</h3>
        <ul class="space-y-2">
          <li class="cursor-pointer hover:underline">ALGORİTMA</li>
          <li class="cursor-pointer hover:underline">ASP.NET</li>
          <li class="cursor-pointer hover:underline">C#</li>
          <li class="cursor-pointer hover:underline">C/C++</li>
          <li class="cursor-pointer hover:underline">JAVA</li>
          <li class="cursor-pointer hover:underline">PYTHON</li>
          <li class="cursor-pointer hover:underline">PHP</li>
          <li class="cursor-pointer hover:underline">SAP</li>
          <li class="cursor-pointer hover:underline">DİĞER</li>
        </ul>
      </div>

      
      <div>
        <h3 class="font-bold mb-3">Oyun Programlama</h3>
        <ul class="space-y-2">
          <li class="cursor-pointer hover:underline">MOBİL OYUN</li>
          <li class="cursor-pointer hover:underline">PC OYUN</li>
        </ul>
        <h3 class="font-bold mt-6 mb-3">Network</h3>
        <ul class="space-y-2">
          <li class="cursor-pointer hover:underline">WINDOWS SERVER</li>
          <li class="cursor-pointer hover:underline">LİNÜX SERVER</li>
          <li class="cursor-pointer hover:underline">NETWORK</li>
          <li class="cursor-pointer hover:underline">BULUT</li>
        </ul>
      </div>

      
      <div>
        <h3 class="font-bold mb-3">Web İnternet</h3>
        <ul class="space-y-2">
          <li class="cursor-pointer hover:underline">WEB TASARIMI</li>
          <li class="cursor-pointer hover:underline">WEB PROGRAMLAMA</li>
        </ul>
        <h3 class="font-bold mt-6 mb-3">Mobil Programlama</h3>
        <ul class="space-y-2">
          <li class="cursor-pointer hover:underline">ANDROID</li>
          <li class="cursor-pointer hover:underline">WINDOWS PHONE</li>
          <li class="cursor-pointer hover:underline">iOS PROGRAMLAMA</li>
        </ul>
      </div>
    </div>
  </div>
</li>


        
        <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
          <NuxtLink to="/components/videolar"> 
            <font-awesome-icon :icon="['fas', 'desktop']" class="text-lg" />
            <span class="text-sm font-semibold">VİDEOLAR</span> 
          </NuxtLink>
        </li>

        <!-- Dosya Merkezi -->
        <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
          <font-awesome-icon :icon="['fas', 'cloud-download-alt']" class="text-lg" />
          <span class="text-sm font-semibold">DOSYA MERKEZİ</span>
        </li>

        
        <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
          <NuxtLink to="/components/Yazarlar"> 
          <font-awesome-icon :icon="['fas', 'users']" class="text-lg" />
          <span class="text-sm font-semibold">YAZARLARIMIZ</span>
        </NuxtLink>
        </li>

        <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
          <font-awesome-icon :icon="['fas', 'trophy']" class="text-lg" />
          <span class="text-sm font-semibold">AYIN KİTAPLARI</span>
        </li>

       
        <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
          <font-awesome-icon :icon="['fas', 'phone-alt']" class="text-lg" />
          <span class="text-sm font-semibold">İLETİŞİM</span>
        </li>

        
        <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
          <font-awesome-icon :icon="['fas', 'search']" class="text-lg" />
          <span class="text-sm font-semibold">HAKKIMIZDA</span>
        </li>

       
        <li class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">
          <font-awesome-icon :icon="['fas', 'sign-in-alt']" class="text-lg" />
          <span class="text-sm font-semibold">YAZAR GİRİŞ</span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script> 

<style scoped>

.group:hover .group-hover\\:flex {
  display: block; 
}

.group-hover\\:flex {
  display: none; 
  position: absolute;
  left: 0;
  top: 100%;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Hafif gölge */
  border: 1px solid #e5e7eb;
  z-index: 50; 
  padding: 1rem;
  min-width: 700px;
  max-width: 90vw; 
  overflow: visible; 
}

.group-hover\\:flex div {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.group-hover\\:flex h3 {
  font-weight: 600;
  margin-bottom: 1rem;
}

.group-hover\\:flex ul li {
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s;
}

.group-hover\\:flex ul li:hover {
  background-color: #f1f1f1; 
}


.group-hover\\:flex ul {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}


@media (max-width: 1920px) {
  .group-hover\\:flex {
    min-width: 600px;
  }
}

@media (max-width: 1200px) {
  .group-hover\\:flex {
    display: none; /* Küçük ekranlarda menüyü gizler */
  }
}


.container {
  overflow: visible;
}
</style>
