// --------------------------------------------------order-btn--------------------------------------------------------
$(window).scroll(function(){
  let scroll = $(window).scrollTop();
  if(scroll > 10){
    $('.order').addClass('order--scale');
    $('.advant__item').addClass('advant__item--up') //-----------advant__cards------------
  }
  else if(scroll < 10){
    $('.order').removeClass('order--scale');
  }
  
  let cleaningPosition = $(".cleaning").position(); 
  if (scroll > (cleaningPosition.top - 150)) { 
    $(".order").addClass("order--fadeout");
  }
  else {
      $(".order").removeClass("order--fadeout");
  }

  if (scroll > (cleaningPosition.top)) {
    $(".cleaning__content").addClass("cleaning__content--active");
    // $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
  }
  else if (scroll > (cleaningPosition.top - 500)) {
    $(".cleaning__content").removeClass("cleaning__content--active");
  }
})
// --------------------------order-btn------------------------------------------
$('.order').mousemove(function (e) {
 
  
  let i = $(".order__circle"),
  s = e.pageX - i.offset().left,
  o = e.pageY - i.offset().top;
  
  TweenMax.to($('.order__circle'), .3, {
    x: (s - i.width() / 2) / i.width() * 55,
    y: (o - i.height() / 2) / i.height() * 55,
    rotate: 15,
    // scale: 1.2,


    ease: Power2.easeOut
  })
  
  TweenMax.to($('.order__text'), .3, {
    x: (s - i.width() / 2) / i.width() * 88,
    y: (o - i.height() / 2) / i.height() * 88,
    ease: Power2.easeOut
  })
  
});

$('.order').mouseleave(function (e) {
  
  
  let i = $(".order__circle"),
  s = e.pageX - i.offset().left,
  o = e.pageY - i.offset().top;
  TweenMax.to($('.order__circle'), .3, {
    x: 0,
    y: 0,
    rotate: 0,
    // scale: 1,
    ease: Power2.easeOut
  })
  
  TweenMax.to($('.order__text'), .3, {
    x: 0,
    y: 0,
    ease: Power2.easeOut
  })
  
});

// ---------------------------------------------toggle-place-item-----------------------------------------------------------
$('.header__place-item').on('click', function(e) {
  e.preventDefault()
  $('.header__place-item').removeClass('header__place-item--active');
  $(this).addClass('header__place-item--active');
});
// ---------------------------------------------activate-menu-----------------------------------------------------------
$('.menu-btn-pre').hover
(function() {
$('.header__top').addClass('header__top--active');
});

$('.header__inner, .header__contact-work_hours').hover
(function() {
$('.header__top').removeClass('header__top--active');
});

$('.menu-btn, .menu__item-link').on('click', function() {
  if ($(window).width() < 728) {
    $('.menu-btn').toggleClass('menu-btn--active');
    $('.menu').toggleClass('menu--active');
  }
  else {

 }
});
//--------------------------------------------advant-slider-------------------------------------------------------
if ($(window).width() < 51) {
  $('.advant__list').slick({
   
  });
}
// -----------------------------------------------cleaning--------------------------------------------------------
$('.cleaning__room-link').on('click', function(e) {
  e.preventDefault()
});

$('.cleaning__room-item').on('click', function() {
  $('.cleaning__room-item--active').removeClass('cleaning__room-item--active');
  $(this).addClass('cleaning__room-item--active');
});