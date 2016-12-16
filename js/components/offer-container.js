var React = require('react');
var router = require('react-router');
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Link = router.Link;
var Location = require('./location');
var Categories = require('../actions/categories');
var Button = require('./button');
var Offer = require('./offer');

var LocationType = React.createClass({
	componentWillMount: function(){
		console.log("I am the params dsdsds ",  this.props.params.locationId)
		this.props.dispatch(actions.fetchLocations(this.props.params.locationId));
	},
	render: function(){
		return (
			<Offer secondOffer={this.props.places} locationId={this.props.params.locationId}
				shortName={this.props.name} name={this.props.name}
			/>		
				)
	}
});


var mapStateToProps = function(state, props) {
    return {
        name: state.name,
        address: state.address,
        locationId: state.locationId,
        places: state.places
    };
};

var Container = connect(mapStateToProps)(LocationType);

module.exports = Container;
	{/*


	*/}