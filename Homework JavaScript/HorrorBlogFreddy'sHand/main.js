var movieApp = {};
movieApp.apiKey = "7e61ac2d3f02800a809999382bb9944e";
movieApp.apiUrl = "https://api.themoviedb.org/3/";

movieApp.genresList = {
	comedy: 35,
	crime: 80,
	scifi: 878,
	mystery: 9648,
	drama: 18,
	thriller: 53,
	action: 28
}

// Send request to movie database and get movies

movieApp.getMovies = function() {
	$.ajax({
		url: movieApp.apiUrl + "genre/27/movies",
		method: "GET",
		dataType: "json",
		data: {
			api_key: movieApp.apiKey,
			page: 1
		}
	})
	.then(function(apiReturn1) {
		movieApp.movies = apiReturn1.results;
	});

	$.ajax({
		url: movieApp.apiUrl + "genre/27/movies",
		method: "GET",
		dataType: "json",
		data: {
			api_key: movieApp.apiKey,
			page: 2
		}
	})
	.then(function(apiReturn2) {
		movieApp.movies = apiReturn2.results.concat(movieApp.movies);
	});

	$.ajax({
		url: movieApp.apiUrl + "genre/27/movies",
		method: "GET",
		dataType: "json",
		data: {
			api_key: movieApp.apiKey,
			page: 3
		}
	})
	.then(function(apiReturn3) {
		movieApp.movies = apiReturn3.results.concat(movieApp.movies);
	});

	$.ajax({
		url: movieApp.apiUrl + "genre/27/movies",
		method: "GET",
		dataType: "json",
		data: {
			api_key: movieApp.apiKey,
			page: 4
		}
	})
	.then(function(apiReturn4) {
		movieApp.movies = apiReturn4.results.concat(movieApp.movies);
	});
};



// function checks if the movie has additional genre id based on used choice selection
movieApp.checkGenre = function(genre) {
	var userChoice = movieApp.genresList[genre];
	movieApp.userMovieChoices = [];

	for (var i = 0; i < movieApp.movies.length; i++) {
		var movieGenreList = movieApp.movies[i].genre_ids;
		if(movieGenreList.indexOf(userChoice) > -1) {
			movieApp.userMovieChoices.push(movieApp.movies[i]);
		}
	}
	// randomizer
	var userFinalMovie = _.sample(movieApp.userMovieChoices, 2);
	finalDetails(userFinalMovie);
}; // closes checkGenre


var finalDetails = function(details) {
	var finalMovieDetails = [];
	for (var j = 0; j < details.length; j++) {
		finalMovieDetails.push({
			title: details[j].original_title,
			overview: details[j].overview,
			poster: "https://image.tmdb.org/t/p/w500/" + details[j].backdrop_path,
			release_date: details[j].release_date,
			link: "https://www.themoviedb.org/movie/" + details[j].id
		});
	}
	// console.log(finalMovieDetails);
	movieApp.displayMovies(finalMovieDetails);
}; // closes finalDetails function DONT DELETE


movieApp.displayMovies = function(displayItems) {
	$('#results').empty();
	// console.log(displayItems);
	var myTemplate = $("#myTemplate").html();
	var template = Handlebars.compile(myTemplate);

	displayItems.forEach(function(individualMovie) {
		// console.log('hi')
		var finalTemplate = template(individualMovie);
		$("#results").append(finalTemplate);
	});
}



movieApp.init = function() {
	// runs the movieApp.getMovies function
	movieApp.getMovies();
	// What happens when submitted
	$("form").on("submit", function(event) {
		event.preventDefault();
		var chosenOption = $('input:checked').attr("id");
		movieApp.checkGenre(chosenOption);
	});

};

// calling the .init function that calls .getMovies
$(function() {
 	movieApp.init();
 	//smooth scroll begins
 	$('a').smoothScroll();

 	$("#submit").on("click", function(){
 		$.smoothScroll({
 			scrollTarget: "#results"
 		});
 	});
});
