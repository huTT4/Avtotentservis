const burgerBtn = document.querySelector('.burger__btn')
const burgerMenu = document.querySelector('.burger__menu')

document.body.addEventListener('click', (e) => {
  if (e.target === burgerBtn) {
    toggle()
  } else if (!e.target.closest('.burger__menu')) {
    close()
  }
})
window.addEventListener('scroll', close)

function toggle() {
  burgerBtn.classList.toggle('burger__btn--active')
  burgerMenu.classList.toggle('burger__menu--active')
}

function close() {
  if (burgerBtn.classList.contains('burger__btn--active')) {
    burgerBtn.classList.remove('burger__btn--active')
    burgerMenu.classList.remove('burger__menu--active')
  }
}
