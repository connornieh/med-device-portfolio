<script setup>
import Home from './components/Home.vue'
import Devices from './components/Devices.vue'
import Research from './components/Research.vue'
import ResumeModal from './components/ResumeModal.vue'
import { ref } from 'vue'

const activeTab = ref('home')
const showMobileMenu = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

const setActiveTab = (tab) => {
  activeTab.value = tab
  setTimeout(() => {scrollToTop()}, 50)
}

const setActiveTabMobile = (tab) => {
  activeTab.value = tab
  showMobileMenu.value = false
  setTimeout(() => {scrollToTop()}, 50)
}
</script>

<template>
  <header style="height: 5rem;" :class="['d-flex', 'justify-content-between', 'px-4', 'align-items-center', 'bg-white', 'sticky-top', { 'shadow-sm': !showMobileMenu, 'rounded-4': !showMobileMenu }]">
    <h4 @click="setActiveTab('home')" class="fw-normal" role="button">Connor Nieh</h4>
    <nav class="d-none d-md-flex gap-2">
      <button @click="setActiveTab('home')" :class="['nav-btn', { active: activeTab === 'home' }]">Home</button>
      <button @click="setActiveTab('devices')" :class="['nav-btn', { active: activeTab === 'devices' }]">Devices</button>
      <button @click="setActiveTab('research')" :class="['nav-btn', { active: activeTab === 'research' }]">Research</button>
    </nav>
    <aside class="d-none d-md-flex gap-2 align-items-center">
      <a href="https://www.linkedin.com/in/connor-nieh" target="_blank" aria-label="LinkedIn profile">
        <i class="bi bi-linkedin fs-6 p-2 text-dark"></i>
      </a>
      <a href="mailto:connor.nieh@duke.edu" aria-label="Email profile">
        <i class="bi bi-envelope fs-5 p-2 text-dark"></i>
      </a>
      <button data-bs-toggle="modal" data-bs-target="#resumeModal" class="text-dark nav-btn text-decoration-underline">Resume</button>
    </aside>
    <button class="d-block d-md-none border-0 bg-transparent fs-3" @click="showMobileMenu = !showMobileMenu" aria-label="Toggle navigation">
      <i v-if="!showMobileMenu" class="text-dark bi bi-list"></i>
      <i v-else class="text-dark bi bi-x fs-1"></i>
    </button>
  </header>
  <nav style="top: 5rem;" class="position-fixed z-1 w-100 align-items-center pb-4 gap-2 rounded-4 shadow-sm bg-white d-flex d-md-none flex-column" :class="{ 'd-none': !showMobileMenu }">
    <button @click="setActiveTabMobile('home')" :class="['nav-btn', { active: activeTab === 'home' }]">Home</button>
    <button @click="setActiveTabMobile('devices')" :class="['nav-btn', { active: activeTab === 'devices' }]">Devices</button>
    <button @click="setActiveTabMobile('research')" :class="['nav-btn', { active: activeTab === 'research' }]">Research</button>
    <a href="https://www.linkedin.com/in/connor-nieh" target="_blank" aria-label="LinkedIn profile" class="nav-btn text-decoration-none text-black text-center" @click="showMobileMenu = false">LinkedIn</a>
    <a href="mailto:connor.nieh@duke.edu" aria-label="Email profile" class="nav-btn text-decoration-none text-black text-center" @click="showMobileMenu = false">Email</a>
    <button data-bs-toggle="modal" data-bs-target="#resumeModal" class="nav-btn" @click="showMobileMenu = false">Resume</button>
  </nav>

  <main class="flex-fill d-flex justify-content-center">
    <div class="my-4 content">
      <section v-if="activeTab === 'home'" class="">
        <Home />
      </section>
      <section v-if="activeTab === 'devices'" class="">
        <Devices />
      </section>
      <section v-if="activeTab === 'research'" class="">
        <Research />
      </section>
      <div class="modal fade" id="resumeModal">
        <ResumeModal />
      </div>
    </div>
  </main>

  <footer class="d-flex flex-column flex-sm-row gap-3 justify-content-between align-items-center border-top mx-4 py-4">
    <aside class="d-flex gap-2 align-items-center">
      <a href="https://www.linkedin.com/in/connor-nieh" target="_blank" aria-label="LinkedIn profile">
        <i class="bi bi-linkedin fs-6 text-dark p-2"></i>
      </a>
      <a href="mailto:connor.nieh@duke.edu" aria-label="Email profile">
        <i class="bi bi-envelope fs-5 text-dark p-2"></i>
      </a>
      <button data-bs-toggle="modal" data-bs-target="#resumeModal" class="text-dark nav-btn text-decoration-underline">Resume</button>
    </aside>
    <p class="fw-light text-muted px-2">© {{ new Date().getFullYear() }} - Connor Nieh</p>
  </footer>
</template>

<style scoped>
  .nav-btn {
    background-color: white;
    padding: 0.25rem 0.5rem;
    border: none;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    color: black;
  }

  .nav-btn:hover {
    background-color: #F4F4F4;
  }

  .active {
    background-color: #E2E2E2;
  }

  .content {
    width: 75%;
  }

  @media (min-width: 1400px) {
    .content {
      width: 60%;
    }
    
  }

  @media (max-width: 800px) {
    .content {
      width: 100%;
      padding: 0 1rem;
    }
  }
</style>