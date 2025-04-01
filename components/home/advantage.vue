<template>
    <UContainer class="our-advantages">
      <h2 class="section-title">
        Keunggulan Kami (Tukang Gali Boringan)
      </h2>
      <div class="advantages-grid">
        <UCard
          v-for="(advantage, index) in advantages"
          :key="index"
          :ui="{
            body: { padding: 'p-6' },
            header: { padding: 'p-4' },
            rounded: 'rounded-2xl',
            shadow: 'shadow-xl',
            transition: 'transition-all hover:scale-105',
          }"
        >
          <template #header>
            <div class="flex justify-center">
              <UIcon :name="advantage.icon" class="advantage-icon" />
            </div>
          </template>
          <h3 class="advantage-title">
            {{ advantage.title }}
          </h3>
          <p class="advantage-description">
            {{ advantage.description }}
          </p>
        </UCard>
      </div>
    </UContainer>
  </template>
  
  <script setup>
  
  const advantages = [
    {
      title: 'Keahlian dan Pengalaman',
      description:
        'Tim kami terdiri dari tukang gali boringan yang berpengalaman dan terlatih, memahami berbagai jenis tanah dan teknik pengeboran yang tepat.',
      icon: 'i-material-symbols-calendar-clock',
    },
    {
      title: 'Presisi dan Akurasi',
      description:
        'Kami memastikan pengeboran yang presisi sesuai dengan kedalaman dan diameter yang dibutuhkan, meminimalkan gangguan tanah.',
      icon: 'i-clarity-bullseye-solid',
    },
    {
      title: 'Peralatan Canggih',
      description:
        'Kami menggunakan peralatan boring terkini yang efisien dan bertenaga untuk berbagai kondisi tanah.',
      icon: 'i-material-symbols-tools-power-drill-outline',
    },
    {
      title: 'Keamanan Terjamin',
      description:
        'Kami mematuhi standar keamanan dan protokol yang ketat dalam setiap pengeboran.',
      icon: 'i-mdi-shield-check',
    },
  ]
  </script>
  
  <style scoped>
  .our-advantages {
    padding: 60px 0;
    background-color: #f8fafc; /* Light gray background */
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 40px;
    font-size: 2.5rem; /* Increased font size */
    color: #1e293b; /* Darker text gray */
    font-weight: 600;
  }
  
  .advantages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Increased min width */
    gap: 30px; /* Increased gap */
  }
  
  .advantage-icon {
    font-size: 3.5rem; /* Slightly larger icons */
    color: #2563eb; /* Primary blue */
    margin-bottom: 15px; /* Increased margin */
  }
  
  .advantage-title {
    text-align: center;
    font-size: 1.3rem; /* Slightly larger font size */
    margin-bottom: 10px;
    color: #1e293b; /* Darker text gray */
    font-weight: 500;
  }
  
  .advantage-description {
    text-align: center;
    font-size: 1.05rem; /* Slightly larger font size */
    color: #475569; /* Medium gray text */
    line-height: 1.6;
  }
  </style>
  