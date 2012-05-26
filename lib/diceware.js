var wordlist = require('./wordlist');

var DEFAULT_NUMWORDS = 5;
var WORDLIST_SIZE = 7776; // 6^5

module.exports = function(numwords) {
	numwords = numwords || DEFAULT_NUMWORDS;

	var phrase = "";

	for (var i = 0 ; i < numwords ; i++) {
		var rand = Math.floor(Math.random() * WORDLIST_SIZE);
		phrase += wordlist[rand] + " ";
	}

	// remove the trailing space
	return phrase.substring(0, phrase.length - 1);
}
