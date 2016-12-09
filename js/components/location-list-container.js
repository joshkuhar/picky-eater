var React = require('react');
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Button = require('./button');
var Locations = require('./location-list');
var Data = require('../data');

var LocationList = React.createClass({
	call: function() {
		this.props.dispatch(actions.fetchLocations());
	},
	onClick: function() {
		var list = store.getState();
		console.log('I am list.data ', list.data.response);
		this.props.dispatch(actions.getLocations(list.data.response.venues));
	},
	didClick: function() {
		console.log("I was clicked");
	},
	render: function() {
		return(
			<div>
				<Button name="Call API" onClick={this.call} />
				<Button name="Get Sample" onClick={this.onClick} />
				<Locations locations={this.props.locations} onClick={this.didClick} />
			</div>
			)
	}
});

var mapStateToProps = function(state, props) {
    return {
        locations: state.places
    };
};

var Container = connect(mapStateToProps)(LocationList);

module.exports = Container;
	
