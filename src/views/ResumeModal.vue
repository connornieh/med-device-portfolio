<script setup>
import resumePdf from '../assets/resume.pdf'
</script>

<template>
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <a :href="resumePdf" download="Connor Nieh Resume.pdf" class="pe-2 text-primary text-decoration-none">
            Download
            <i class="bi bi-download fs-6"></i>
          </a>
          <button class="btn-close fs-6 text-danger" data-bs-dismiss="modal" data-bs-target="#resumeModal"></button>
        </div>
        <div class="modal-body">
          <img src="../assets/resume.png" alt="Resume" class="img-fluid">
        </div>
      </div>
    </div>
</template>