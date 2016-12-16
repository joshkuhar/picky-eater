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
	console.log(props.locationId);
	for (var index in secondOffer){
		console.log('dfdfs',secondOffer[index].id, props.locationId);
		if(secondOffer[index].id == props.locationId){
			secondOffer.splice(index, 1);
		}
	}
	var secondOfferId = Math.floor((Math.random() * secondOffer.length-1) + 1);
	console.log(secondOffer, secondOfferId);
	//console.log(props.locationId, secondOffer[0].id);
	
	return(
		<div>
			<Location name={props.shortName} />
			<Link to={"/locations/" + props.locationId +"/"+ props.locationId}><Button name="I'll Take It"/></Link>
		
			<div>Below is what was selected for you. If you want to get a different restaurant, 
			choose from one of the hidden ones below. However, 
			you might not like what you get! Once you choose, your selection is final!</div>
			<div>First Offer</div>
			<div>The name of this restaraunt is {props.name}. That's all your'e getting told.</div>

			
			<h4>Second Offer</h4>
			<div>Hidden</div>
			<Link to={"/locations/play/" + props.locationId +"/"+ secondOffer[secondOfferId].id}><Button name="I'll Take It"/></Link>
		</div>
		)
};

module.exports = Offer;
