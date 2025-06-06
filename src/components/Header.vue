<template>
  <header class="header">
    <nav class="nav container">
      <div class="logo">
        <span>Portfólio</span>
      </div>
      <div class="nav-links">
        <a href="#about">Sobre</a>
        <a href="#skills">Habilidades</a>
        <a href="#experience">Experiência</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </div>
    </nav>
  </header>

  <div class="container">
    <div class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>
            Olá, eu sou o<br />
            <span class="highlight">Victor Gabriel :)</span>
          </h1>
          <p class="hero-subtitle">Desenvolvedor Front-End</p>
          <div class="hero-buttons">
            <a href="#contact" class="btn">Entre em contato</a>
            <router-link to="/projetos" class="btn btn-outline"
              >Ver projetos</router-link
            >
          </div>
        </div>
        <div class="hero-image">
          <div class="profile-circle">
            <img
              src="/public/img/icons/Perfil-removebg-preview.png"
              alt="Victor Gabriel"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  overflow: hidden;
  z-index: 999;
  backdrop-filter: blur(50px);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  position: relative;
  z-index: 10;
}

.logo span {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a,
.nav-links .router-link-active,
.nav-links .router-link-exact-active {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links a:hover,
.nav-links .router-link-active:hover,
.nav-links .router-link-exact-active:hover {
  color: #667eea;
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.hero {
  display: flex;
  align-items: center;
  min-height: 700px;
  padding: 40px 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  width: 100%;
}

.hero-text h1 {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
}

.highlight {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #a0a0a0;
  margin-bottom: 40px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-outline {
  background: transparent;
  border: 2px solid #667eea;
  color: #667eea;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-circle {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 5px;
  position: relative;
  animation: float 6s ease-in-out infinite;
}

.profile-circle img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 768px) {
  .nav-links, header {
    display: none;
  }

  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }

  .hero-text h1 {
    font-size: 2.5rem;
  }

  .profile-circle {
    width: 250px;
    height: 250px;
  }

  .hero-buttons {
    justify-content: center;
  }
}
</style>
