$(document).ready(function(){
    "use strict"

    //remove loader //
    $('.spinner').css('opacity',0);
    setTimeout(function(){$('.spinner').hide();}, 600)

    // Fix Nav Bar //
    $(window).scroll(function(){
		if($(window).scrollTop() > 500 && !$('.mobile-toggle').is(":visible")){
			$('.top-bar').addClass('nav-sticky');
		}else{
			$('.top-bar').removeClass('nav-sticky');
		}
	});


})