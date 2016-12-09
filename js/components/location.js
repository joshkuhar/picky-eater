var React = require('react');

var Location = function(props){
	return (
		<div>
			<div>{props.name}</div>
			<div>{props.address}</div>
		</div>
		)
};

module.exports = Location;