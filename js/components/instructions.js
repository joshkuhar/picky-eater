var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Link = router.Link;
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');


var Instructions = React.createClass({
render: function(){
	return(
		<div className="instructions">
			<p>If you want to dine out but aren't sure where you want to go, let <span className="inline-title">Picky Eater</span> choose for you. Simply enter 
			the area you want to search and click the search button </p>
			<p>You'll see three random categories. If you don't like what you see, you can click
			shuffle and you get three new categories. Click on a category when you see one you like, and you'll be presented with a restaraunt from that category.</p>
			<p>However, if you don't like the suggestion, you can then select a completely random restaraurant. But be careful, you might get something you don't want, and once you choose, 
			you can't get it back.</p>
		</div>
		)
  }
});
	
var mapStateToProps = function(state, props){
	return {

	}
}
var Container = connect(mapStateToProps)(Instructions);
module.exports = Container;
