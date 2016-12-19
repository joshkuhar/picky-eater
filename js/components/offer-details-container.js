var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var router = require('react-router');
var store = require('../store');
var Link = router.Link;



var Location = React.createClass({
	componentDidMount: function(){
		{/*var map = "https://maps.googleapis.com/maps/api/staticmap?center=39.95217145907466,-75.15955209732056&zoom=13&size=400x300&maptype=roadmap&markers=color:red%7Csize:mid%7Clabel:FOO%7C39.952171,-75.159552&key=AIzaSyCJoYNYymUXQ4O0QIA4By_MJpRWVEc98B4"*/}
		console.log(this.props.params.locationDetailsId, this.props.cachedLocation);	
		if( this.props.params.locationDetailsId != this.props.cachedLocation){
			this.props.dispatch(actions.fetchLocations(this.props.params.locationDetailsId, this.props.searchText));
		}
	},
	render: function() {
		var map = "https://maps.googleapis.com/maps/api/staticmap?center=";
		var ll = this.props.lat + "," + this.props.lng;
		var mapParams = "&zoom=15&size=400x300&maptype=roadmap&markers=color:red%7Csize:mid%7Clabel:A%7C";
		var secondLL = this.props.lat + "," + this.props.lng;
		var key = "&key=AIzaSyCJoYNYymUXQ4O0QIA4By_MJpRWVEc98B4";
		var locationMap = map + ll + mapParams + secondLL + key;
		return (
		<div>
			<div className="offer-container">
				<h3>Offer</h3>
				<div className="offer-header">Congratulations. You're eating here!</div>
				<div className="offer-name">Name: {this.props.name}</div>
				<div className="offer-address">Address: {this.props.address}</div>
				<img src={locationMap} />
			</div>
		</div>
		)
	}
});

var mapStateToProps = function(state, props) {
    return {
		name: state.name,
		address: state.address,
		locationId: state.locationId,
		verified: state.verified,
		places: state.places,
		searchText: state.searchText,
		cachedLocation: state.cachedLocation,
		lat: state.lat,
		lng: state.lng
    };
};

var Container = connect(mapStateToProps)(Location);

module.exports = Container;
{/*

			<Location address={this.props.address} name={this.props.name} />
			this.props.dispatch(actions.fetchSingleLocation(this.props.params.locationDetailsId));
*/}