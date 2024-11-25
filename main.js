document.querySelectorAll('.dropdown-toggle').forEach(item => {
  item.addEventListener('click', event => {

    if (event.target.classList.contains('dropdown-toggle')) {
      event.target.classList.toggle('toggle-change');
    }
    else if (event.target.parentElement.classList.contains('dropdown-toggle')) {
      event.target.parentElement.classList.toggle('toggle-change');
    }
  })
});





$('#promoCarousel.carousel .carousel-item').each(function () {
  var minPerSlide = 1;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) { next = $(this).siblings(':first'); }
    next.children(':first-child').clone().appendTo($(this));
  }
});

var myCarousel = document.querySelector('#promoCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 10000,

})

const element = document.querySelector(".events-panel .main-row");

element.addEventListener('wheel', (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,

  });
});

$('.gallery-panel .nav-tabs-dropdown')
  .on("click", "li:not('.active') a", function (event) {
    $(this).closest('ul').removeClass("open");
  })
  .on("click", "li.active a", function (event) {
    $(this).closest('ul').toggleClass("open");
  });