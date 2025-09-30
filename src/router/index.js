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
  scrollBehavior(to, from, savedPosition) {
    // Use browser-saved position on back/forward navigation (don't override with hash)
    if (savedPosition) return savedPosition

    if (to.hash) {
      const navbar = document.querySelector('header')
      const navbarHeight = navbar ? navbar.offsetHeight : 96 // fallback
      const oneRem = parseFloat(getComputedStyle(document.documentElement).fontSize)
      const totalOffset = navbarHeight + oneRem
      
      return {
        el: to.hash,
        behavior: 'smooth',
        top: totalOffset
      }
    }

    // Scroll to top when navigating into a detail page
    if (to.name === 'detail') return { top: 0 }

    // Default: scroll to top
    return { top: 0 }
  },
})
