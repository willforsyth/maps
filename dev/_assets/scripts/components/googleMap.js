/*global define:false */
$.fn.googleMap = function(options) {
var Maps = Maps || {
	run: function(){

		var isDraggable = $(document).width() > 600 ? true : false; // If document (your website) is wider than 480px, isDraggable = true, else isDraggable = false

		var settings = {
			zoom: 18,
			center: this.position,
			mapTypeControl: false,
			mapTypeControlOptions: false,
			navigationControl: false,
			navigationControlOptions: false,
			disableDefaultUI: true,
			draggable: isDraggable,
	       	scrollwheel: false, // Prevent users to start zooming the map when scrolling down the page
	       //... options options options
		};

		var target = new google.maps.Map(document.getElementById("map_canvas"), settings);
		var companyLogo = new google.maps.MarkerImage(this.icon,
			new google.maps.Size(100,100),
			new google.maps.Point(0,0),
			new google.maps.Point(60,48)
		);

		var companyMarker = new google.maps.Marker({
			position: this.position,
			map: target,
			icon: companyLogo,
			title:"Drummond Central"
		});

	},
	icon : '../imgs/map-pointer.png',
	position : new google.maps.LatLng(54.981338, -1.608224)
}
	Maps.run();
};
