console.log("JS Connected");

function myMap() {	
	var mapProp = {
		center: new google.maps.LatLng(34.0409839,-118.3341862),
  		zoom: 11,
  		mapTypeId: google.maps.MapTypeId.ROADMAP,
   		key: "AIzaSyDe2MhL3UEJoR19ACR0rnJ9gXAan9PQeIw",
   		}

	$.getJSON("https://maps.googleapis.com/maps/api/js?key=AIzaSyDe2MhL3UEJoR19ACR0rnJ9gXAan9PQeIw&callback=myMap");
	var map = new google.maps.Map(document.getElementById($('#googleMap'),mapProp));

};
