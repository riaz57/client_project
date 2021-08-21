$(function(){

        // carousel slider
	$('#monitorscreen').owlCarousel({
        loop:true,
        margin:0,
        mouseDrag:false,
        autoplay:true,
        autoplayTimeout:5000,
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

        // sticky on scroll
    $(window).on('scroll', function(e) {
        var height = $('#background').outerHeight(true)/2;
        var scrollHeight = $(window).scrollTop();

        if(scrollHeight > height) {
            $('.helpline').addClass('sticky');
        }
        else {
            $('.helpline').removeClass('sticky');
        }
    });

});