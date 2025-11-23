<template>
  <footer class="bg-blue-200 text-gray-700">
    <!-- Üst Bilgi -->
    <div class="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
      <div>
        <p class="text-4xl font-bold">212</p>
        <p class="text-sm font-medium">UZMAN YAZAR</p>
      </div>
      <div>
        <p class="text-4xl font-bold">5453</p>
        <p class="text-sm font-medium">ÜCRETSİZ EĞİTİM VİDEOSU</p>
      </div>
      <div>
        <p class="text-4xl font-bold">47891</p>
        <p class="text-sm font-medium">DAKİKA VİDEO</p>
      </div>
    </div>

   
    <div class="bg-blue-300 py-6 text-center">
      <p class="text-xl font-semibold text-blue-800">OKU, İZLE, DİNLE, ÖĞREN</p>
      <img
        src="/images/sıfırbirlogo.jpg"
        alt="Sıfır Bir Logo"
        class="mx-auto mt-4 w-32"
      />
    </div>

    
    <div class="bg-blue-200 py-10">
      <div class="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6 text-sm">
        <!-- Alışveriş -->
        <div>
          <h3 class="font-semibold mb-2">Alışveriş</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">Teslimat</a></li>
            <li><a href="#" class="hover:underline">Gizlilik ve Güvenlik</a></li>
            <li><a href="#" class="hover:underline">Kullanım Koşulları</a></li>
            <li><a href="#" class="hover:underline">Güvenli Ödeme</a></li>
          </ul>
        </div>

        
        <div>
          <h3 class="font-semibold mb-2">Hesabım</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">Hesabım</a></li>
            <li><a href="#" class="hover:underline">Sipariş Geçmişim</a></li>
            <li><a href="#" class="hover:underline">Adreslerim</a></li>
          </ul>
        </div>

        
        <div>
          <h3 class="font-semibold mb-2">Bilgi</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">Hakkımızda</a></li>
            <li><a href="#" class="hover:underline">İletişim</a></li>
          </ul>
        </div>

        
        <div>
          <h3 class="font-semibold mb-2">İletişim</h3>
          <p>KODLAB YAYIN</p>
          <p>Şehit Er Cihan Namlı Cad. No: 11 Şişli İSTANBUL</p>
          <p>(Perakende satışımız yoktur.)</p>
          <p>+90 (212) 514 55 66</p>
          <p><a href="mailto:bilgi@kodlab.com" class="hover:underline">bilgi@kodlab.com</a></p>
        </div>
      </div>

      
      <div class="container mx-auto flex flex-col sm:flex-row items-center justify-between mt-10">
        <!-- Sosyal Medya -->
        <div class="flex space-x-4">
          <a href="#" class="text-blue-600 hover:underline"><i class="fab fa-facebook"></i> Facebook</a>
          <a href="#" class="text-blue-400 hover:underline"><i class="fab fa-twitter"></i> Twitter</a>
          <a href="#" class="text-pink-500 hover:underline"><i class="fab fa-instagram"></i> Instagram</a>
          <a href="#" class="text-red-500 hover:underline"><i class="fab fa-youtube"></i> YouTube</a>
          <a href="#" class="text-blue-700 hover:underline"><i class="fab fa-linkedin"></i> LinkedIn</a>
        </div>

       
        <form class="mt-6 sm:mt-0 flex space-x-2">
          <input
            type="email"
            placeholder="Mail Adresiniz"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button
            type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>

</style>
