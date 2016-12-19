var React = require('react');
var router = require('react-router');
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Link = router.Link;
var Location = require('./location');
var Categories = require('../actions/categories');
var Button = require('./button');

var Offer = function(props){
	var secondOffer = props.secondOffer;
	for (var index in secondOffer){
		if(secondOffer[index].id == props.locationId){
			secondOffer.splice(index, 1);
		}
	}
	var secondOfferId = Math.floor((Math.random() * secondOffer.length-1) + 1);
	console.log(secondOffer, secondOfferId);
	//console.log(props.locationId, secondOffer[0].id);
	
	return(
		<div className="offers">
			<div className="offer-instructions">Below is what was selected for you. If you want to try a completely random restaurant, 
			choose the second offer. </div>
			<div className="offer-header">First Offer</div>
			<div className="first-offer">{props.name}</div>
			<div className="offer-button">
				<Link to={"/locations/play/" + props.locationId +"/"+ props.locationId}><Button name="I'll Take It" onClick={props.onClick}/></Link>
			</div>
			<div className="offer-header">Second Offer</div>
			<div className="second-offer">HIDDEN</div>
			<div className="offer-button">
				<Link to={"/locations/play/" + props.locationId +"/"+ secondOffer[secondOfferId].id}><Button name="I'll Take It"/></Link>
			</div>
		</div>
		)
};

module.exports = Offer;
