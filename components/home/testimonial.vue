<template>
    <section class="bg-gray-50 py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Apa Kata Mereka?
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Berikut adalah testimoni dari klien-klien yang puas dengan layanan kami.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-white p-8 rounded-lg shadow-md border border-gray-200"
          >
            <div class="flex items-center mb-6">
              <div class="mr-4 w-12 h-12 rounded-full overflow-hidden">
                <img
                  :src="testimonial.image"
                  :alt="testimonial.name"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ testimonial.name }}</h4>
                <p class="text-gray-500 text-sm">{{ testimonial.position }}</p>
              </div>
            </div>
            <div class="mb-4">
              <UIcon
                name="i-fa-solid-quote-left"
                class="w-6 h-6 text-gray-400"
              />
            </div>
            <p class="text-gray-700 leading-relaxed">
              {{ testimonial.content }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>
  </template>
  
  <script setup>
  const testimonials = [
    {
      name: 'Bapak Budi Santoso',
      position: 'Manajer Proyek, PT. Maju Jaya',
      content:
        'Kami sangat puas dengan hasil pekerjaan galian boring dari tim Anda. Pengerjaan cepat, rapi, dan sesuai dengan spesifikasi yang kami inginkan.',
      image: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: 'Ibu Ani Putri',
      position: 'Kepala Divisi, PLN Area Bandung',
      content:
        'Kerja sama dengan tim Anda sangat profesional. Proses pengeboran horizontal berjalan lancar dan minim gangguan. Kami merekomendasikan layanan Anda.',
      image: 'https://i.pravatar.cc/150?img=2',
    },
    {
      name: 'Bapak Chandra Wijaya',
      position: 'Direktur, PT. Telekomunikasi Indonesia',
      content:
        'Tim Anda menunjukkan keahlian yang luar biasa dalam menangani proyek galian boring untuk fiber optik. Komunikasi yang baik dan responsif membuat kami merasa nyaman.',
      image: 'https://i.pravatar.cc/150?img=3',
    },
    {
      name: 'Ibu Diah Permata',
      position: 'Kepala Sekolah, SMP Harapan Bangsa',
      content:
        'Kami senang dengan hasil kerja tim Anda. Pengerjaan sumur resapan dilakukan dengan baik dan lingkungan sekitar tetap terjaga kebersihannya.',
      image: 'https://i.pravatar.cc/150?img=4',
    },
    // Tambahkan testimoni lain di sini...
  ];
  </script>
  
  <style scoped>
  /* Tidak perlu CSS khusus untuk Swiper */
  </style>
  