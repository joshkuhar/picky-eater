var React = require('react');
var router = require('react-router');
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');

var Timer = function(props){
	return(
		<div>
			{props.time}
		</div>

		)
};

module.exports = Timer;
