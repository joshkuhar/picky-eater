var React = require('react');	
var router = require('react-router');
var Link = router.Link;
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Button = require('./button');
var Category = require('./category');

var CategoryNames = function(props) {
	var categories =[];
	for (var index = 0; index<props.categoryList.length; index++) {
		var singleCategory = props.categoryList[index];
		var shortName = singleCategory.shortName;
		var categoryId = singleCategory.id;	
		categories.push(
			<li className="category-option" key={index}>
			  <Link to={"/locations/play/" + categoryId} ><Category name={shortName} /></Link>	
			</li>
			)
	}
	return (
		
			<ul className="category-list">
			 {categories}
			</ul>
		
	)
};

module.exports = CategoryNames;
