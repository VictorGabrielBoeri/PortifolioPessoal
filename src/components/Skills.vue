<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title">{{ $t('skills.title') }}</h2>
      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-card">
          <div class="skill-icon">
            <i :class="skill.icon"></i>
          </div>
          <h3>{{ skill.name }}</h3>
          <div class="skill-level">
            <div class="skill-bar">
              <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
            </div>
            <span>{{ skill.level }}%</span>
          </div>
        </div>
      </div>
      
      <div class="soft-skills">
        <h3>{{ $t('skills.interpersonal') }}</h3>
        <div class="soft-skills-grid">
          <div v-for="softSkill in softSkills" :key="softSkill" class="soft-skill-item">
            <i class="fas fa-check"></i>
            <span>{{ softSkill }}</span>
          </div>
        </div>
      </div>
      
      <div class="languages">
        <h3>Idiomas</h3>
        <div class="languages-grid">
          <div v-for="language in languages" :key="language.name" class="language-item">
            <span class="language-name">{{ language.name }}</span>
            <span class="language-level">{{ language.level }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface Language {
  name: string;
  level: string;
}

const skills: Skill[] = [
  { name: 'HTML', icon: 'fab fa-html5', level: 100 },
  { name: 'CSS', icon: 'fab fa-css3-alt', level: 100 },
  { name: 'JavaScript', icon: 'fab fa-js-square', level: 100 },
  { name: 'Vue.js', icon: 'fab fa-vuejs', level: 100 },
  { name: 'TypeScript', icon: 'fab fa-js-square', level: 100 },
  { name: 'Next.js', icon: 'fab fa-react', level: 75 },
  { name: 'Angular', icon: 'fab fa-angular', level: 70 },
  { name: 'WordPress', icon: 'fab fa-wordpress', level: 85 },
  { name: 'Node.js', icon: 'fab fa-node-js', level: 65 }
];

const softSkills: string[] = [
  'Comunicação',
  'Trabalho em equipe',
  'Organização',
  'Proatividade',
  'Criatividade',
  'Flexibilidade'
];

const languages: Language[] = [
  { name: 'Português', level: 'Fluente' },
  { name: 'Inglês', level: 'Básico' },
  { name: 'Espanhol', level: 'Básico' }
];
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.skill-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.skill-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.skill-level {
  display: flex;
  align-items: center;
  gap: 15px;
}

.skill-bar {
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  transition: width 1s ease;
}

.skill-level span {
  font-size: 0.9rem;
  color: #b0b0b0;
  min-width: 35px;
}

.soft-skills, .languages {
  margin-top: 60px;
}

.soft-skills h3, .languages h3 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.soft-skills-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}

@media (max-width: 1200px) {
  .soft-skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .soft-skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .soft-skills-grid {
    grid-template-columns: 1fr;
  }
}
.soft-skill-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.soft-skill-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.soft-skill-item i {
  color: #667eea;
}

.languages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.language-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.language-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.language-name {
  font-weight: 600;
}

.language-level {
  color: #667eea;
  font-weight: 500;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .soft-skills-grid,
  .languages-grid {
    grid-template-columns: 1fr;
  }
}
</style>