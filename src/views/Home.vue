<template>
  <Header />
  <About />
  <Skills />
  <Experience />
  <Projects :showLimited="true" />
  <Contact />
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Experience from '../components/Experience.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
</script>