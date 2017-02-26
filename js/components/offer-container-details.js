var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var router = require('react-router');
var store = require('../store');
var Link = router.Link;



var Location = React.createClass({
	componentWillMount: function() {
		this.props.dispatch(actions.choiceMade());
	},
	componentDidMount: function(){
		if( this.props.params.choice == "alternate") {
			this.props.dispatch(actions.fetchLocations(this.props.secondOfferId, this.props.searchText))
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
		  <div className="final-offer">Here's Your Pick</div>
			<div className="offer-container">
			  <img src={locationMap} className="g-map"/>
			  <div className="offer-name">{this.props.name}</div>
			  <div className="offer-address">{this.props.address}</div>	
			  <div className="offer-address">{this.props.city}</div>
			  <div className="phone">{this.props.phone}</div>
			</div>
		</div>
		)
	}
});

var mapStateToProps = function(state, props) {
    return {
		name: state.name,
		address: state.address,
		city: state.city,
		locationId: state.locationId,
		verified: state.verified,
		lat: state.lat,
		lng: state.lng,
        rating: state.rating,
        phone: state.phone,
        variety: state.variety,
        secondOfferId: state.secondOfferId,
        searchText: state.searchText
    };
};

var Container = connect(mapStateToProps)(Location);

module.exports = Container;
{/*

			<Location address={this.props.address} name={this.props.name} />
			this.props.dispatch(actions.fetchSingleLocation(this.props.params.locationDetailsId));
*/}