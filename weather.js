

function othername(){

 var location = document.getElementById("userInput").value;
	
	ex(location);
	return false;
}
// $(document).ready(function($) {
//     $("button").click(function() {
//             $.ajax({
//                     url: "http://api.wunderground.com/api/d829236d086e9c28/geolookup/conditions/q/IA/" + location +".json",
//                     dataType: "jsonp",
//                     success: function(parsed_json) {
//                         var location = parsed_json['location']['city'];
//                         var temp_f = parsed_json['current_observation']['temp_f'];
//                         alert("Current temperature in " + location + " is: " + temp_f);
//                     });
//             });
   

// $(document).ready(function(){
//     $("button").click(function(){
//         $(this).hide();
//     });
// });

function ex(location){
	// $.get("http://api.wunderground.com/api/d829236d086e9c28/geolookup/conditions/q/IA/" + location  +".json",  function(data1) {
	      
	//         // do things with data
	//         console.log(data.estimated);
	        
	//         dataoutput(data);
	// });
$.get("http://api.wunderground.com/api/d829236d086e9c28/conditions/q/NJ/"+location+".json", function(data){
	       		// console.log(data1);
	       		// console.log(data);
	       		dataoutput(data);
	       });


}

function dataoutput(data){
	document.getElementById("dataoutput").innerHTML = JSON.stringify(data); 
	console.log(data.current_observation);
	// console.log(data.response.estimated);
	// console.log(temperature_string);
}

// function test(){
// 	$.get("http://api.wunderground.com/api/d829236d086e9c28/conditions/q/CA/San_Francisco.json", function(data){
// 		console.log(data);
// 	});




