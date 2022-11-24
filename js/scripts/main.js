var slideCharacters = new Swiper(".slide-characters", {
  slidesPerView: 4.5,
  spaceBetween: 19,
  breakpoints: {
    320: {
      slidesPerView: 1.1
    },
    600: {
      slidesPerView: 2.1
    },
    991: {
      slidesPerView: 2.5
    },
    1100: {
      slidesPerView: 3.2
    },
    1200: {
      slidesPerView: 3.5
    },
    1800: {
      slidesPerView: 4.5
    }
  }  
});

AOS.init({  
  once: true,
  duration: 1000,
});