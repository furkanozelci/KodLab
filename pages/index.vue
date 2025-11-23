<template>
  <div class="master-detail-layout">
    <!-- Sidebar -->
    <aside :class="['sidebar', { 'collapsed': !isSidebarOpen }]">
      <div class="sidebar-header">
        <span v-if="isSidebarOpen" class="brand">Components</span>
        <button class="toggle-btn" @click="toggleSidebar">☰</button>
      </div>

      <nav>
        <ul>
          <li
            v-for="(item, index) in navItems"
            :key="index"
            :class="{ active: activeComponent === item.component }"
            @click="setActiveComponent(item.component)"
          >
            <span class="nav-icon">{{ item.icon }}</span>
            <span v-if="isSidebarOpen">{{ item.title }}</span>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="content-display">
      <component :is="activeComponent" />
    </main>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';

// Sidebar toggle
const isSidebarOpen = ref(true);
const toggleSidebar = () => { isSidebarOpen.value = !isSidebarOpen.value; };

// Component mapping
const navItems = [
  { title: 'Header', component: defineAsyncComponent(() => import('@/components/header.vue')), },
  { title: 'Footer', component: defineAsyncComponent(() => import('@/components/footer.vue')), },
  { title: 'Giriş Yap', component: defineAsyncComponent(() => import('@/components/giris yap.vue')), },
  { title: 'Kaydol', component: defineAsyncComponent(() => import('@/components/uyeolustur.vue')),  },
  { title: 'Ürün', component: defineAsyncComponent(() => import('@/components/urun.vue')), },
  { title: 'Sepet', component: defineAsyncComponent(() => import('@/components/sepet.vue')), },
  { title: 'Slider', component: defineAsyncComponent(() => import('@/components/slider.vue')),  },
  { title: 'Benzer Ürün', component: defineAsyncComponent(() => import('@/components/benzerurun.vue')),  },
  { title: 'Icerik', component: defineAsyncComponent(() => import('@/components/icerik.vue')),  },
  { title: 'Hesap', component: defineAsyncComponent(() => import('@/components/hesap.vue')),  },
  { title: 'Kampanya', component: defineAsyncComponent(() => import('@/components/Kampanya.vue')),  },
  { title: 'Yazarlar', component: defineAsyncComponent(() => import('@/components/Yazarlar.vue')),  },
  { title: 'Videolar', component: defineAsyncComponent(() => import('@/components/videolar.vue')),  },
];

const activeComponent = ref(navItems[0].component);

const setActiveComponent = (component) => {
  activeComponent.value = component;
};
</script>

<style scoped>
.master-detail-layout {
  display: flex;
  height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f7f9fc;
}

/* Sidebar */
.sidebar {
  width: 250px;
  background-color: #1e293b;
  color: white;
  transition: width 0.3s;
  overflow-y: auto;
  padding: 20px;
}

.sidebar.collapsed {
  width: 60px;
  padding: 20px 5px;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.brand { font-weight: bold; font-size: 20px; }
.toggle-btn {
  background-color: #334155;
  border: none;
  color: white;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

nav ul { list-style: none; padding: 0; margin: 0; }
nav li {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
nav li:hover { background-color: #334155; }
nav li.active { background-color: #42b883; font-weight: 600; }

.nav-icon { margin-right: 10px; }

/* Main content */
.content-display {
  flex-grow: 1;
  padding: 40px;
  overflow-y: auto;
}
</style>
