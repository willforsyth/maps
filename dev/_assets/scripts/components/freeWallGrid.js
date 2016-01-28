/*global define:false */
$.fn.freeWallGrid = function(options) {
  var wall = new freewall(".freewall");

    $(window).load(function(){
      var elementWidth = $('.freewall-container').width();
          wall.reset({
            selector: '.brick',
            animate: true,
            cellW: function(width) {
                if(elementWidth < 1050){
                  var cellWidth = width / 2;
                  return cellWidth - 20;
                }else{
                  var cellWidth = width / 4;
                  return cellWidth - 20;
                }
              },
              cellH: 'auto',
              fitWidth: '320',
              gutterY: 10,
              gutterX: 20,
              onResize: function() {
                wall.fitWidth();
              },
          });
      wall.fitWidth();
    });

    $(window).resize(function(){
      var elementWidth = $('.freewall-container').width();
          wall.reset({
            selector: '.brick',
            animate: true,
            cellW: function(width) {
                if(elementWidth < 1050){
                  var cellWidth = width / 2;
                  return cellWidth - 20;
                }else{
                  var cellWidth = width / 4;
                  return cellWidth - 20;
                }
              },
              cellH: 'auto',
              fitWidth: '320',
              gutterY: 10,
              gutterX: 20,
              onResize: function() {
                wall.fitWidth();
              },
          });
      wall.fitWidth();
    })
};
