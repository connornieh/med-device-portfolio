import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Detail from '@/views/Detail.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    {
      path: '/:type(devices|research)/:slug',
      name: 'detail',
      component: Detail,
      props: true,
    },
  ],
  // scrollBehavior(to) {
  //   if (to.hash) return { el: to.hash, behavior: 'smooth' }
  //   return { top: 0 }
  // },
})
