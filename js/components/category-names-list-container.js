var React = require('react');
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Button = require('./button');
var CategoryNames = require('./category-names-list');
var Categories = require('../actions/categories');

var randomCategories = function(){
 var cats = Object.keys(Categories).map(function(category, index){
	return Categories[category][Math.floor((Math.random() * Categories[category].length-1) + 1)]
	})
 return cats;
};

var CategoryList = React.createClass({
	componentDidMount: function() {
		this.props.dispatch(actions.getCategories(randomCategories()));
	},
	onClick: function(event) {
		event.preventDefault();
		this.props.dispatch(actions.getCategories(randomCategories()));
	},
	render: function() {
		return(
				<div className='categories-container'>
				  <button className="shuffle-button" onClick={this.onClick}>shuffle</button>
				  <CategoryNames categoryList={this.props.categories} />
				</div>
			)
	}
});

var mapStateToProps = function(state, props) {
    return {
        categories: state.categories
    };
};

var Container = connect(mapStateToProps)(CategoryList);

module.exports = Container;
	