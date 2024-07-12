$(".responsive").slick({
  // dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});