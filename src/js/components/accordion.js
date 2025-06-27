const accordionItems = document.querySelectorAll('.questions__accordion-item')

accordionItems.forEach(item => {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('questions__accordion-item-header') || e.target.parentNode.classList.contains('questions__accordion-item-header')) {
      for (const item of accordionItems) {
        item.classList.remove('questions__accordion-item--active')
      }

      const header = item.childNodes[1]
      header.parentNode.classList.add('questions__accordion-item--active')
    }
  })
})
