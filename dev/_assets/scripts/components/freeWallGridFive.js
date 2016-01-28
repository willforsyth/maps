/*global define:false */
$.fn.freeWallGridFive = function(options) {
  var wall = new freewall(".freewall--five");
    $(window).load(function(){
      var elementWidth = $('.freewall--five-container').width();
      wall.reset({
      				selector: '.brick',
      				animate: true,
      				cellW: function(width) {
                  if (elementWidth < 600) {
                    var cellWidth = 235;
                    return cellWidth;
                  } else {
                    var cellWidth = 320;
                    return cellWidth;
                  }
                },
      				cellH: 'auto',
      				onResize: function() {
      					wall.refresh();
      				},
              gutterY: 20,
              gutterX: 20
      			});
      			wall.fitWidth();
    });
    $(window).resize(function(){
      var elementWidth = $('.freewall--five-container').width();
      wall.reset({
      				selector: '.brick',
      				animate: true,
      				cellW: function(width) {
                  if (elementWidth < 600) {
                    var cellWidth = 235;
                    return cellWidth;
                  } else {
                    var cellWidth = 320;
                    return cellWidth;
                  }
                },
      				cellH: 'auto',
      				onResize: function() {
      					wall.refresh();
      				},

              gutterY: 20,
              gutterX: 20
      			});
      			wall.fitWidth();
    });
};