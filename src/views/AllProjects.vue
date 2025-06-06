<template>
  <div>
    <section class="all-projects-hero">
      <div class="container">
        <h1 class="hero-title">Todos os Meus Projetos</h1>
        <p class="hero-subtitle">Explore meu portfólio completo de desenvolvimento</p>
        <router-link to="/" class="btn btn-back">
          <i class="fas fa-arrow-left"></i>
          Voltar ao Início
        </router-link>
      </div>
    </section>
    <Projects :showLimited="false" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Projects from '../components/Projects.vue'

// Scroll para o topo quando a página carregar
onMounted(() => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, 100)
})
</script>

<style scoped>
.all-projects-hero {
  padding: 120px 0 80px;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-bottom: 30px;
}

.btn-back {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-back:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>