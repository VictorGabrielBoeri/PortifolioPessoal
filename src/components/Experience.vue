<template>
  <section id="experience" class="section">
    <div class="container">
      <h2 class="section-title">{{ $t('experience.title') }}</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-date">Abril 2023 - {{ $t('experience.present') }}</div>
            <h3>{{ $t('experience.developer') }}</h3>
            <h4>Grupo awtech</h4>
            <ul>
              <li>{{ $t('experience.responsibilities[0]') }}</li>
              <li>{{ $t('experience.responsibilities[1]') }}</li>
              <li>{{ $t('experience.responsibilities[2]') }}</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="education">
        <h3>{{ $t('experience.education') }}</h3>
        <div class="education-item">
          <div class="education-icon">
            <i class="fas fa-graduation-cap"></i>
          </div>
          <div class="education-content">
            <h4>Graduação em Ciências da Computação</h4>
            <p>Universidade FMU Centro Universitário das Faculdades Metropolitanas Unidas</p>
            <span class="education-location">Liberdade SP</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.timeline {
  position: relative;
  margin-bottom: 60px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding-left: 80px;
}

.timeline-dot {
  position: absolute;
  left: 21px;
  top: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  border: 4px solid #0f0f23;
}

.timeline-content {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(102, 126, 234, 0.2);
}

.timeline-date {
  color: #667eea;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.timeline-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 5px;
}

.timeline-content h4 {
  color: #b0b0b0;
  font-weight: 500;
  margin-bottom: 20px;
}

.timeline-content ul {
  list-style: none;
  padding: 0;
}

.timeline-content li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  color: #e0e0e0;
}

.timeline-content li::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: #667eea;
  font-size: 0.8rem;
}

.education {
  margin-top: 60px;
}

.education h3 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.education-item {
  display: flex;
  align-items: center;
  gap: 30px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  transition: all 0.3s ease;
}

.education-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(102, 126, 234, 0.2);
}

.education-icon {
  font-size: 3rem;
  color: #667eea;
}

.education-content h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.education-content p {
  color: #e0e0e0;
  margin-bottom: 5px;
}

.education-location {
  color: #b0b0b0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 15px;
  }
  
  .timeline-item {
    padding-left: 50px;
  }
  
  .timeline-dot {
    left: 6px;
  }
  
  .education-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>