moment.locale("fr");
$("#date").text( moment().format('LL'));  

var varFetch = "http://api.openweathermap.org/data/2.5/weather?q=Pamiers&lang=fr&units=metric&appid=3c52f05dd1f0d3ad4faba99820954ae9";

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


