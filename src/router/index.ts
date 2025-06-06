import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AllProjects from '../views/AllProjects.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projetos',
    name: 'AllProjects',
    component: AllProjects
  }
]

// Adicionar scrollBehavior ao router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes
  ],
  scrollBehavior(to, from, savedPosition) {
    // Sempre scroll para o topo ao navegar para uma nova rota
    return { top: 0, behavior: 'smooth' }
  }
})

export default router