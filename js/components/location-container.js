var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Data = require('../data');
var Location = require('./location');

var Local = React.createClass({
	onClick: function(){
		this.props.dispatch(actions.changeLocation("Taco Bell"));
	},
	render: function() {
		return(
		<div>
			<Location name={this.props.place} onClick={this.onClick}/>
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


