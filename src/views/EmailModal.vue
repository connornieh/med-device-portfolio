<script setup>
  function openGmail() {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=connor.nieh@duke.edu`, '_blank')
  }

  function openOutlook() {
    window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=connor.nieh@duke.edu`, '_blank')
  }
</script>

<template>
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <p>connor.nieh@duke.edu</p>
        <button class="btn-close fs-6 text-danger" data-bs-dismiss="modal" data-bs-target="#emailModal"></button>
      </div>
      <div class="modal-body">
        <p>
          Use 
          <button class="text-primary text-decoration-underline bg-transparent border-0" @click="openGmail()">Gmail</button> 
          or 
          <button class="text-primary text-decoration-underline bg-transparent border-0" @click="openOutlook()">Outlook</button> 
        </p>
      </div>
    </div>
  </div>
</template>