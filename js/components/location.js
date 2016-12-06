var React = require('react');

var Location = function(props){
	return (
		<div>
			<div>{props.name}</div>
			<div>{props.address}</div>
			<button onClick={props.onClick}>Click Me</button>
		</div>
		)
};

module.exports = Location;