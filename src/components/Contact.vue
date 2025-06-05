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
          <form action="https://formspree.io/f/xnnvnrzr" method="POST" @submit="handleSubmit">
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
            
            <!-- Campo oculto para identificar o remetente -->
            <input type="hidden" name="_subject" value="Nova mensagem do portfólio">
            <input type="hidden" name="_next" value="#contact">
            
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

const handleSubmit = (event: Event) => {
  isSubmitting.value = true;
  successMessage.value = '';
  errorMessage.value = '';
  
  // O Formspree vai lidar com o envio automaticamente
  // Vamos apenas mostrar feedback visual
  
  setTimeout(() => {
    successMessage.value = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
    isSubmitting.value = false;
    
    // Reset form após sucesso
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
    
    // Limpar mensagem após 5 segundos
    setTimeout(() => {
      successMessage.value = '';
    }, 5000);
  }, 1000);
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
}
</style>