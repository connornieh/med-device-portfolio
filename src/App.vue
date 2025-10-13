<script setup>
import Navbar from './views/Navbar.vue'
import FooterBar from './views/FooterBar.vue'
import ResumeModal from './views/ResumeModal.vue'
import EmailModal from './views/EmailModal.vue'
</script>

<template>
  <Navbar />
  <router-view class="flex-fill"/>
  <FooterBar />
  
  <!-- Global modals available on all pages -->
  <div class="modal fade" id="resumeModal">
    <ResumeModal />
  </div>
  <div class="modal fade" id="emailModal">
    <EmailModal />
  </div>
</template>