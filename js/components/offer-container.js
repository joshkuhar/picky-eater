var React = require('react');
var router = require('react-router');
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Link = router.Link;
var Categories = require('../actions/categories');
var Button = require('./button');
var Offer = require('./offer');

var LocationType = React.createClass({
	componentDidMount: function(){
		// if (!this.props.cachedLocation) {
		// 	var secondOffer = this.props.categories;
		// 	console.log(secondOffer);
		// 	for (var index in secondOffer){
		// 		if(secondOffer[index].id == this.props.params.locationId){
		// 			secondOffer.splice(index, 1);
		// 		}
		// 	}
		// 	var secondOfferId = Math.floor((Math.random() * secondOffer.length-1) + 1);	
		this.props.dispatch(actions.fetchLocations(this.props.params.locationId, this.props.searchText));
		// }
		// if (this.props.firstLocation) {
		// 	this.props.dispatch(actions.fetchCachedLocations());
		// }
	

	},
	onClick: function (event){
		event.preventDefault();
		console.log(this.props.name);
		//this.props.dispatch(actions.cacheLocation(this.props.params.locationId));
	},
	// storeget: function(event){
	// 	event.preventDefault();
	// 	console.log(store.getState())
	// },
	render: function(){
		return (
			<div>
			<Offer name={this.props.name} onClick={this.onClick} name={this.props.name} address={this.props.address} rating={this.props.rating} phone={this.props.phone} variety={this.props.variety}/>

			</div>
				)
	}
});

var mapStateToProps = function(state, props) {
    return {
        name: state.name,
        address: state.address,
        rating: state.rating,
        phone: state.phone,
        variety: state.variety,
        locationId: state.locationId,
        categories: state.categories,
        searchText: state.searchText,
        cachedLocation: state.cachedLocation,
        secondOfferId: state.secondOfferId,
        firstLocation: state.firstLocation
    };
};

var Container = connect(mapStateToProps)(LocationType);

module.exports = Container;
	{/*
			<button onClick={this.storeget}>store</button>

	*/}