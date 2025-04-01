<template>
  <section class="py-20 bg-gray-50">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div class="order-2 md:order-1">
          <div class="max-w-xl">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              <slot name="title" />
            </h2>
            <p class="mb-6 leading-relaxed text-gray-600">
              <slot name="description" />
            </p>
            <p class="mb-6 leading-relaxed text-gray-600">
              Misi kami adalah menjadi sumber informasi terpercaya dan relevan
              bagi Anda. Kami percaya bahwa pengetahuan adalah kunci untuk
              pertumbuhan pribadi dan profesional, dan kami berkomitmen untuk
              terus belajar dan berbagi wawasan baru.
            </p>
            <p class="mb-8 leading-relaxed text-gray-600">
              Bergabunglah dengan kami dalam perjalanan ini, dan mari
              bersama-sama menjelajahi dunia pengetahuan dan inspirasi.
            </p>
            <UButton to="/about" size="lg" color="primary" variant="solid">
              Pelajari Lebih Lanjut
            </UButton>
          </div>
        </div>
        <div class="order-1 md:order-2">
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tentang Kami"
              class="rounded-2xl shadow-2xl w-full object-cover h-full"
            />
            <div
              class="absolute top-0 left-0 w-full h-full bg-primary-500 opacity-20 rounded-2xl"
            ></div>
          </div>
        </div>
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
