var React = require('react');
var router = require('react-router');
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Link = router.Link;
var Categories = require('../actions/categories');
var Button = require('./button');

var Offer = function(props){
	return(
		<div className="offers">
			<div className="offer-instructions">Below is what was selected for you. If you want to try a completely random restaurant, 
			choose the second offer. </div>
			<div className="offer-box">
			  <div className="offer-header">First Offer</div>
			  <div className="first-offer">{props.name}</div>
			  <div className="variety">{props.variety}</div>
			  <div className="rating">Foursquare Rating {props.rating}</div>
			  <div className="phone">{props.phone}</div>
			  <div className="offer-link">
				<Link to={"/locations/accepted/first"}>I'll Take It</Link>
			  </div>
			</div>
			<div className="offer-box">
			  <div className="offer-header">Second Offer</div>
			  <div className="second-offer">HIDDEN</div>
			  <div className="offer-link">
				<Link to={"/locations/accepted/alternate"}>Show Me What You've Got</Link>
			  </div>
			</div>
		</div>	
		)
};

module.exports = Offer;
