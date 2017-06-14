//Variables
//============================================
var authKey = "dc6zaTOxFJmzC"//Giphy API Key goes here

var results = ""

var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=" + authKey//Can we put in the entire query string or do we need to just create a base?
//Query parameters:
//q:
//limit:
//rating: 

var topics = ["camping", "hiking", "mountain biking", "snowboarding", "spelunking", "fly fishing", "sky diving", "rock climbing", "skiing", "snowshoeing", "jogging", "kayaking", "snorkeling", "hang gliding", " hot air ballooning"];


//Functions
//============================================

$( document ).ready(function() {

function makeButtons() {

	$("#buttons").empty();

	for (i = 0; i < topics.length; i++) {

		var activity = $("<button>");

		activity.addClass = ("gifmaker");

		activity.attr("data-name", topics[i]);

		activity.text(topics[i]);

		$("#buttons").append(activity);
	}

}
makeButtons();

$("#button").on("click", function() {

event.preventDefault;


});

//Main Processes
//============================================

// function runQuery() {

// 	//AJAX Function
// 	$.ajax({url: queryURL,
// 		method: "GET"})
// 	.done(function(response)){
// 	console.log(response);
// 	console.log(queryURL);
// 	})
// }

});