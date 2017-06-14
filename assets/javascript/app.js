//Variables
//============================================
var authKey = ""//Giphy API Key goes here

var results = ""

var queryURL = ""//Can we put in the entire query string or do we need to just create a base?

//Functions
//============================================

function runQuery() {

	//AJAX Function
	$.ajax({url: queryURL,
		method: "GET"})
	.done(function(response)){
	console.log(response);
	console.log(queryURL);
	})
}




//Main Processes
//============================================