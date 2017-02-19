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
			<div className="category-option" key={index}>
					<Category categoryId={categoryId} name={shortName} />
					<Link to={"/locations/play/" + categoryId} ><Button className="category-button" name="Select" onClick={props.onClick}/></Link>	
			</div>
			)
	}
	return (
		
			<div >
			 {categories}
			</div>
		
	)
};

module.exports = CategoryNames;
