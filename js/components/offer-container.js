var React = require('react');
var router = require('react-router');
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Offer = require('./offer');

var Tester = React.createClass({
	onClick: function(){
		console.log("I was clicked");
	},
	render: function(){
		return (
			<Offer locationId={this.props.params.local} locations={store.getState().places} address={this.props.address} onClick={this.onClick} />
			)
	}
});


var mapStateToProps = function(state, props) {
    return {
        address: state.address
    };
};

var Container = connect(mapStateToProps)(Tester);

module.exports = Container;