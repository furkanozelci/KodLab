<template>
    <div class="container">
            <Header />
    
    <!-- Main Content -->
    <main class="main-content">
      <!-- Ürünler veya ana içerik -->
      <section class="product-list">
        <Sepet />
      </section>
     
    </main>
       <!-- Footer -->
       <Footer />
</div>
</template>

<script>
import Header from "@/components/header.vue";
import Sepet from "@/components/sepet.vue";



export default {
  components: {
    Header,
    Sepet,
  },
};

</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* Tüm içeriği yatayda ortalar */
  align-items: center; /* Tüm içeriği dikeyde ortalar */
  flex-direction: column; /* Dikine hizalama */
  box-sizing: border-box;
}
* {
  box-sizing: border-box; /* İçerik taşmasını engeller */
}
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%; /* Genişlik ekran boyutuna uygun */
  max-width: 1500px; /* İçeriği belli bir genişlikle sınırlandır */
  margin: 0 auto; /* Ortalamayı sağlar */
  padding: 0;
}


/* Main Content */
.main-content {
  flex: 1; /* Footer ve header dışında kalan boşluğu doldurur */
  padding: 20px;
  width: 100%; /* Tam genişlikte olmasını sağlar */
}
</style>