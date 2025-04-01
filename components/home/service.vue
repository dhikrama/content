<template>
    <section class="py-20 bg-gray-50">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Layanan Kami
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Kami menawarkan berbagai layanan galian kabel boringan yang dirancang
            untuk memenuhi kebutuhan infrastruktur Anda. Dengan teknologi terkini
            dan tim ahli, kami menjamin solusi yang efisien, aman, dan
            berkelanjutan.
          </p>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Service Card 1 -->
          <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-wrench-screwdriver" class="text-primary text-4xl mr-4" />
              <h3 class="text-xl font-semibold text-gray-800">
                Instalasi Kabel Bawah Tanah
              </h3>
            </div>
            <p class="text-gray-600">
              Pemasangan kabel listrik, telekomunikasi, dan data dengan metode
              boring horizontal, meminimalkan gangguan dan kerusakan permukaan.
            </p>
          </div>
  
          <!-- Service Card 2 -->
          <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-arrows-pointing-out" class="text-primary text-4xl mr-4" />
              <h3 class="text-xl font-semibold text-gray-800">
                Perluasan Jaringan
              </h3>
            </div>
            <p class="text-gray-600">
              Ekspansi jaringan kabel yang cepat dan efisien, mendukung
              pertumbuhan infrastruktur di berbagai area.
            </p>
          </div>
  
          <!-- Service Card 3 -->
          <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-shield-check" class="text-primary text-4xl mr-4" />
              <h3 class="text-xl font-semibold text-gray-800">
                Pemeliharaan dan Perbaikan
              </h3>
            </div>
            <p class="text-gray-600">
              Layanan pemeliharaan dan perbaikan jaringan kabel bawah tanah,
              memastikan kelancaran operasional dan keamanan.
            </p>
          </div>
          <!-- Add more service cards here -->
        </div>
      </UContainer>
    </section>
  </template>
  
  <script setup>
  // You can add any necessary logic here if needed
  </script>
  
  <style scoped>
  /* Add any custom styles here if needed */
  </style>
  