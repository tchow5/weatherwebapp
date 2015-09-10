var state = " ";
var num = '0';
function othername(){

 var location = document.getElementById("newTest").value;
	otherstate();
	ex(location);
	return false;
}

function otherstate(){

	 state= document.getElementById("userInput").value;
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
$.get("http://api.wunderground.com/api/d829236d086e9c28/conditions/q/"+state+"/"+location+".json", function(data){
	       		// console.log(data1);
	       		// console.log(data);
	       		// dataoutput("The temp in farhinet" + data.temperature_string);
	       		// dataoutput(data);
	       		dataoutput(data);

	       			// "The current temperature is "+data.current_observation.temperature_string +"The current due-point is "+ data.current_observation.dewpoint_string

	       		
	       		 num = Object.keys(data.current_observation).length;
	       		console.log(Object.keys(data.current_observation).length);










	       		console.log(data);
	       });
// $.get("http://api.wunderground.com/api/d829236d086e9c28/conditions/q/CA/San_Francisco.json", function(data){
// 	       		// console.log(data1);
// 	       		// console.log(data);
// 	       		dataoutput(data);
// 	       });



};

																			


function dataoutput(data){
	//var obj =JSON.parse(data);
// 	for (var i = 1; i  <= num; i++) {
		
// 	document.getElementById("dataoutput").innerHTML = JSON.stringify(data.current_observation[i]);
// 	//console.log(obj.response.temperature_string[0]);

// 		console.log(data.current_observation);
// 	// console.log(data.response.estimated);
// 	// console.log(temperature_string);
// 	};
// };

	var string = "";
	for(key in data.current_observation){

		if(key == "image"){
			var imgObj = data.current_observation[key];
			string += "<img src="+imgObj.url+ "  >";
		}
		
		string += key +":" + JSON.stringify(data.current_observation[key])  + "<br />";  
		


	}
	console.log(string);
	console.log();
	document.getElementById("dataoutput").innerHTML = string;
}// function test(){
// 	$.get("http://api.wunderground.com/api/d829236d086e9c28/conditions/q/CA/San_Francisco.json", function(data){
// 		console.log(data);
// 	});


$(document).ready(function(){
	$(".button").click(function(){
		$("#mainpage").hide();
		// $("#snow").hide();
		$("#dataoutput").show();

	});

});


