var React = require('react');
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Location = require('./location');
var router = require('react-router');
var store = require('../store');
var actions = require('../actions/index');
var Link = router.Link;
var Location = require('./location');



var Location = React.createClass({
	componentWillMount: function(){
		console.log("second fetch", this.props.params.locationDetailsId);
		this.props.dispatch(actions.fetchLocations(this.props.params.locationDetailsId));
	},
	render: function() {
		return (
		<div>
			<div>I worked</div>
			<div>{this.props.name}</div>
			<div>{this.props.address}</div>
			<div>{this.props.rating}</div>
			<div></div>

		</div>
		)
	}
});

var mapStateToProps = function(state, props) {
    return {
		name: state.name,
		address: state.address,
		locationId: state.locationId,
		verified: state.verified,
		places: state.places
    };
};

var Container = connect(mapStateToProps)(Location);

module.exports = Container;
{/*

			<Location address={this.props.address} name={this.props.name} />
			this.props.dispatch(actions.fetchSingleLocation(this.props.params.locationDetailsId));
*/}