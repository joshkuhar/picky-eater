var React = require('react');
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Button = require('./button');
var Location = require('./location');
var Cat = require('./cat-list');
var Cats = require('../actions/categories');


var Categories = React.createClass({
	onClick: function() {
		console.log(Cats.international[0]);
		for (var i = 0; i<Cats.fastFood.length; i++){
			console.log(Cats.fastFood[i].shortName);
		}
		var state = store.getState();
		this.props.dispatch(actions.changeLocation(state));
	},
	render: function() {
		return(
		<div>
			<Cat locations={this.props.data} />
			<Button name="Click Me" onClick={this.onClick} />
		</div>
		)
	}
});
var mapStateToProps = function(state, props) {
    return {
        data: state.data
    };
};

var Container = connect(mapStateToProps)(Categories);

module.exports = Container;