<template>
  <section class="portfolio-section">
    <div class="container">
      <!-- Header Section -->
      <div class="section-header">
        <h2>Proyek Galian Boring Kami</h2>
        <p>Bukti nyata kualitas dan pengalaman tim dalam menangani berbagai proyek galian.</p>
      </div>

      <!-- Portfolio Grid -->
      <div class="portfolio-grid">
        <!-- Item 1 -->
        <div class="portfolio-item">
          <div class="portfolio-image">
            <img 
              src="https://picsum.photos/seed/picsum/200/300" 
              alt="Proyek Galian Boring untuk Fiber Optik" 
              loading="lazy"
            />
            <div class="overlay">
              <h3>Galian Boring Fiber Optik</h3>
              <p>PT. Telekomunikasi Indonesia - Jakarta</p>
              <NuxtLink to="https://picsum.photos/seed/picsum/200/300" class="details-btn">
                Lihat Detail →
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="portfolio-item">
          <div class="portfolio-image">
            <img 
              src="https://picsum.photos/seed/picsum/200/300" 
              alt="Proyek Galian Boring Listrik PLN" 
              loading="lazy"
            />
            <div class="overlay">
              <h3>Galian Boring Kabel Listrik</h3>
              <p>PLN Area Bandung - 2023</p>
              <NuxtLink to="/proyek/pln-bandung" class="details-btn">
                Lihat Detail →
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Item 3 (Video) -->
        <div class="portfolio-item">
          <div class="portfolio-image">
            <video 
              poster="https://picsum.photos/seed/picsum/200/300" 
              controls
              muted
            >
              <source src="" type="video/mp4">
            </video>
            <div class="overlay">
              <h3>Proses Pengeboran Horizontal</h3>
              <p>Teknologi Trenchless Modern</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="portfolio-cta">
        <NuxtLink to="/portofolio" class="cta-button">
          Lihat Semua Proyek
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio-section {
  padding: 80px 0;
  background: #f9f9f9;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 15px;
}

.section-header p {
  color: #666;
  font-size: 1.1rem;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 0 20px;
}

.portfolio-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.portfolio-item:hover {
  transform: translateY(-10px);
}

.portfolio-image {
  position: relative;
  aspect-ratio: 16/9;
}

.portfolio-image img, 
.portfolio-image video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
  padding: 30px 20px 20px;
  opacity: 0;
  transition: opacity 0.3s;
}

.portfolio-item:hover .overlay {
  opacity: 1;
}

.overlay h3 {
  font-size: 1.3rem;
  margin-bottom: 5px;
}

.overlay p {
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.details-btn {
  color: white;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid white;
  padding: 5px 15px;
  border-radius: 20px;
  display: inline-block;
  transition: background 0.3s;
}

.details-btn:hover {
  background: rgba(255,255,255,0.2);
}

.portfolio-cta {
  text-align: center;
  margin-top: 50px;
}

.cta-button {
  background: #2a5bd7;
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #1e4aba;
}
</style>