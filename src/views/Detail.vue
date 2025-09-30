<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { devices, research } from '@/data'
import { ref, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const router = useRouter()

const type = computed(() => route.params.type)      // 'devices' | 'research'
const slug = computed(() => decodeURIComponent(route.params.slug))

const list = computed(() => (type.value === 'devices' ? devices : research))
const item = computed(() => list.value.find(x => x.slug === slug.value))
const images = computed(() => item.value?.images ?? [])
const hasImages = computed(() => images.value.length > 0)

if (!item.value) router.replace({ name: 'home' })

const current = ref(0)
let timer

function next() {
  if (hasImages.value) current.value = (current.value + 1) % images.value.length
}
function prev() {
  if (hasImages.value) current.value = (current.value - 1 + images.value.length) % images.value.length
}

function pauseTimer() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function resumeTimer() {
  if (!timer && images.value.length > 1) {
    timer = setInterval(next, 5000)
  }
}

onMounted(() => { if (images.value.length > 1) timer = setInterval(next, 5000) })
onUnmounted(() => clearInterval(timer))

</script>

<template>
  <main class="flex-fill d-flex flex-column align-items-center py-3 mx-3 border-bottom">
    <div v-if="item" class="item d-flex flex-column align-items-center gap-3">
      <div class="overview-card d-flex w-100 border rounded-4 shadow-sm p-3 gap-3">
        <div class="image d-flex align-items-center justify-content-center">
          <div v-if="hasImages" class="rounded-3 border ratio ratio-4x3 overflow-hidden" @mouseenter="pauseTimer" @mouseleave="resumeTimer">
            <img :src="item.images[current]" class="w-100 h-100 object-fit-cover bg-white" />
            <div v-if="item.images.length > 1" class="d-flex align-items-end justify-content-center">
              <div class="d-flex p-4 gap-2">
                <button
                  v-for="(image, index) in item.images"
                  :key="index"
                  @click="current = index"
                  class="indicator"
                  :class="{ active: current === index }"
                ></button>
              </div>
            </div>
            <div v-if="item.images.length > 1" class="d-flex justify-content-between">
              <button @click="prev" class="p-3 bg-transparent border-0">
                <i class="bi bi-chevron-left fs-2 medium"></i>
              </button>
              <button @click="next" class="p-3 bg-transparent border-0">
                <i class="bi bi-chevron-right fs-2 medium"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="info p-2" :class="hasImages ? 'half' : 'full'"> 
          <h4 class="dark fw-light">{{ item.title }}</h4>
          <p class="mb-3 light fw-light">{{ item.time }}</p>
          <p class="text fw-light dark" style="text-align: justify;">
            &nbsp;&nbsp;&nbsp;&nbsp;{{ item.description }}
          </p>
        </div>
      </div>
      <div class="d-flex flex-column flex-lg-row gap-3 w-100">
        <div class="w-100 w-lg-50 rounded-4 shadow-sm p-3 border">
          <h4 class="dark fw-light mb-3">Tasks</h4>
          <ul class="m-0 ps-3">
            <li v-for="task in item.tasks" :key="task" class="mx-0 my-2 fw-light">{{ task }}</li>
          </ul>
        </div>
        <div class="w-100 w-lg-50 rounded-4 shadow-sm p-3 border">
          <h4 class="dark fw-light mb-3">Skills</h4>
          <ul class="m-0 ps-3">
            <li v-for="skill in item.skills" :key="skill" class="mx-0 my-2 fw-light">{{ skill }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <h3>Not Found</h3>
    </div>
  </main>
</template>

<style scoped>
  .item {
    width: 60rem;
  }

  .image {
    width: 50%;
  }

  .half {
    width: 50%;
  }

  .full {
    width: 100%;
  }

  li::marker { 
    font-size: 0.75rem; 
  }

  .indicator {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    border: 1px solid #777;
    background-color: #FFF;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .indicator.active {
    background-color: #777;
    border: 1px solid #FFF;
  }

  @media (min-width: 1200px) {
    .item {
      width: 70rem;
    }
  }

  @media (max-width: 1000px) {
    .item {
      width: 100%;
    }

    .overview-card {
      flex-direction: column;
    }

    .image {
      width: 100%;
    }

    .info {
      padding: 1rem 0 0 0;
      width: 100%;
    }
  }
</style>