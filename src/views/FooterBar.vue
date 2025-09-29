<script setup>
import resumePdf from '../assets/resume.pdf'
</script>

<template>
  <footer class="d-flex flex-column flex-sm-row gap-3 justify-content-between align-items-center mx-4 py-4">
    <aside class="d-flex gap-2 align-items-center">
      <a href="https://www.linkedin.com/in/connor-nieh" target="_blank" aria-label="LinkedIn profile">
        <i class="bi bi-linkedin fs-6 p-2 dark"></i>
      </a>
      <a href="mailto:connor.nieh@duke.edu" aria-label="Email profile">
        <i class="bi bi-envelope fs-5 p-2 dark"></i>
      </a>
      <button data-bs-toggle="modal" data-bs-target="#resumeModal" class="nav-btn dark d-none d-md-block">Resume</button>
      <a :href="resumePdf" download="Connor Nieh Resume.pdf" class="nav-btn dark d-block d-md-none">Resume</a>
    </aside>
    <p class="light px-2" style="font-size: 0.8rem;">© {{ new Date().getFullYear() }} - Connor Nieh</p>
  </footer>
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