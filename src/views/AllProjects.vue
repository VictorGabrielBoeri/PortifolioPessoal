<template>
  <div>
    <section class="all-projects-hero">
      <div class="container">
        <h1 class="hero-title">{{ $t('projects.allProjects') }}</h1>
        <p class="hero-subtitle">Explore meu portfólio completo de desenvolvimento</p>
        <router-link to="/" class="btn btn-back">
          <i class="fas fa-arrow-left"></i>
          Voltar ao Início
        </router-link>
      </div>
    </section>
    
    <!-- Seção customizada de projetos para esta página -->
    <section class="all-projects-section">
      <div class="container">
        <div class="all-projects-grid">
          <div v-for="project in displayedProjects" :key="project.id" class="project-card">
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <div class="project-links">
                  <a v-if="project.demo" :href="project.demo" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i> {{ $t('projects.demo') }}
                  </a>
                  <a :href="project.github" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> {{ $t('projects.code') }}
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tech">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Botão Ver Mais -->
        <div v-if="hasMoreProjects" class="projects-actions">
          <button @click="loadMoreProjects" class="btn btn-view-more">
            <i class="fas fa-plus"></i>
            {{ $t('projects.viewMore') }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demo?: string;
  github: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Nutricionista App',
    description: 'Sistema web moderno para nutricionistas gerenciarem planos alimentares de pacientes com interface responsiva e tema claro/escuro.',
    image: '/img/projects/NutricionistaApp.png',
    demo: 'https://nutricionistaapp.netlify.app/',
    github: 'https://github.com/VictorGabrielBoeri/Nutricionista-App',
    technologies: ['Vue.js', 'TypeScript', 'TailwindCSS', 'Axios']
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'Aplicativo de previsão do tempo moderno e responsivo com busca de clima por cidade e sugestões automáticas.',
    image: '/img/projects/weather-app.png',
    demo: 'https://weatherappprojectime.netlify.app/',
    github: 'https://github.com/VictorGabrielBoeri/Weather-App',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeatherMap API']
  },
  {
    id: 3,
    title: 'Padaria Delícias do Forno',
    description: 'Website moderno para padaria com cardápio interativo, informações sobre produtos artesanais e design responsivo.',
    image: '/img/projects/PadariaHome.png',
    demo: 'https://sitepadaria.netlify.app/',
    github: 'https://github.com/VictorGabrielBoeri/SiteParaPadaria',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
  },
  {
    id: 4,
    title: 'Space Tourism',
    description: 'Website multi-página de turismo espacial com design moderno e responsivo, baseado em desafio do Frontend Mentor.',
    image: '/img/projects/space-tourism-multi-page-website.png',
    demo: 'https://spacetourismmultipagewebsite.netlify.app/',
    github: 'https://github.com/VictorGabrielBoeri/space-tourism-multi-page-website',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
  },
  {
    id: 5,
    title: 'VidFlow',
    description: 'Plataforma de vídeos desenvolvida com Node.js e Vite, oferecendo uma experiência moderna de streaming.',
    image: '/img/projects/VidFlow.png',
    demo: 'https://projeto-node-js-in-vite.vercel.app/',
    github: 'https://github.com/VictorGabrielBoeri/ProjetoNodeJSInVite',
    technologies: ['Node.js', 'Vite', 'JavaScript', 'CSS3']
  },
  {
    id: 6,
    title: 'Lista de Tarefas',
    description: 'Projeto feito com Vue para adicionar itens e cronometrar tempo para finalização das tarefas criadas.',
    image: '/img/projects/projeto-lista-de-tarefas.png',
    demo: 'https://projeto-lista-de-tarefas-seven.vercel.app/#/',
    github: 'https://github.com/VictorGabrielBoeri/ProjetoListaDeTarefas',
    technologies: ['Vue.js', 'TypeScript', 'CSS3', 'Timer']
  },
  {
    id: 7,
    title: 'ChatRealTime',
    description: 'Aplicativo de chat em tempo real desenvolvido com Angular e Socket.IO, oferecendo comunicação instantânea entre usuários com compartilhamento de arquivos.',
    image: '/img/projects/MensagemApp.png',
    demo: 'https://chatrealtimeangular.netlify.app/',
    github: 'https://github.com/VictorGabrielBoeri/ChatRealTime',
    technologies: ['Angular', 'Socket.IO', 'Node.js', 'SCSS']
  },
  {
    id: 8,
    title: 'Página de Links Portfólio',
    description: 'Página de links personalizada para designer gráfica com design moderno e responsivo, incluindo links para redes sociais e contato.',
    image: '/img/projects/PaginaDeLinks.png',
    demo: 'https://paginadelinksportifolio.netlify.app/',
    github: 'https://github.com/VictorGabrielBoeri/PaginaDeLinksPortifolio',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
  },
];

const projectsPerPage = 8 // 4x2 layout
const currentPage = ref(1)

const displayedProjects = computed(() => {
  return projects.slice(0, currentPage.value * projectsPerPage)
})

const hasMoreProjects = computed(() => {
  return (currentPage.value * projectsPerPage) < projects.length
})

const loadMoreProjects = () => {
  currentPage.value++
}

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

.all-projects-section {
  padding: 80px 0;
}

.all-projects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 colunas */
  gap: 30px;
  margin-bottom: 50px;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(102, 126, 234, 0.3);
}

.project-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 20px;
}

.project-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}

.project-link:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
}

.project-content {
  padding: 30px;
}

.project-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.project-content p {
  color: #e0e0e0;
  line-height: 1.6;
  margin-bottom: 20px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-tag {
  padding: 5px 12px;
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.projects-actions {
  text-align: center;
  margin-top: 50px;
}

.btn-view-more {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.btn-view-more:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
}

/* Responsivo */
@media (max-width: 1200px) {
  .all-projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .all-projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .all-projects-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>