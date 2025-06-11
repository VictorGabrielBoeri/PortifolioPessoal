<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">{{ $t('about.title') }}</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            {{ $t('about.description1') }}
          </p>
          <p>
            {{ $t('about.description2') }}
          </p>
          <div class="contact-info">
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <span>victorgabrielboeri10@gmail.com</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <span>(11) 94035-8622</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>Rua Tenente Azevedo, 104 - Aclimação SP</span>
            </div>
          </div>
        </div>
        <div class="about-stats">
          <div class="stat-card">
            <h3>4+</h3>
            <p>Anos de Experiência</p>
          </div>
          <div class="stat-card">
            <h3>50+</h3>
            <p>Projetos Concluídos</p>
          </div>
          <div class="stat-card">
            <h3>100%</h3>
            <p>Satisfação do Cliente</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: start;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
}

.about-text p {
  margin-bottom: 20px;
  color: #e0e0e0;
}

.contact-info {
  margin-top: 40px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  color: #b0b0b0;
}

.contact-item i {
  color: #667eea;
  width: 20px;
}

.about-stats {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(102, 126, 234, 0.2);
}

.stat-card h3 {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

.stat-card p {
  color: #b0b0b0;
  font-weight: 500;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .about-stats {
    flex-direction: row;
    overflow-x: auto;
  }
  
  .stat-card {
    min-width: 150px;
  }
}
</style>