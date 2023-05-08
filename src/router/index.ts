import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ToBePublishedView from '@/views/ToBePublishedView.vue'
import PublisherView from '@/views/PublisherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/to-be-published',
      component: ToBePublishedView
    },
    {
      path: '/to-be-published/:publisher',
      component: PublisherView
    }
  ]
})

export default router
