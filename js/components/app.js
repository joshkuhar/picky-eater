var React = require('react');
var store = require('../store');
var Button = require('./button');

var App = React.createClass({
	onClick: function(){
		console.log(store.getState());

	},
	render: function(){
	return(
		<div>
			<Button name="Store" onClick={this.onClick} />
			<div>
				<h3>Locations</h3>
				<div>Instructions</div>
				<div>About</div>
				<div>Play</div>
			</div>
			<div>
				{this.props.children}
			</div>
		</div>

		)
	}
});

module.exports = App;