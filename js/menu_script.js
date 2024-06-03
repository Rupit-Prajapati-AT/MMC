var ww = document.body.clientWidth;


$(document).ready(function() {
	$(".nav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
			$(this).after( "<span class='parent_span icon icon-fontawesome-webfont'>&nbsp;</span>" );
			//$(this).parents('li').children("span").addClass("parent_span icon icon-fontawesome-webfont-8");
		};
	})
	
	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav").stop(true, false).slideToggle(300);
	});
	adjustMenu();
	

})

$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 1025) {
		$(".toggleMenu").css("display", "inline-block");
		if (!$(".toggleMenu").hasClass("active")) {
			$(".nav").hide();
		} else {
			$(".nav").show();
		}
		$(".nav li").unbind('mouseenter mouseleave');
		$(".nav li span.parent_span").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			//e.preventDefault();
			$(this).parent("li").toggleClass("hover");
			$(this).parent("li").children("ul").stop(true, false).slideToggle(300);
			$(this).toggleClass("icon-fontawesome-webfont");
			$(this).toggleClass("icon-fontawesome-webfont-3");
		});
	} 
	else if (ww >= 1025) {
		$(".toggleMenu").css("display", "none");
		$(".nav").show();
		$(".nav li").removeClass("hover");
		$(".nav li a").unbind('click');
		
		$(".nav li").unbind('mouseenter').bind('mouseenter', function() {
		 	$(this).addClass('hover');
		});
		$(".nav li").unbind('mouseleave').bind('mouseleave', function() {
		 	$(this).removeClass('hover');
		});
	}
}

