/*global define:false */
$.fn.customTyped = function (options) {


	$(function(){
	    $(".google-trends").typed({
	        strings: ["The war on islamic state", "Some other news about things"],
	        typeSpeed: 20,
	        startDelay: 1000,
	        backSpeed: 20,
	        backDelay: 1000,
	        showCursor: false,
	        loop: true
	    });
	});

};
