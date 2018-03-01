moment.locale("fr");
$("#date").text( moment().format('LL'));  



var ville = $("#address").val();

function meteo(ville){
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q="+ ville +"&lang=fr&units=metric&appid=3c52f05dd1f0d3ad4faba99820954ae9",
		type: "GET",
		dataType: "jsonp",
		success: function(data){
			 $("#tempMax").text("Temp. Max "+ data.main.temp_max+"°");
			 $("#tempMin").text("Temp. Min "+ data.main.temp_min+"°");
			 $("#pressure").text("Pres. atmospherique "+ data.main.pressure+" Pa");
			 $("#windspeed").text("Vitesse de vent "+ data.wind.speed+" Km/h");
			 $("#humidity").text("Humidité "+ data.main.humidity+" %");
			 $("#temp").text(parseInt(data.main.temp)+"°");
			 $("#coordonées").text("Longitude = " + data.coord.lon+ " Latitude = " + data.coord.lat )
			 $("#map").html("<iframe src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBMtdsVDGb8x9NJku3jdI3eFfAL9tu22ao&q="+ville+"&zoom=12&maptype=roadmap' width='100%' height='100%' frameborder='0'></iframe>");

		}
	})

}

$(document).ready(function(){
	meteo(ville);

	$("#submit").click(function(){
		ville = $("#address").val();
		meteo(ville);
	})
	$("#address").keypress(function(e){
		if ( e.keyCode==13 ){
			ville = $("#address").val();
			meteo(ville);
		}
	});
})


/*
$("#submit").click(function(){
	var ville = $("#address").val();
	console.log(ville);
	varFetch = "http://api.openweathermap.org/data/2.5/weather?q="+ville+"&lang=fr&units=metric&appid=3c52f05dd1f0d3ad4faba99820954ae9";

window.fetch(varFetch)
.then(res => res.json())
.then(resJson => $("#tempMax").text("Température Max "+ resJson.main.temp_max+"°"))


window.fetch(varFetch)
.then(res => res.json())
.then(resJson => $("#tempMin").text("Température Min "+ resJson.main.temp_min+"°"))


window.fetch(varFetch)
.then(res => res.json())
.then(resJson => $("#pressure").text("Pression atmospherique "+ resJson.main.pressure+" Pa"))

window.fetch(varFetch)
.then(res => res.json())
.then(resJson => $("#windspeed").text("Vitesse de vent "+ resJson.wind.speed+" Km/h"))

window.fetch(varFetch)
.then(res => res.json())
.then(resJson => $("#humidity").text("Humidité "+ resJson.main.humidity+" %"))

window.fetch(varFetch)
.then(res => res.json())
.then(resJson => $("#temp").text(parseInt(resJson.main.temp)+"°"))

window.fetch(varFetch)
.then(res => res.json())
.then(resJson => $("#coordonées").text("Longitude = " + resJson.coord.lon+ " Latitude = " + resJson.coord.lat ))



});



window.fetch(varFetch)
.then(res => res.json())
.then(resJson => $("#tempMax").text("Température Max "+ resJson.main.temp_max+"°"))


window.fetch(varFetch)
.then(res => res.json())
.then(resJson => $("#tempMin").text("Température Min "+ resJson.main.temp_min+"°"))


window.fetch(varFetch)
.then(res => res.json())
.then(resJson => $("#pressure").text("Pression atmospherique "+ resJson.main.pressure+" Pa"))

window.fetch(varFetch)
.then(res => res.json())
.then(resJson => $("#windspeed").text("Vitesse de vent "+ resJson.wind.speed+" Km/h"))

window.fetch(varFetch)
.then(res => res.json())
.then(resJson => $("#humidity").text("Humidité "+ resJson.main.humidity+" %"))

window.fetch(varFetch)
.then(res => res.json())
.then(resJson => $("#temp").text(parseInt(resJson.main.temp)+"°"))

window.fetch(varFetch)
.then(res => res.json())
.then(resJson => $("#coordonées").text("Longitude = " + resJson.coord.lon + " Latitude = " + resJson.coord.lat ))





      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 43.11, lng: 1.61}
        });
        var geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
      }

      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            

          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }

*/

$("#map").html("<iframe src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBMtdsVDGb8x9NJku3jdI3eFfAL9tu22ao&q="+ville+"&zoom=12&maptype=roadmap' width='100%' height='100%' frameborder='0'></iframe>");
