<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import resumePdf from '../assets/resume.pdf'
  import { handleEmailClick } from '../util/util.js'

  const router = useRouter()
  const showMobileMenu = ref(false)

  function navigateToHome() {
    router.push({ name: 'home' })
    showMobileMenu.value = false
  }

  function navigateToSection(section) {
    router.push({ name: 'home', hash: `#${section}` })
    showMobileMenu.value = false
  }
</script>

<template>
  <header style="height: 5rem;" class="d-flex justify-content-between px-4 align-items-center bg-white sticky-top" :class="{ 'shadow-sm': !showMobileMenu, 'rounded-4': !showMobileMenu }">
    <h5 class="fw-normal dark">Connor Nieh</h5>
    <nav class="d-none d-md-flex gap-2">
      <button @click="navigateToHome" class="nav-btn dark">Home</button>
      <button @click="navigateToSection('devices')" class="nav-btn dark">Devices</button>
      <button @click="navigateToSection('research')" class="nav-btn dark">Research</button>
    </nav>
    <aside class="d-none d-md-flex gap-2 align-items-center">
      <a href="https://www.linkedin.com/in/connor-nieh" target="_blank" aria-label="LinkedIn profile">
        <i class="bi bi-linkedin fs-6 p-2 dark"></i>
      </a>
      <a @click="handleEmailClick();" aria-label="Email profile">
        <i class="bi bi-envelope fs-5 p-2 dark"></i>
      </a>
      <button data-bs-toggle="modal" data-bs-target="#resumeModal" class="nav-btn dark">Resume</button>
    </aside>
    <button class="d-block d-md-none border-0 bg-transparent fs-3" @click="showMobileMenu = !showMobileMenu" aria-label="Toggle navigation">
      <i v-if="!showMobileMenu" class="bi bi-list dark"></i>
      <i v-else class="bi bi-x fs-1 dark"></i>
    </button>
  </header>
  <nav style="top: 5rem;" class="position-fixed z-1 w-100 align-items-center pb-4 gap-2 rounded-bottom-4 shadow-sm bg-white d-flex d-md-none flex-column" :class="{ 'd-none': !showMobileMenu }">
    <button @click="navigateToHome" class="nav-btn dark">Home</button>
    <button @click="navigateToSection('devices')" class="nav-btn dark">Devices</button>
    <button @click="navigateToSection('research')" class="nav-btn dark">Research</button>
    <a href="https://www.linkedin.com/in/connor-nieh" target="_blank" aria-label="LinkedIn profile" class="nav-btn dark" @click="showMobileMenu = false">LinkedIn</a>
    <a @click="handleEmailClick(); showMobileMenu = false" aria-label="Email profile" class="nav-btn dark">Email</a>
    <a :href="resumePdf" download="Connor Nieh Resume.pdf" class="nav-btn dark" @click="showMobileMenu = false">Resume</a>
  </nav>
</template>

<style scoped>
  .nav-btn {
    background-color: white;
    padding: 0.25rem 0.5rem;
    border: none;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    text-decoration: none;
  }

  .nav-btn:hover {
    background-color: #EEEEEE;
  }
</style>