new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'project-bullet',
    bulletActiveClass: 'project-bullet-active',
    clickable: true
  },
});