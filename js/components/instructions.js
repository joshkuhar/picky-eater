var React = require('react');
var router = require('react-router');
var Link = router.Link;
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');

var Instructions = function(){
	return(
		<div className="instructions">
			<p>If you're hungry, let the Restaurant Picker choose for you. Simply enter 
			the area you want to search and click the search button </p>
			<p>You'll see three random categories. If you don't like what you see, you can click
			shuffle and you get three new categories. Once you see the category you like, click the "select" button below it, and a you'll be presented with a restaraunt from that category.</p>
			<p>However, if you don't like that category, you can then select a completely random restaraurant from the other
			two options on the previous screen. Be careful, you might get something you don't want, and once the offer is gone,
			you can't get it back.</p>
		</div>
		)
}

module.exports = Instructions;