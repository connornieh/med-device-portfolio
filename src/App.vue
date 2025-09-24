<script setup>
import Home from './components/Home.vue'
import Devices from './components/Devices.vue'
import Research from './components/Research.vue'
import ResumeModal from './components/ResumeModal.vue'
import { ref } from 'vue'
import resumePdf from './assets/resume.pdf'

const showMobileMenu = ref(false)
</script>

<template>
  <header style="height: 5rem;" class="d-flex justify-content-between px-4 align-items-center bg-white sticky-top" :class="{ 'shadow-sm': !showMobileMenu, 'rounded-4': !showMobileMenu }">
    <h5 href="#home" class="fw-normal dark" role="button">Connor Nieh</h5>
    <nav class="d-none d-md-flex gap-2">
      <a href="#home" class="nav-btn dark">Home</a>
      <a href="#devices" class="nav-btn dark">Devices</a>
      <a href="#research" class="nav-btn dark">Research</a>
    </nav>
    <aside class="d-none d-md-flex gap-2 align-items-center">
      <a href="https://www.linkedin.com/in/connor-nieh" target="_blank" aria-label="LinkedIn profile">
        <i class="bi bi-linkedin fs-6 p-2 dark"></i>
      </a>
      <a href="mailto:connor.nieh@duke.edu" aria-label="Email profile">
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
    <a href="#home" class="nav-btn dark" @click="showMobileMenu = false">Home</a>
    <a href="#devices" class="nav-btn dark" @click="showMobileMenu = false">Devices</a>
    <a href="#research" class="nav-btn dark" @click="showMobileMenu = false">Research</a>
    <a href="https://www.linkedin.com/in/connor-nieh" target="_blank" aria-label="LinkedIn profile" class="nav-btn dark" @click="showMobileMenu = false">LinkedIn</a>
    <a href="mailto:connor.nieh@duke.edu" aria-label="Email profile" class="nav-btn dark" @click="showMobileMenu = false">Email</a>
    <a :href="resumePdf" download="Connor Nieh Resume.pdf" class="nav-btn dark" @click="showMobileMenu = false">Resume</a>
  </nav>

  <main class="flex-fill d-flex flex-column align-items-center py-3 mx-3 border-bottom">
    <section id="home">
      <Home />
    </section>
    <section id="devices" class="border-bottom mb-3 pb-3">
      <Devices />   
    </section>
    <section id="research">
      <Research />
    </section>
    <div class="modal fade" id="resumeModal">
      <ResumeModal />
    </div>
  </main>

  <footer class="d-flex flex-column flex-sm-row gap-3 justify-content-between align-items-center mx-4 py-4">
    <aside class="d-flex gap-2 align-items-center">
      <a href="https://www.linkedin.com/in/connor-nieh" target="_blank" aria-label="LinkedIn profile">
        <i class="bi bi-linkedin fs-6 p-2 dark"></i>
      </a>
      <a href="mailto:connor.nieh@duke.edu" aria-label="Email profile">
        <i class="bi bi-envelope fs-5 p-2 dark"></i>
      </a>
      <button data-bs-toggle="modal" data-bs-target="#resumeModal" class="nav-btn dark d-none d-sm-block">Resume</button>
      <a :href="resumePdf" download="Connor Nieh Resume.pdf" class="nav-btn dark d-block d-sm-none">Resume</a>
    </aside>
    <p class="light px-2" style="font-size: 0.8rem;">© {{ new Date().getFullYear() }} - Connor Nieh</p>
  </footer>
</template>

<style scoped>
  html {
    scroll-behavior: smooth;
  }

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
  
  #home {
    height: calc(100vh - 6rem);
  }

  section {
    width: 50rem;
    scroll-margin-top: 6rem;
  }

  @media (min-width: 1100px) {
    section {
      width: 60rem;
    }
  }

  @media (max-width: 900px) {

    section {
      width: 100%;
    }

    #home {
      height: fit-content;
    }
  }

</style>