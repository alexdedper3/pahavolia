$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass:"dots-style",
    // cssEase: 'linear',
    prevArrow:'<button type="button" class="slick-prev"><i class="fal fa-arrow-circle-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fal fa-arrow-circle-right"></i></button>'
    
  });
  $('.slider2').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 10000,
    dotsClass:"dots-style",
    arrows : false, 
  });

  $('.header_hamburger').click(function(event){
    $('.header_hamburger,.header_menu').toggleClass("active");
  });

  $(".suplement_composition .composit").each(function(i){
    $(this).on("click", function(){
      $(".compositdescr").removeClass("active");
      $(".compositdescr").eq(i).toggleClass("active");
    });
  });

}); 

// $(document).ready(function() {
//   $('.compositdescr').hide();
//   $('.composit').click(function functionName() {
//     let $answer = $(this).next('.compositdescr');
//     if ($answer.is(':hidden')) {
//       $answer.slideDown();
//       $(this).toggleClass('active');
//     } else {
//       $answer.fadeOut();
//       $(this).removeClass('active')
//     }
//   });
// });