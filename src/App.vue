<script setup>
import Navbar from './views/Navbar.vue'
import FooterBar from './views/FooterBar.vue'
</script>

<template>
  <Navbar />
  <router-view class="flex-fill"/>
  <FooterBar />
</template>

<style scoped>
</style>