<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const navigationMenus = [
  {
    "title": "Beranda",
    "path": "/"
  },
  {
    "title": "Tentang",
    "path": "/about"
  },
  {
    "title": "Kontak",
    "path": "/contact"
  },
  {
    "title": "Blog",
    "path": "/blog"
  }
];

const isMobileMenuOpen = ref(false);
const route = useRoute();

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Computed property to check if the current route is /blog or a sub-route of /blog
const isBlogOrPostPage = computed(() => {
  return route.path.startsWith('/blog');
});
</script>

<template>
  <header class="shadow-md py-4">
    <UContainer>
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="text-xl font-bold ">
          <NuxtLink to="/">My Blog</NuxtLink>
        </div>

        <!-- ColorModButton (Conditionally Rendered) -->
        <ColorModButton v-if="isBlogOrPostPage" />

        <!-- Desktop Navigation -->
        <nav class="hidden md:block">
          <ul class="flex space-x-6">
            <li v-for="item in navigationMenus" :key="item.path">
              <NuxtLink :to="item.path" class="hover:text-blue-500 transition duration-200">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Mobile Navigation Toggle -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class=" focus:outline-none">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path v-if="!isMobileMenuOpen" fill-rule="evenodd"
                d="M3 5h18a1 1 0 010 2H3a1 1 0 110-2zm0 6h18a1 1 0 010 2H3a1 1 0 110-2zm0 6h18a1 1 0 010 2H3a1 1 0 110-2z" />
              <path v-else fill-rule="evenodd" d="M4 4l16 16M4 20L20 4" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <Transition name="slide-fade">
        <div v-if="isMobileMenuOpen" class="md:hidden mt-4">
          <ul class="space-y-2">
            <li v-for="item in navigationMenus" :key="item.path">
              <NuxtLink :to="item.path" class="block px-4 py-2 hover:bg-gray-200 rounded-md" @click="toggleMobileMenu">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </Transition>
    </UContainer>
  </header>
</template>

<style scoped>
/* Add any custom styles here if needed */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
