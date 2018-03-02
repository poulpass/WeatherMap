//utilise moment.js pour afficher la date au format "JJ MMMM AAAA"
moment.locale("fr");
$("#date").text( moment().format('LL'));  


//vas chercher les données rentrées par l'utilisateur dans l'input
var ville = $("#address").val();

//utilise l'api Open Weather Map pour inscrire dans les données météo dans la page
function meteo(ville){
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/weather?q="+ ville +"&lang=fr&units=metric&appid=3c52f05dd1f0d3ad4faba99820954ae9",
		type: "GET",
		dataType: "json",
		success: function(data){
			 $("#tempMax").text("Temp. Max "+ data.main.temp_max+"°");
			 $("#tempMin").text("Temp. Min "+ data.main.temp_min+"°");
			 $("#pressure").text("Pres. atmospherique "+ data.main.pressure+" Pa");
			 $("#windspeed").text("Vitesse de vent "+ data.wind.speed+" Km/h");
			 $("#humidity").text("Humidité "+ data.main.humidity+" %");
			 $("#temp").text(parseInt(data.main.temp)+"°");
			 $("#coordonées").text("Longitude = " + data.coord.lon+ " Latitude = " + data.coord.lat )
//Utilise l'iframe google map pour afficher la carte et se sert de la variable "ville" pour se positioner sur l'endroi souhaité
			 $("#map").html("<iframe src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBMtdsVDGb8x9NJku3jdI3eFfAL9tu22ao&q="+ville+"&zoom=12&maptype=roadmap' width='100%' height='100%' frameborder='0'></iframe>");

		}
	})

}
// lance la fonction meteo au demarrage 
$(document).ready(function(){
	meteo(ville);
// lance la fonction au clic du bouton "valider"
	$("#submit").click(function(){
		ville = $("#address").val();
		meteo(ville);
	})
//lance la fonction quand on tape entrer
	$("#address").keypress(function(e){
		if ( e.keyCode==13 ){
			ville = $("#address").val();
			meteo(ville);
		}
	});
})
