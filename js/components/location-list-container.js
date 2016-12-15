var React = require('react');
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Button = require('./button');
var Locations = require('./location-list');
var Timer = require('./timer');
var Categories = require('../actions/categories');
var Data = require('../data');

var LocationList = React.createClass({
	onClick: function() {
		var self = this;
		var startTimer = setInterval(function(){ 
			var totalCategories = self.props.categoriesCount;
			var categoriesArray = [];
			if (self.props.time % 4 == 0){
				var randomPlaces = Object.keys(Categories);
				for (var category = 0; category < totalCategories; category++){
					var type = randomPlaces[category%randomPlaces.length];
					categoriesArray.push(Categories[type][Math.floor((Math.random() * Categories[type].length-1) + 1)])
				}
				self.props.dispatch(actions.getLocations(categoriesArray));
			}
			

			self.props.dispatch(actions.countDown());
			if (self.props.time < 1){
				clearInterval(startTimer);
			};
  			
  		}, 1000);


		

		{/*
		Categories[place][Math.floor((Math.random() * Categories[place].length-1) + 1)]



		var self = this;
		setInterval(function(){ 
			var randomPlaces = Object.keys(Categories).map(function(place, index){
				

		  		return Categories[place][Math.floor((Math.random() * Categories[place].length-1) + 1)]
		});
		
		

		
			self.props.dispatch(actions.getLocations(randomPlaces));
  			self.props.dispatch(actions.countDown());
  		}, 1000);
		*/}
	},
	startTimer: function(){

	},


	render: function() {

		return(
			<div>
				<Timer time={this.props.time} />
				<Button name="Timer" onClick={this.startTimer} />
				<Button name="Play" onClick={this.onClick} />
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