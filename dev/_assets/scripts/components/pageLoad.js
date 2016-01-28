$.fn.pageLoad = function (options) {

    $body = $('body, html');

    // Fades content in when site is fully loaded
    $(document).ready(function(){
	    $(window).load(function(){
	        $body.css({'opacity' : 1});
    	});
	});
};