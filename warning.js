const openWarning = document.querySelectorAll('[data-modal-target]')
const closeWarning = document.querySelectorAll('[data-close-button]')
const overlayLogout = document.getElementById('overlayLogout')

openWarning.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlayLogout.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modalLogout.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeWarning.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modalLogout')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
