/*
 * Drop Down Menu Plugin
 */

$.fn.dropDownMenu = function (options) {

	/***************
	 * Variables
	 ***************/

	$header = $('.header');
	$webkitBody = $('html');
	$mozBody = $('body, html');
	$body = $('body, html');

	$nav = $('.nav__drop-down');

    $hamburgerIcon = $('.icon__hamburger-menu');

    $headerMenuList = $('.nav__ul--header');
    $headerMenuListItems = $('.nav__li--header');
    $dropDownUL = $('.ul__drop-down');


    // Get list items from header menu UL
    $headerMenuListChildren = $headerMenuList.children();

    // Variables to determine which browser is being used
	$safari = (navigator.userAgent.toString().toLowerCase().indexOf("safari") != -1) && (navigator.userAgent.toString().toLowerCase().indexOf("chrome") == -1);
	$firefox = (navigator.userAgent.toString().toLowerCase().indexOf("firefox") != -1);
	$chrome = (navigator.userAgent.toString().toLowerCase().indexOf("chrome") != -1);


    /***************
	 * Conditions
	 ***************/


    // Function to register first and second clicks
    $($hamburgerIcon).click(function( $e ) {

		$e.preventDefault();
		var clicks = $(this).data('clicks');

		if (!clicks) { // On the first click

			// Add class to animate the hamburger menu icon open
			$hamburgerIcon.addClass('icon__hamburger-menu--open');

			// Append the list items to the drop down menu UL
			$dropDownUL.append($headerMenuListChildren);

			// Add class to animate menu in from the side
			$nav.addClass('nav__drop-down--open');

			// Add styles to drop down list items after a delay of 0.1s
			$headerMenuListItems.delay(200).queue(function (next) {
			    $(this).addClass('nav__li--drop-down');
			    next();
			});

			// Fix site body so user can't scroll while menu is open
			if( $chrome || $safari ){
				$webkitBody.css({
					'height': '100%',
				    'overflow': 'hidden',
				    'position' : 'fixed'
				});
			} else if( $firefox ){
				$mozBody.css({
					'height': '100%',
				    'overflow': 'hidden', 
				    'position' : 'fixed'
				});
			} else {
				$body.css({
					'height': '100%',
				    'overflow': 'hidden',
				    'position' : 'fixed' 
				});
			}
			
			
		} else { // On the second click

			// Add class to animate the hamburger menu icon closed
         	$hamburgerIcon.removeClass('icon__hamburger-menu--open');

         	// Add class to animate menu in from the side
			$nav.removeClass('nav__drop-down--open');

         	// Remove styles and re-append list items to header nav after a delay of 0.1s
         	$headerMenuList.delay(100).queue(function (next) {
			    $(this).append($headerMenuListChildren);
			    $headerMenuListItems.removeClass('nav__li--drop-down');
			    next();
			});

         	// Remove the styles that disabled scrolling
			if( $chrome || $safari || $firefox ){
				$body.css({
					'height': 'auto',
				    'overflow': 'auto',
				    'position' : 'static' 
				});
			} 
		}

		$(this).data("clicks", !clicks);
	});
};