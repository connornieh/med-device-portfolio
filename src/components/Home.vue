<template>
  <div class="card d-flex align-items-center justify-content-between gap-2 p-4 rounded-5 shadow-sm">
    <img src="../assets/portrait.jpg" alt="Headshot" class="photo rounded-4 border"></img>
    <p class="text">
      &nbsp;&nbsp;&nbsp;&nbsp;Hi! I'm Connor, a bioengineer with a B.S. in Bioengineering 
      from UC Riverside, currently pursuing an M.Eng in Med Tech Design at Duke University. 
      I am passionate about applying my strong background in biomedical research and expertise 
      in the design process to create patient-driven innovations with impactful clinical 
      applications. My goal is to contribute to a healthcare landscape that is not only more 
      effective but also more inclusive, using technology as a tool to drive health equity 
      and ensure that high-quality care is accessible to all.
    </p>
  </div>
</template>

<style scoped>
  .photo {
    width: 40%;
  }

  .card {
    flex-direction: row;
  }

  .text {
    text-align: justify;
    padding: 1rem
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