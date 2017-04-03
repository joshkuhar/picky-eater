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
			<div className="offer-instructions">Below are the two restaurants picked for you. You can only choose one of them. If you don't like the first offer, you can pick a random, hidden offer.</div>
			<div className="offer-box">
			  <img src={props.image} alt="restaurant image" className="restaurant-image" />
			  <div className="offer-header">Picked</div>
			  <div className="fs-link"><a href={props.canLink} className="can-link">venue on Foursquare</a></div>
			  <div className="first-offer">{props.name}</div>
			  <div className="variety">{props.variety}</div>
			  <div className="rating">Foursquare Rating {props.rating}</div>
			  <div>
				<Link to={"/locations/accepted/first"}><div className="offer-link">I'll Take It</div></Link>
			  </div>
			</div>
			<div className="offer-box">
			  <div className="second-offer">HIDDEN</div>
			  <div className="offer-header">Get Picky</div>
			  <div className="explain-hidden">If you select the hidden choice, the first choice will be removed and you won't be able to get it again.</div>
			  <div>
				<Link to={"/locations/accepted/alternate"}><div className="offer-link second-link">Show Me What You've Got</div></Link>
			  </div>
			</div>
		</div>	
		)
};

module.exports = Offer;
