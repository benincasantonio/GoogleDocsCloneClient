import NewDocumentView from '@/views/CreateDocumentView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'newDocument',
      component: NewDocumentView
    }
  ]
})

export default router
