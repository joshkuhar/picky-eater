var React = require('react');
var router = require('react-router');
var Link = router.Link;
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Button = require('./button');
var Location = require('./location');

var Locations = function(props) {
	var places =[];
	for (var index = 0; index<props.locations.length; index++) {
		var singleLocation = props.locations[index];
		var shortName = singleLocation.shortName;
		var locationId = singleLocation.id;	
		console.log(singleLocation, locationId, shortName)
		places.push(
			<div key={index}>
				<Location locationId={locationId} name={shortName} />
				<Link to={"/locations/play/" + locationId} ><Button name="Select" /></Link>
			</div>
			)
	}
	return (
		<div>
			{places}
		</div>
	)
};

module.exports = Locations;
