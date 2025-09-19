<script setup>
import { devices } from '../data';

// Function to get image URL
const getImageUrl = (imageName) => {
  return new URL(`../assets/${imageName}`, import.meta.url).href;
};
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <div v-for="device in devices" :key="device.title" class="card d-flex align-items-center justify-content-between gap-2 p-4 rounded-5 shadow-sm">
      <img v-if="device.image" :src="getImageUrl(device.image)" :alt="device.title" class="photo rounded-4 border"/>
      <div class="content">
        <h5 class="fw-normal mb-4">{{ device.title }}</h5>
        <p class="text">
          {{ device.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .photo {
    width: 40%;
  }

  .card {
    flex-direction: row;
  }
  .content {
    padding: 1rem
  }
  .text {
    text-align: justify;
  }

  @media (min-width: 1000px) {
    .photo {
      width: 30%;
    }
  }

  @media (min-width: 1400px) {
    .photo {
      width: 20%;
    }
  }

  @media (max-width: 800px) {
    .card {
      flex-direction: column;
    }
    .photo {
      width: 75%;
    }
  }
</style>