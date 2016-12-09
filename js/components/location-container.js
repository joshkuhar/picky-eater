var React = require('react');
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Button = require('./button');
var Location = require('./location');

var Local = React.createClass({
	onClick: function() {
		var state = store.getState();
		var places = Object.keys(state.data.locations);
		var eatery = state.data.locations[places[state.index % places.length]];
		this.props.dispatch(actions.changeLocation(eatery));
	},
	render: function() {
		return(
		<div>
			<Location name={this.props.place} onClick={this.onClick} />
			<Button name="Click Me" onClick={this.onClick} />
		</div>
		)
	}
});
var mapStateToProps = function(state, props) {
    return {
        place: state.restaurant
    };
};

var Container = connect(mapStateToProps)(Local);

module.exports = Container;
