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
		console.log("I'm two");
		console.log({props: this.props.params});
		this.props.dispatch(actions.fetchLocations(this.props.params.locationId, this.props.searchText));
	},
	onClick: function (){
		this.props.dispatch(actions.cacheLocation(this.props.params.locationId));
	},
	render: function(){
		return (
			<Offer secondOffer={this.props.categories} locationId={this.props.params.locationId} name={this.props.name} onClick={this.onClick}/>
				)
	}
});

var mapStateToProps = function(state, props) {
    return {
        name: state.name,
        address: state.address,
        locationId: state.locationId,
        categories: state.categories,
        searchText: state.searchText

    };
};

var Container = connect(mapStateToProps)(LocationType);

module.exports = Container;
	{/*


	*/}