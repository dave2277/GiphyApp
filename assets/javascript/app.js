//Variables
//============================================
var rating;
var topics = ["camping", "hiking", "mountain biking", "snowboarding", "spelunking", "fly fishing", "sky diving", "rock climbing", "skiing", "snowshoeing", "jogging", "kayaking", "snorkeling", "hang gliding", " hot air ballooning"];
var activity;
var buttonLabel;
var stillGif;
var animatedGif;


//Functions
//============================================

$( document ).ready(function() {

//Loop through the topics array and make our buttons
function makeButtons() {

	$("#buttons").empty();

	for (i = 0; i < topics.length; i++) {

		activity = $("<button>");

		activity.addClass("gifmaker");

		activity.addClass("btn-info")

		activity.attr("data-name", topics[i]);

		activity.text(topics[i]);

		$("#buttons").append(activity);
		}

	}
	makeButtons();

	//Display Gifs when clicking buttons
	$(document).on("click", ".gifmaker", displayGif);

		function displayGif() {

			$("#gifs").empty();

			buttonLabel = $(this).attr("data-name");

			var authKey = "dc6zaTOxFJmzC"//Giphy API 
			var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonLabel + "&limit=10" + "&api_key=" + authKey;

			//API function
			$.ajax({url: queryURL,
			method: "GET"})
			.done(function(response){

			//Loop through results and get ratings and images
			for (i = 0; i < response.data.length; i++) {

			rating = response.data[i].rating;

			stillGif = response.data[i].images.fixed_height_still.url;

			animatedGif = response.data[i].images.fixed_height.url;

			//Create images for each response and data attributes and  set default source

			var tacos = $('<img src=' + stillGif + '>');

			var tacoShells = $('<div>');

			tacos.data("data-still", stillGif);

			tacos.data("data-animate", animatedGif);

			tacos.data("data-state", "still");

			tacoShells.addClass("yummy");

			tacos.addClass("giphies");		

			//Display images and ratings on the page

			$("#gifs").append(tacoShells);

			$(tacoShells).append('<span class="ratings">Rating: ' + 
			rating + '</span><br>');

			$(tacoShells).append(tacos);

			}

		});
	};

	//Function for changing state of image on click
	$(document).on("click", ".giphies", function() {
		var state = $(this).data("data-state");
		if (state === "still") {
			$(this).attr("src", $(this).data("data-animate"));
			$(this).data("data-state", "animate");
		} else {
			$(this).attr("src", $(this).data("data-still"));
			$(this).data("data-state", "still");
		}

	});


	//Add button from form input
	$("#singlebutton").on("click", function(event) {
		event.preventDefault();

		newGif = $("#textinput").val().trim();

		topics.push(newGif);

		makeButtons();

	});

	makeButtons();

});