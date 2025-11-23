<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Hesabınıza Giriş Yapın</h2>
      <form @submit.prevent="loginUser">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="E-posta adresinizi girin"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Şifrenizi girin"
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 px-4 bg-orange-500 text-white rounded-lg"
        >
          Giriş Yap
        </button>
      </form>
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-600">Hesabınız yok mu? 
          <router-link to="/components/uyeolustur" class="text-blue-500 hover:underline">Bir Hesap Oluşturun</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firbase/firebaseConfig.ts"; // Firebase Firestore bağlantısı

const email = ref("");
const password = ref("");
const router = useRouter();

const loginUser = async () => {
  try {
    const docRef = doc(db, "uyeler", "kullanicilar");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const users = docSnap.data().uyeler || [];
      const user = users.find(
        (u) => u.email === email.value && u.parola === password.value
      );

      if (user) {
        alert("Giriş başarılı!");
        router.push("/");
      } else {
        alert("Geçersiz e-posta veya şifre!");
      }
    } else {
      alert("Kullanıcılar bulunamadı!");
    }
  } catch (error) {
    console.error("Giriş sırasında hata:", error);
    alert("Bir hata oluştu!");
  }
};
</script>
