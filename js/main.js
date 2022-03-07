$(document).ready(function(){
    "use strict"
    // Fix Nav Bar //
    $(window).scroll(function(){
		if($(window).scrollTop() > 500 && !$('.mobile-toggle').is(":visible")){
			$('.top-bar').addClass('nav-sticky');
		}else{
			$('.top-bar').removeClass('nav-sticky');
		}
	});


});

$(window).load(function(){

    "use strict"

    // Align vertically
    alignVertical();
    alignBottom();

    $(window).resize(function(){
        alignVertical();
        alignBottom();
    });

    //remove loader //
    $('.loader').css('opacity', 0);
    setTimeout(function(){$('.loader').hide();}, 600);
});

function alignVertical(){

    $('.align-vertical').each(function(){
        var that = $(this);
        var height = that.height();
        var parentHeight = that.parent().height();
        var padAmount = (parentHeight / 2) - (height/2);
        that.css('padding-top', padAmount);
    });

}

function alignBottom(){
$('.align-bottom').each(function(){
    var that = $(this);
    var height = that.height();
    var parentHeight = that.parent().height();
    var padAmount = (parentHeight) - (height) - 32;
    that.css('padding-top', padAmount);
});
}
