// ----------------------------------------- toggle-place-item ----------------------------------------
$('.header__place-item').on('click', function(e) {
  e.preventDefault()
  $('.header__place-item').removeClass('header__place-item--active');
  $(this).addClass('header__place-item--active');
});

// ------------------------------------------- sticky order-btn ----------------------------------------
$('.order').mousemove(function (e) {
   
  let i = $(".order__circle"),
  s = e.pageX - i.offset().left,
  o = e.pageY - i.offset().top;
  
  TweenMax.to($('.order__circle'), .3, {
    x: (s - i.width() / 2) / i.width() * 55,
    y: (o - i.height() / 2) / i.height() * 55,
    rotate: 15,
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
    ease: Power2.easeOut
  })
  
  TweenMax.to($('.order__text'), .3, {
    x: 0,
    y: 0,
    ease: Power2.easeOut
  })
  
});

// ------------------------------------------- animation on scroll ------------------------------------------------
$(window).scroll(function(){
  let scroll = $(window).scrollTop();
  let cleaningPosition = $(".cleaning").position(); 

  //----------- scale order-btn & move up advant__item -----------
  if(scroll > 10){
    $('.order').addClass('order--scale');
    $('.advant__item').addClass('advant__item--up')
  }
  else if(scroll < 10){
    $('.order').removeClass('order--scale');
  }
  
  //---------------- fade order0btn -------------------
    if (scroll > (cleaningPosition.top - 150)) { 
    $(".order").addClass("order--fadeout");
  }
  else {
    $(".order").removeClass("order--fadeout");
  }

  //----------- cleaning section --------------------
  //---------------------------- test Start -----------------

  
  // if($(window).scrollTop() + $(window).height() > $(document).height() -170) {
  // if($(window).scrollTop() + $(window).height() <= $(document).height() -170) {
  //   $(".cleaning__content").removeClass("cleaning__content--active");
  
  //   $('.cleaning__images-item').width( $('.container').width() * .76 );
  //   $('.cleaning__img').height( $('.cleaning__images-item').width() * .576 );
  //   $('.cleaning__images-item').height( $('.cleaning__img').height() );
  //   $('.cleaning__images').height( $('.cleaning__img').height() );
  // }
  // else {
  //   $(".cleaning__content").addClass("cleaning__content--active");
  
  //   $('.cleaning__img').height( $(window).height() );
  //   $('.cleaning__images-item').height( $(window).height() );
  //   $('.cleaning__images').height( $(window).height() );
  //   $('.cleaning__images-item').width( $('.cleaning__img').height() * 1.33125 );
  //   $('.cleaning__images').width( $('.cleaning__img').height() * 1.33125 );
  //   $('.cleaning__room-list').width( $('.container').width() - 60 - $('.cleaning__images-item').width() );
  // }

  //---------------------------- test End -----------------
  if($(window).scrollTop() + $(window).height() > $(document).height() -170) {
    $(".cleaning__content").addClass("cleaning__content--active");
  }
  else {
    $(".cleaning__content").removeClass("cleaning__content--active");
  }
})

//-------------------------------------------- advant-slider ----------------------------------------------------
if ($(document).width() < 451) {
  const swiperAdvant = new Swiper('.advant', {
    spaceBetween:  10, 
    speed: 500, 
    touchAngle: 15,
    
    pagination: {
      el: '.swiper-pagination',
     dynamicBullets: true,
    },
  });
}

// ----------------------------------------------- cleaning ------------------------------------------------------
let cleaningImgWidth = $('.cleaning__img').width();
$('.cleaning__img').height(cleaningImgWidth * .576);
// -----------------------------
$('.cleaning__room-item').on('click', function() {
  $('.cleaning__room-item').removeClass('cleaning__room-item--active');
  $(this).addClass('cleaning__room-item--active');
});

$('.cleaning__room-link').on('click', function() {
  $('.cleaning__room-link').removeClass('cleaning__room-link--active');
  $(this).addClass('cleaning__room-link--active');
  $('.cleaning__images-item').removeClass('cleaning__images-item--active');
  $($(this).attr('href')).addClass('cleaning__images-item--active');
});

// --------------------------------------------- activate-menu -----------------------------------------------------------
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
});

