/*
* ----------------------------------------------------------------------------------------
    Jquery custom code file
* ----------------------------------------------------------------------------------------
*/
$(function(){

         // carousel slider
    $('#slider_area').owlCarousel({
        loop:true,
        margin:0,
        mouseDrag:false,
        autoplay:true,
        autoplayTimeout:8000,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        items:1,
        mouseDrag:false,
        touchDrag:true,
        autoplaySpeed:1500,
        navSpeed:1500,
        navText: ['<i class="fas fa-angle-left"><i>','<i class="fas fa-angle-right"><i>'],
        navElement: 'a'
    });






















});
