$(function() {

	$(".section_po .cont").mouseover(function() {					
		$(".section_po .cont").stop().animate({width:"153px"}, 900, 'easeOutCirc').removeClass("on");
		$(this).stop().animate({width:"413px"}, 900, 'easeOutCirc').addClass("on");	
	});

});
