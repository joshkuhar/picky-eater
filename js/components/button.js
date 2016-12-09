var React = require('react');

var Button = function(props) {
	return (
		<button onClick={props.onClick}>
			{props.name}
		</button>
		)
};

module.exports =  Button;