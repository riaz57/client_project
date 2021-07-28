$(function() {
    
        /*== sidebar toggle on click ===*/
    $('.sidebar_toggle').on('click', function(event) {
        $('aside').toggleClass('open');

    });
        /*== active class on click ===*/
    var current_page_URL = location.href;
    $("aside a").each(function() {
     if ($(this).attr("href") !== "#") {
       var target_URL = $(this).prop("href");
       if (target_URL == current_page_URL) {
          $('aside a').parents('li').removeClass('active');
          $(this).parent('li').addClass('active');
          return false;
       }
     }
    });



});