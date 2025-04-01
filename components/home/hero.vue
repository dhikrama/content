<template>
    <section class="relative bg-cover bg-center py-32" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center text-white">
          <h1 class="text-3xl md:text-8xl font-bold mb-6 drop-shadow-lg">
            <slot name="title" />
          </h1>
          <p class="text-lg md:text-xl mb-8 drop-shadow-lg">
            <slot name="description" />
          </p>
          <slot name="actions">
            <UButton><a href="/">Selanjutnya</a></UButton>
          </slot>
        </div>
      </div>
      <div v-if="showWaves" class="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #f7fafc;"></path>
        </svg>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  const props = defineProps({
    backgroundImage: {
      type: String,
      default: 'https://dummyimage.com/600x400/000/fff', // Replace with your default background image path
    },
      showWaves : {
          type: Boolean,
          default: true
      }
  })
  // Example for changing background image, you can modify as needed.
  </script>
  
  <style scoped>
  .bg-primary {
    background-color: #2563eb; /* Example primary color */
  }
  
  .bg-primary-dark {
    background-color: #1e40af; /* Example darker shade */
  }
  .drop-shadow-lg {
    text-shadow: 0 4px 3px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);
  }
  </style>
  