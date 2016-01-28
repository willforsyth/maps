/*
 * AJAX Subscribe Form
 */

$.fn.ajaxSubscribe = function (options) {

	$emailInput = $('#email-input');
	$ajaxSubscribe = $('#ajax-subscribe');


	$(function () {
        $('#email-input').submit(function (e) {
            e.preventDefault();
            $.getJSON(
            this.action + "?callback=?",
            $(this).serialize(),
            function (data) {
                if (data.Status === 400) {
                    // alert("Error: " + data.Message);
                    $ajaxSubscribe.append( '<p class="ajax-subscribe__error">' + data.Message + '</p>' ).css({'color' : 'red'});
                } else { // 200
                    // alert("Success: " + data.Message);
                    $emailInput.hide();
                    $ajaxSubscribe.append( '<p class="ajax-subscribe__success">' + data.Message + '</p>' );
                }
            });
        });
    });
};