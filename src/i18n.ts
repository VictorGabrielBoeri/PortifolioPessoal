import { createI18n } from 'vue-i18n'
import enUS from './locales/en-US.json'
import ptBR from './locales/pt-BR.json'

type MessageSchema = typeof enUS

const i18n = createI18n<[MessageSchema], 'en-US' | 'pt-BR'>({
  legacy: false, // Você deve definir `false` para usar a API de Composição com TypeScript
  locale: 'pt-BR', // Idioma padrão
  fallbackLocale: 'pt-BR', // Idioma de fallback
  messages: {
    'en-US': enUS,
    'pt-BR': ptBR
  }
})

export default i18n