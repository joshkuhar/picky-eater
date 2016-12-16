var React = require('react');
var store = require('../store');
var connect = require('react-redux').connect;
var Button = require('./button');
var Categories = require('../actions/categories');

var Search = function(props){
	return (
		<div>
			<input type="text" ref={props.searchWord}/>
			<Button name="Search" onClick={props.onClick}/>
			<div>{props.text}</div>
		</div>
		
		)
};

module.exports = Search;