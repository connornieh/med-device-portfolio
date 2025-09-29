<script setup>
import About from './About.vue'
import { devices, research } from '../data';
import ResumeModal from './ResumeModal.vue'
</script>

<template>
  <main class="flex-fill d-flex flex-column align-items-center py-3 mx-3 border-bottom">
    <section id="about">
      <About />
    </section>
    <section id="devices" class="">
      <h4 class="mb-1 dark fw-light">Medical Devices</h4>
      <p class="medium mb-4 fw-light">Click each card to learn more about my projects!</p>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4"> 
        <div v-for="device in devices" :key="device.slug" class="col">
          <router-link class="text-decoration-none" :to="{ name: 'detail', params: { type: 'devices', slug: device.slug } }">
            <div class="border rounded-3 shadow-sm p-3 text-decoration-none">
              <div class="ratio ratio-4x3 overflow-hidden border rounded-2 mb-3 bg-light">
                <p v-if="!device.images" class="d-flex justify-content-center align-items-center medium">Photos coming soon!</p>
                <img v-else :src="device.images[0]" class="w-100 h-100 object-fit-cover" />
              </div>
              <div>
                <p class="fs-6 dark">{{ device.title }}</p>
                <p class="time light">{{ device.time }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div> 
    </section>
    <div class="line border-bottom my-3 my-lg-5"></div>
    <section id="research" class="mb-lg-5">
      <h4 class="mb-1 dark fw-light">Research</h4>
      <p class="medium mb-4 fw-light">Click each card to learn more about my professional experiences!</p>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4"> 
        <div v-for="research in research" :key="research.slug" class="col">
          <router-link class="text-decoration-none" :to="{ name: 'detail', params: { type: 'research', slug: research.slug } }">
            <div class="border rounded-3 shadow-sm p-3 h-100">
              <div class="ratio ratio-4x3 overflow-hidden border rounded-2 mb-3 bg-light">
                <p v-if="!research.images" class="d-flex justify-content-center align-items-center medium">Photos coming soon!</p>
                <img v-else :src="research.images[0]" class="w-100 h-100 object-fit-cover" />
              </div>
              <div>
                <p class="fs-6 dark">{{ research.title }}</p>
                <p class="time light">{{ research.time }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <div class="modal fade" id="resumeModal">
      <ResumeModal />
    </div>
  </main>
</template>

<style scoped>
  html {
    scroll-behavior: smooth;
  }
  
  #about {
    height: calc(100vh - 6rem);
  }

  section, .line{
    width: 60rem;
    scroll-margin-top: 6rem;
  }

  .time {
    font-size: 0.8rem;
  }

  @media (min-width: 1200px) {
    section, .line{
      width: 70rem;
    }
  }

  @media (max-width: 1000px) {

    section, .line{
      width: 100%;
    }

    #about {
      height: fit-content;
    }
  }
</style>