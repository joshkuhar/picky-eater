var React = require('react');
var store = require('../store');
var Button = require('./button');
var Cats = require('./cat-list-container');

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
			</div>
			<div>
				{this.props.children}
			</div>
		</div>

		)
	}
});

module.exports = App;