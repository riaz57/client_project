$(document).ready(function() {
		/*=== show/hide aside box on click  ===*/
	$('#aside_box').after().on('click', function(event) {
		$('#aside_box').toggleClass('open');
	});
		/*=== adding value on keypress  ===*/
	$("#total").val("0");
	$(".key").val("");

	function calc() {
	var $num1 = ($.trim($(".num1").val()) != "" && !isNaN($(".num1").val())) ? parseInt($(".num1").val()) : 0;
	var $num2 = ($.trim($(".num2").val()) != "" && !isNaN($(".num2").val())) ? parseInt($(".num2").val()) : 0;
	var $num3 = ($.trim($(".num3").val()) != "" && !isNaN($(".num3").val())) ? parseInt($(".num3").val()) : 0;
	var $num4 = ($.trim($(".num4").val()) != "" && !isNaN($(".num4").val())) ? parseInt($(".num4").val()) : 0;
	var $num5 = ($.trim($(".num5").val()) != "" && !isNaN($(".num5").val())) ? parseInt($(".num5").val()) : 0;
	$("#total").val($num1 + $num2 + $num3 + $num4 + $num5);
	}

	$(".key").on(('keyup click'), function() {
		calc();
	});
		/*=== show/hide form on change ===*/
	$('#add_opt').on('change', function() {
        var val = $(this).val();

        $("#option_group, #single_form").children().slideUp('400');
        $("#option_group, #single_form").children(".".concat(val)).slideDown('400');
    });

});
		/*=== show/hide scroll_top button on scroll ===*/
$(window).on('scroll', function(event) {
	if($(window).scrollTop() > '120') {
		$('#scroll_to_top').fadeIn('300');
	}
	else {
		$('#scroll_to_top').fadeOut('300');
	}
});