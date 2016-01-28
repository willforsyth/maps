/*jshint unused:false*/
var $ = global.window.$ = window.jQuery = require('../../../bower_components/jquery/dist/jquery');
    encode = require('../../../bower_components/js-md5/js/md5');

// Show Me The Code
// ----------
// Page Load script
require('./components/pageLoad');
$('head').pageLoad();

// Banner slideshow script
require('../../../bower_components/jquery-cycle2/build/jquery.cycle2.min');

// Drop down menu script
require('./components/dropDownMenu');
$('header').dropDownMenu();

// AJAX Subscribe Form
require('./components/ajaxSubscribe');
$('.email-input').ajaxSubscribe();

// Typed.js
require('../../../bower_components/typed.js/dist/typed.min');
require('./components/customTyped');
$('.google-trends').customTyped();
