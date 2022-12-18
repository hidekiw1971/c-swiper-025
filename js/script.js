jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // ↓ここからコードを書く
  var swiper = new Swiper(".mySwiper1", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
  // ↑下は閉じカッコなので消さない
});
