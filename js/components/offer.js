var React = require('react');
var router = require('react-router');
var Link = router.Link;
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Button = require('./button');

var Test = function(props) {
	var x = props.locationId;
	var name = "";
	var address = "";
	var t = props.locations;
	console.log("props.locations for offer ", t);
	for (var i = 0; i<props.locations.length; i++) {
		if (props.locations[i].id === props.locationId) {
			name = props.locations[i].name;
			address = props.locations[i].location.address;
		}
	}
	return(
		<div>
			<div>{name}</div>
			<div>{address}</div>
			<Link to={"/result"}><Button name="Button" onClick={props.onClick} /></Link>
		</div>
		)
};

module.exports = Test;