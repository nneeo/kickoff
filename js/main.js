(function ($) {
 "use strict";







 // Menu sticky
 $(".header").sticky({topSpacing:0});













/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();

/*----------------------------
 wow js active
------------------------------ */
var wow = new WOW({
       boxClass:     'wow',
       animateClass: 'animatedd',
       offset:       0,
       mobile:       true,
       live:         true
     })
  wow.init();

/*----------------------------
 owl active
------------------------------ */
$('.kickOff-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoplayTimeout:10000,
    autoplay:true,
    animateIn:'fadeIn',
    animateOut:'fadeOut',
    navText:['<i class="icofont icofont-thin-left"></i>','<i class="icofont icofont-thin-right"></i>']

})
/*----------------------------
 owl active
------------------------------ */
$('.client-logo-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:6,
    autoplayTimeout:10000,
    autoplay:true,
    animateIn:'fadeIn',
    animateOut:'fadeOut',
    navText:['<i class="icofont icofont-thin-left"></i>','<i class="icofont icofont-thin-right"></i>']

})



	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

})(jQuery);
