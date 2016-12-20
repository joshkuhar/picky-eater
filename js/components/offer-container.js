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
		if (!this.props.cachedLocation) {
			var secondOffer = this.props.categories;
			console.log(secondOffer);
			for (var index in secondOffer){
				if(secondOffer[index].id == this.props.params.locationId){
					secondOffer.splice(index, 1);
				}
			}
			var secondOfferId = Math.floor((Math.random() * secondOffer.length-1) + 1);	
			this.props.dispatch(actions.fetchLocations(this.props.params.locationId, this.props.searchText, secondOffer[secondOfferId].id))
		}
		if (this.props.firstLocation) {
			this.props.dispatch(actions.fetchCachedLocations());
		}


	},
	onClick: function (){
		//this.props.dispatch(actions.cacheLocation(this.props.params.locationId));
	},
	render: function(){
		return (
			<Offer secondOfferId={this.props.secondOfferId} locationId={this.props.params.locationId} name={this.props.name} onClick={this.onClick}/>
				)
	}
});

var mapStateToProps = function(state, props) {
    return {
        name: state.name,
        address: state.address,
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


	*/}