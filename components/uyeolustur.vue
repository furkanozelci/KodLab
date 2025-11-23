<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-xl p-8 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">Üye Oluştur</h1>

      <form @submit.prevent="onSubmit" class="space-y-4">

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Cinsiyet</label>
          <div class="flex items-center gap-6">
            <label class="flex items-center gap-2">
              <input type="radio" value="Erkek" v-model="newUser.cinsiyet" class="w-4 h-4" />
              Erkek
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" value="Kadın" v-model="newUser.cinsiyet" class="w-4 h-4" />
              Kadın
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" value="Bayi" v-model="newUser.cinsiyet" class="w-4 h-4" />
              Bayi
            </label>
          </div>
        </div>

        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">İsim</label>
          <input
            type="text"
            v-model="newUser.isim"
            placeholder="İsim"
            class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Soyisim</label>
          <input
            type="text"
            v-model="newUser.soyisim"
            placeholder="Soyisim"
            class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Şirket <span class="text-gray-400">(isteğe bağlı)</span></label>
          <input
            type="text"
            v-model="newUser.sirket"
            placeholder="Şirket (isteğe bağlı)"
            class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">E-Posta</label>
          <input
            type="email"
            v-model="newUser.email"
            placeholder="E-Posta"
            class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Parola</label>
          <input
            type="password"
            v-model="newUser.parola"
            placeholder="Parola"
            class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        <div class="flex items-start gap-2">
          <input
            type="checkbox"
            v-model="newUser.veriGizliligi"
            class="w-4 h-4 mt-1"
          />
          <label class="text-sm text-gray-700">
            Müşteri veri gizliliği  
            <br />
            <span class="text-gray-400 text-xs">
              Sağladığınız kişisel veriler sorguları cevaplamak, siparişleri işlemek veya bazı bilgilere erişim için kullanılmaktadır. "Hesabım" sayfasından tüm kişisel verilerinizi düzenleme veya tamamen silme yetkisine sahipsiniz.
            </span>
          </label>
        </div>

        
        <div class="flex items-start gap-2">
          <input
            type="checkbox"
            v-model="newUser.haberBulteni"
            class="w-4 h-4 mt-1"
          />
          <label class="text-sm text-gray-700">
            Haber bültenimize üye olun  
            <br />
            <span class="text-gray-400 text-xs">
              Yeni çıkan kitaplarımızdan haberdar olun.
            </span>
          </label>
        </div>

        
        <button
          type="submit"
          class="w-full py-2 px-4 bg-orange-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Kayıt Olun
        </button>
      </form>
    </div>

    
    <div class="w-full max-w-3xl mt-8">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Kullanıcılar</h2>
      <ul class="space-y-4">
        <li
          v-for="user in users"
          :key="user.id"
          class="p-4 bg-white shadow-md rounded-lg flex justify-between items-center"
        >
          <div>
            <p><strong>Cinsiyet:</strong> {{ user.cinsiyet }}</p>
            <p><strong>İsim:</strong> {{ user.isim }}</p>
            <p><strong>Soyisim:</strong> {{ user.soyisim }}</p>
            <p v-if="user.sirket"><strong>Şirket:</strong> {{ user.sirket }}</p>
            <p><strong>E-Posta:</strong> {{ user.email }}</p>
            <p v-if="user.haberBulteni">Haber Bülteni: Evet</p>
          </div>

          <button
            @click="deleteUser(user.email)"
            class="py-2 px-4 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Sil
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firbase/firebaseConfig.ts";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

const users = ref([]);
const newUser = ref({
  cinsiyet: "",
  isim: "",
  soyisim: "",
  sirket: "", // isteğe bağlı
  email: "",
  parola: "",
  veriGizliligi: false, // zorunlu
  haberBulteni: false, // isteğe bağlı
});


const loadUsers = async () => {
  try {
    const docRef = doc(db, "uyeler", "kullanicilar");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      users.value = docSnap.data().uyeler || [];
    } else {
      await setDoc(docRef, { uyeler: [] });
      users.value = [];
    }
  } catch (error) {
    alert("Kullanıcılar yüklenirken bir hata oluştu!");
  }
};


const onSubmit = async () => {
  if (
    !newUser.value.cinsiyet ||
    !newUser.value.isim ||
    !newUser.value.soyisim ||
    !newUser.value.email ||
    !newUser.value.parola
  ) {
    alert("Tüm zorunlu alanları doldurunuz!");
    return;
  }

  if (!newUser.value.veriGizliligi) {
    alert("Müşteri veri gizliliğini kabul etmelisiniz!");
    return;
  }

  try {
    const docRef = doc(db, "uyeler", "kullanicilar");
    const newUserData = { ...newUser.value };

    const existingUser = users.value.find(u => u.email === newUserData.email);
    if (existingUser) {
      alert("Bu e-posta zaten kullanılıyor!");
      return;
    }

    await updateDoc(docRef, {
      uyeler: arrayUnion(newUserData),
    });

    alert("Kullanıcı başarıyla eklendi!");
    newUser.value = {
      cinsiyet: "",
      isim: "",
      soyisim: "",
      sirket: "",
      email: "",
      parola: "",
      veriGizliligi: false,
      haberBulteni: false,
    };
    loadUsers();
  } catch (error) {
    alert("Kullanıcı eklenirken bir hata oluştu!");
  }
};


const deleteUser = async (userEmail) => {
  try {
    const docRef = doc(db, "uyeler", "kullanicilar");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const mevcutUyeler = docSnap.data().uyeler || [];
      const guncelUyeler = mevcutUyeler.filter(u => u.email !== userEmail);
      await updateDoc(docRef, { uyeler: guncelUyeler });
      loadUsers();
    }
  } catch (error) {
    alert("Kullanıcı silinirken bir hata oluştu!");
  }
};

onMounted(() => {
  loadUsers();
});
</script>

<style scoped>
body {
  background-color: #f3f4f6;
}
</style>
