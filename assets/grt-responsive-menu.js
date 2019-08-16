/*!
 * GRT Responsive Menu - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2018 GRT107
 * Released under the MIT license
*/

// Create a function for mobile version
(function( $ ){
	$.fn.grtmobile = function () {
		if ($(window).width() < 768) {
			$('.grt-mobile-button').on('click', function(){
				$(this).toggleClass("grt-mobile-button-open");
				$("ul.grt-menu").toggleClass("open-grt-menu ");
				
			});
		
		}
	}
})( jQuery );

// Initialize and check for mobile
$.fn.grtmobile();

// On resize window check for mobile

var resizeTimeout;
$(window).resize(function(){
  if(!!resizeTimeout){ clearTimeout(resizeTimeout); }
  resizeTimeout = setTimeout(function(){
    $.fn.grtmobile();
  },200);
});



