const reviewsSlider = new Swiper(".reviews__slider", {
  slidesPerView: 3,
  /* direction: "vertical", */
  /* effect: "cards", */
  loop: true,
  spaceBetween: 30,
  slidesOffsetBefore: 250,
  slidesOffsetAfter: 250,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

const blogSlider = new Swiper(".blog__slider", {
  slidesPerView: 2,
  /* direction: "vertical", */
  /* effect: "cards", */
  loop: true,
  spaceBetween: 30,
  slidesOffsetBefore: 250,
  slidesOffsetAfter: 250,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
