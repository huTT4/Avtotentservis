const headerItems = document.querySelectorAll('.header__nav-item--arrow')

document.body.addEventListener('click', (e) => {
  const targetItem = e.target.closest('.header__nav-item--arrow')

  if (targetItem) e.preventDefault()

  // Клик вне элементов
  if (!targetItem) {
    close()
    return
  }

  // Клик по активному элементу
  if (targetItem.classList.contains('header__nav-item--arrow--active')) {
    targetItem.classList.remove('header__nav-item--arrow--active')
    return
  }

  close()

  targetItem.classList.add('header__nav-item--arrow--active')
})

// Закрытие при скролле
window.addEventListener('scroll', close)

function close() {
  headerItems.forEach(item => {
    item.classList.remove('header__nav-item--arrow--active')
  })
}
