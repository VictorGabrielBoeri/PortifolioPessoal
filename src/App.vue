<template>
  <div id="app">
    <Header />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>

<style>
#app {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
}
</style>