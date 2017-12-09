var Twitter = require('twitter');
var twitterKeys = require("./keys");

var consumerKey = twitterKeys.consumer_key;
var params = {screen_name: 'nodejs'};


var inquirer = require("inquirer");
inquirer.prompt([
	{
		type: 'list',
		name: 'commands',
		message: 'What would you like to do?',
		choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"]
	}
	]).then(answers => {
    	if (answers.commands === "my-tweets") {	
			// Twitter JSON
			twitterKeys.get('search/tweets', {q: 'TheOkayestDM'}, function(error, tweets, response) {
			   console.log(JSON.stringify(tweets, null, 2));
			});
    	} else if (answers.commands === "spotify-this-song") {
    		// Asks for song
    		inquirer.prompt([
    			{type: 'input', name: 'search', message: 'Enter song: '}
    			]).then(songName => {
    				console.log("You searched for " + songName.search)
    		});
    	} else if (answers.commands === "movie-this") {
    		inquirer.prompt([
    			{type: 'input', name: 'search', message: 'Enter a movie: '}
    			]).then(movie => {
    				console.log("You searched for " + movie.search)
    		});
    	} else if (answers.commands === "do-what-it-says") {
    		console.log("Can a man get some respecc up in here");
    	}
});