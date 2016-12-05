var React = require('react');
var Data = require('../data');
var Location = require('./location');

var Local = React.createClass({
	getInitialState: function(){
		return {
			name: Data.locations.pizza,
			index: 2
		}
	},
	onClick: function(){
		var place = Object.keys(Data.locations);
		this.setState({
			name: Data.locations[place[this.state.index % 3]],
			index: this.state.index + 1
		})
	},
	render: function() {
		return(
		<div>
			<Location name={this.state.name} onClick={this.onClick}/>
		</div>
		)
	}
});

module.exports = Local;

