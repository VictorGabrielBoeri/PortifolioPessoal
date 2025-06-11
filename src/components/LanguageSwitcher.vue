<template>
  <div class="language-switcher">
    <button @click="toggleDropdown" class="language-button">
      <i class="fas fa-globe"></i>
      <span class="current-language">{{ currentLanguageLabel }}</span>
      <i class="fas fa-chevron-down"></i>
    </button>
    <div v-if="isOpen" class="language-dropdown">
      <button 
        v-for="locale in availableLocales" 
        :key="locale.code" 
        @click="changeLanguage(locale.code)"
        :class="{ 'active': locale.code === currentLocale }"
        class="language-option"
      >
        {{ locale.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()
const isOpen = ref(false)

const availableLocales = [
  { code: 'pt-BR', label: t('language.pt-BR') },
  { code: 'en-US', label: t('language.en-US') }
]

const currentLocale = computed(() => locale.value)
const currentLanguageLabel = computed(() => {
  const localeObj = availableLocales.find(l => l.code === locale.value)
  return localeObj ? localeObj.label : ''
})

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function changeLanguage(localeCode: string) {
  locale.value = localeCode
  isOpen.value = false
  
  // Salvar a preferência de idioma no localStorage
  localStorage.setItem('userLocale', localeCode)
}

// Verificar se há uma preferência de idioma salva
const savedLocale = localStorage.getItem('userLocale')
if (savedLocale && (savedLocale === 'pt-BR' || savedLocale === 'en-US')) {
  locale.value = savedLocale
}
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
}

.language-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.language-button:hover {
  color: #667eea;
}

.current-language {
  font-weight: 500;
}

.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: rgba(30, 30, 60, 0.95);
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  min-width: 150px;
  z-index: 9999; /* Aumentar o z-index para garantir que sobreponha tudo */
  backdrop-filter: blur(10px);
  margin-top: 10px;
  display: block; /* Garantir que o dropdown seja exibido como bloco */
}

.language-option {
  display: block;
  width: 100%;
  text-align: left;
  padding: 8px 15px;
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.language-option:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #667eea;
}

.language-option.active {
  color: #667eea;
  font-weight: 600;
}

@media (max-width: 768px) {
  .language-switcher {
    margin-top: 0; /* Ajustar a margem superior */
    position: relative; /* Garantir posicionamento correto */
  }
  
  .language-dropdown {
    position: absolute;
    right: 0;
    top: 100%;
    z-index: 9999;
  }
}
</style>