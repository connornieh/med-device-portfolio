<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import portrait1 from '../assets/portrait.jpg'
  import portrait2 from '../assets/terasaki-award.png'
  import portrait3 from '../assets/MII-OCT-pres.png'
  import portrait4 from '../assets/TIME-pres.png'

  const slides = [portrait1, portrait2, portrait3, portrait4]
  const current = ref(0)
  let timer

  function next() {
    current.value = (current.value + 1) % slides.length
  }
  function prev() {
    current.value = (current.value - 1 + slides.length) % slides.length
  }

  onMounted(() => { timer = setInterval(next, 5000) })
  onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="d-flex flex-column align-items-center h-100 py-3">
    <div class="about d-flex w-100 border rounded-4 shadow-sm p-3">
      <div class="image rounded-3 border ratio ratio-1x1 overflow-hidden">
        <img :src="slides[current]" class="w-100 h-100 object-fit-cover" />
        <div class="d-flex align-items-end justify-content-center">
          <div class="d-flex p-4 gap-2">
            <button
              v-for="(slide, index) in slides"
              :key="index"
              @click="current = index"
              class="indicator"
              :class="{ active: current === index }"
            ></button>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <button @click="prev" class="p-3 bg-transparent border-0">
            <i class="bi bi-chevron-left text-white fs-2"></i>
          </button>
          <button @click="next" class="p-3 bg-transparent border-0">
            <i class="bi bi-chevron-right text-white fs-2"></i>
          </button>
        </div>
      </div>
      <div class="info p-4">
        <h4 class="mb-3 dark fw-light">Hey there, I'm Connor 🤙</h4>
        <p class="text fw-light medium" style="text-align: justify;">
          &nbsp;&nbsp;&nbsp;&nbsp;I am a bioengineer with a B.S. in Bioengineering 
          from UC Riverside, currently pursuing an M.Eng in Med Tech Design at Duke University. 
          I am passionate about applying my strong background in biomedical research and expertise 
          in the design process to create patient-driven innovations with impactful clinical 
          applications. My goal is to contribute to a healthcare landscape that is not only more 
          effective but also more inclusive, using technology as a tool to drive health equity 
          and ensure that high-quality care is accessible to all.
        </p>
      </div>
    </div>
    <div class="actions w-100 flex-md-grow-1 d-flex justify-content-evenly align-items-center">
      <a href="https://www.linkedin.com/in/connor-nieh" target="_blank" aria-label="LinkedIn profile" class="action text-center text-decoration-none bg-white border rounded-4 py-2 px-4 shadow-sm dark" role="button">Connect on LinkedIn!</a>
      <a href="mailto:connor.nieh@duke.edu" aria-label="Email profile" class="action text-center text-decoration-none bg-white border rounded-4 py-2 px-4 shadow-sm dark" role="button">Email Me!</a>
      <button data-bs-toggle="modal" data-bs-target="#resumeModal" class="action text-center text-decoration-none bg-white border rounded-4 py-2 px-4 shadow-sm dark" role="button">View my Resume!</button>
    </div>
    <div class="w-100">
      <div class="d-flex align-items-center">
        <hr class="flex-grow-1 me-2" />
        <p class="text-center light" style="font-size: 0.8rem;">
          Scroll to see my projects and professional experiences!
        </p>
        <hr class="flex-grow-1 ms-2" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  @media (min-width: 1100px) {
    .text {
      font-size: 1.2rem;
    }
  }

  .image {
    width: 50%;
  }
  
  .info {
    width: 50%;
  }

  @media (max-width: 900px) {
    .about {
      flex-direction: column;
    }

    .image {
      width: 100%;
    }

    .info {
      width: 100%;
    }

    .action {
      width: 100%;
    }

    .actions {
      width: 100%;
      flex-direction: column;
      padding: 1rem 0;
      gap: 1rem;
    }
  }

  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .indicator.active {
    background-color: #FFF;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
  }
</style>