var React = require('react');
var router = require('react-router');
var Link = router.Link;
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Button = require('./button');
var Location = require('./location');

var Locations = function(props) {
	var x = props.locations;
	var places =[];
	for (var i = 0; i<x.length; i++) {
		var index = x[i];
		var place = index.name;
		var locationId = index.id;
		if (index.location.address) {		
			places.push(
				<div key={index.id}>
					<Location locationId={index.id} name={place} address={index.location.address}/>
					<div>{index.categories[0].shortName}</div>
					<div>{"I am the test"}</div>
					<Link to={"/offer/" + locationId} ><Button name="Select" onClick={props.onClick}/></Link>
				</div>
				)
		}
	}
	return (
		<div>
			{places}
		</div>
	)
};

module.exports = Locations;
