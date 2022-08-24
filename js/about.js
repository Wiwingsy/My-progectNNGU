//init swiper
var menu = ['1', '2', '3']
const swiper1 = new Swiper('.section-photos__swiper', {
  direction: 'vertical',
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 10,
  slideToClickedSlide: true, // щелкните, чтобы перейти к соответствующему слайду
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
  },
});

//init swiper News
var menu = ['1', '2', '3']
const swiper = new Swiper('.slider-news', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 30,
  slideToClickedSlide: true, // щелкните, чтобы перейти к соответствующему слайду
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
  },
});