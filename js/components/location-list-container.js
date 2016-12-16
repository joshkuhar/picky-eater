var React = require('react');
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Button = require('./button');
var Locations = require('./location-list');
var Timer = require('./timer');
var Categories = require('../actions/categories');

var LocationList = React.createClass({
	onClick: function() {
		var randomPlaces = Object.keys(Categories).map(function(place, index){
			return Categories[place][Math.floor((Math.random() * Categories[place].length-1) + 1)]
			});
		this.props.dispatch(actions.getLocations(randomPlaces));
		{/*
		var self = this;
		var startTimer = setInterval(function(){ 
			self.props.dispatch(actions.countDown());
			if (self.props.time < 1){
					clearInterval(startTimer);
				};
			}, 1000);
		*/}
	},
	render: function() {

		return(

				<div>
					<Button name="Shuffle" onClick={this.onClick} />
					<Locations locations={this.props.locations}  />
				</div>

			)
	}
});

var mapStateToProps = function(state, props) {
    return {

        locations: state.places,
        time: state.time,
        categoriesCount: state.categoriesCount
    };
};

var Container = connect(mapStateToProps)(LocationList);

module.exports = Container;
	
{/*
	this.props.dispatch(actions.countDown()) 

*/}