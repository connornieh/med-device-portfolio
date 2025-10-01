export function handleEmailClick() {
  // First trigger mailto
  window.location.href = 'mailto:connor.nieh@duke.edu?subject=Portfolio Inquiry'
  
  // Then show modal after 1 second
  setTimeout(() => {
    const modal = new bootstrap.Modal(document.getElementById('emailModal'))
    modal.show()
  }, 1000)
}