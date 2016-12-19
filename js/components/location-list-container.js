var React = require('react');
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Button = require('./button');
var Locations = require('./location-list');
var Categories = require('../actions/categories');

var LocationList = React.createClass({
	onClick: function() {
		var randomPlaces = Object.keys(Categories).map(function(place, index){
			return Categories[place][Math.floor((Math.random() * Categories[place].length-1) + 1)]
			});
		this.props.dispatch(actions.getLocations(randomPlaces));
	},
	render: function() {

		return(
				<div className='location-list'>
					<div>
						<div className='shuffle-button'>
							<Button name="Shuffle" onClick={this.onClick} />
						</div>	
						<Locations locations={this.props.locations}  />
					</div>
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
	