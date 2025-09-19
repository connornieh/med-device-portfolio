<script setup>
import { devices } from '../data';

// Function to get image URL
const getImageUrl = (imageName) => {
  return new URL(`../assets/${imageName}`, import.meta.url).href;
};
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <div v-for="device in devices" :key="device.title" class="card d-flex flex-column p-4 rounded-5 shadow-sm">
      <h5 class="fw-normal mb-4">{{ device.title }}</h5>
      <div class="content d-flex align-items-center gap-4">
        <img v-if="device.image" :src="getImageUrl(device.image)" :alt="device.title" class="photo rounded-4 border"/>
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

  .text {
    text-align: justify;
  }

  .content {
    flex-direction: column;
  }

  .photo {
    width: 75%;
  }

  @media (min-width: 1000px) {
    .photo {
      width: 30%;
    }
    .content {
    flex-direction: row;
    }
  }

  @media (min-width: 1400px) {
    .photo {
      width: 20%;
    }
  }

  @media (max-width: 800px) {

  }
</style>