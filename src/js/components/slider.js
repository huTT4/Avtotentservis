import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

new Swiper('.works__slider', {
  modules: [Navigation],
  slidesPerView: 4,
  navigation: {
    nextEl: '.works__title-button-next',
    prevEl: '.works__title-button-prev'
  },
  breakpoints: {
    1240: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 3,
    },
    635: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1,
    }
  }
})
