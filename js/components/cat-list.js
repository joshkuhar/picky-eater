var React = require('react');
var router = require('react-router');
var Link = router.Link;
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Button = require('./button');
var Location = require('./location');

var Categories = function(props) {
	var x = props.locations;
	console.log(x);
	var places =[];
	for (var i = 0; i<x.length; i++) {
		var b = "{";
		var c = "},";
		var d =":";
		var index = x[i];
		var place = index.name;
		var cId = index.id;
		var sName = index.shortName;	
			places.push(
				<div key={index.id}>
					{b}
					<div>place: "{place}",</div>
					<div>id: "{cId}",</div>
					<div>shortName: "{sName}"</div>
					{c}
					<br/>
				</div>
				)
	}
	return (
		<div>
			{places}
		</div>
	)
};

module.exports = Categories;