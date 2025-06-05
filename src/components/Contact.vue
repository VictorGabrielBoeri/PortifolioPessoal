<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">Contatos</h2>
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-details">
              <h3>E-mail</h3>
              <a href="mailto:victorgabrielboeri10@gmail.com">victorgabrielboeri10@gmail.com</a>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="contact-details">
              <h3>Telefone</h3>
              <a href="tel:+5511940358622">(11) 94035-8622</a>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fab fa-linkedin"></i>
            </div>
            <div class="contact-details">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/victor-gabriel-de-oliveira-boeri/" target="_blank">LinkedIn Profile</a>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fab fa-github"></i>
            </div>
            <div class="contact-details">
              <h3>GitHub</h3>
              <a href="https://github.com/VictorGabrielBoeri/" target="_blank">GitHub Profile</a>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <form 
            action="https://formspree.io/f/xnnvnrzr" 
            method="POST"
            @submit="handleSubmit"
          >
            <div class="form-group">
              <input 
                type="text" 
                name="name"
                v-model="form.name" 
                placeholder="Seu nome" 
                required
                :disabled="isSubmitting"
              >
            </div>
            <div class="form-group">
              <input 
                type="email" 
                name="email"
                v-model="form.email" 
                placeholder="Seu e-mail" 
                required
                :disabled="isSubmitting"
              >
            </div>
            <div class="form-group">
              <input 
                type="text" 
                name="subject"
                v-model="form.subject" 
                placeholder="Assunto" 
                required
                :disabled="isSubmitting"
              >
            </div>
            <div class="form-group">
              <textarea 
                name="message"
                v-model="form.message" 
                placeholder="Sua mensagem" 
                rows="5" 
                required
                :disabled="isSubmitting"
              ></textarea>
            </div>
            
            <!-- Campos importantes para o Formspree -->
            <input type="hidden" name="_replyto" value="victorgabrielboeri10@gmail.com">
            <input type="hidden" name="_subject" value="Nova mensagem do portfólio - Victor Gabriel">
            <input type="hidden" name="_next" value="https://seu-site.netlify.app/#contact">
            <input type="hidden" name="_format" value="plain">
            
            <button type="submit" class="btn btn-submit" :disabled="isSubmitting">
              <i class="fas fa-paper-plane" v-if="!isSubmitting"></i>
              <i class="fas fa-spinner fa-spin" v-if="isSubmitting"></i>
              {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
            </button>
            
            <!-- Mensagens de feedback -->
            <div v-if="successMessage" class="success-message">
              <i class="fas fa-check-circle"></i>
              {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="error-message">
              <i class="fas fa-exclamation-circle"></i>
              {{ errorMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
    
    <!-- Toast Notification -->
    <div v-if="showNotification" :class="['toast-notification', notificationType]">
      <div class="toast-content">
        <div class="toast-icon">
          <i :class="notificationIcon"></i>
        </div>
        <div class="toast-message">
          <h4>{{ notificationTitle }}</h4>
          <p>{{ notificationMessage }}</p>
        </div>
        <button @click="closeNotification" class="toast-close">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const form = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const handleSubmit = async (event: Event) => {
  event.preventDefault();
  isSubmitting.value = true;
  successMessage.value = '';
  errorMessage.value = '';
  
  try {
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('subject', form.subject);
    formData.append('message', form.message);
    formData.append('_replyto', 'victorgabrielboeri10@gmail.com');
    formData.append('_subject', 'Nova mensagem do portfólio - Victor Gabriel');
    
    const response = await fetch('https://formspree.io/f/xnnvnrzr', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      successMessage.value = 'Mensagem enviada com sucesso! Verifique também sua pasta de spam. Entrarei em contato em breve.';
      
      // Reset form
      form.name = '';
      form.email = '';
      form.subject = '';
      form.message = '';
    } else {
      throw new Error('Erro no envio');
    }
    
  } catch (error) {
    console.error('Erro ao enviar:', error);
    errorMessage.value = 'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente pelo email: victorgabrielboeri10@gmail.com';
  } finally {
    isSubmitting.value = false;
    
    // Limpar mensagens após 8 segundos
    setTimeout(() => {
      successMessage.value = '';
      errorMessage.value = '';
    }, 8000);
  }
};
</script>

<style scoped>
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(102, 126, 234, 0.2);
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
}

.contact-details h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.contact-details a {
  color: #b0b0b0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-details a:hover {
  color: #667eea;
}

.contact-form {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
}

.form-group {
  margin-bottom: 25px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #b0b0b0;
}

.btn-submit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1.1rem;
  padding: 15px;
}

.btn-submit:hover {
  transform: translateY(-2px);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.success-message {
  margin-top: 15px;
  padding: 15px;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 10px;
  color: #22c55e;
  display: flex;
  align-items: center;
  gap: 10px;
}

.error-message {
  margin-top: 15px;
  padding: 15px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 10px;
  color: #ef4444;
  display: flex;
  align-items: center;
  gap: 10px;
}

.fa-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .contact-form {
    padding: 30px 20px;
  }
  
  .toast-notification {
    top: 20px;
    right: 20px;
    left: 20px;
    min-width: auto;
    max-width: none;
  }
}
</style>

## 🔍 Possíveis Problemas:

### 1. **Formspree não está configurado corretamente**
- O endpoint pode não estar ativo
- Precisa verificar se o email está confirmado no Formspree

### 2. **Email indo para SPAM**
- Verifique sua pasta de spam/lixo eletrônico
- Emails do Formspree podem ser filtrados

### 3. **Configuração do formulário**
- Pode estar faltando alguma configuração

## 🛠️ Soluções:

### **Opção 1: Verificar Formspree**

1. **Acesse [formspree.io](https://formspree.io/)**
2. **Faça login na sua conta**
3. **Verifique se o form `xnnvnrzr` está ativo**
4. **Confirme se o email `victorgabrielboeri10@gmail.com` está verificado**

### **Opção 2: Melhorar o formulário**

Vou atualizar o Contact.vue para garantir que funcione: