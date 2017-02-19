var React = require('react');

var Category = function(props){
	return (
			<div className="category-name">
			  {props.name}
			</div>
		)
};

module.exports = Category;

