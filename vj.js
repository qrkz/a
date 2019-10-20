var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 0,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  autoHeight: true,
  spaceBetween: 10,
  keyboard: {enabled: true,},
  thumbs: {
    swiper: galleryThumbs
  }
});
