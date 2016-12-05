var React = require('react');

var Location = function(props){
	return (
		<div>
			<div>{props.name}</div>
			<div>{props.address}</div>
			<div>{props.phone}</div>
			<div>{props.hours}</div>
			<div>{props.description}</div>
			<button onClick={props.onClick}>Click Me</button>
		</div>
		)
};

module.exports = Location;