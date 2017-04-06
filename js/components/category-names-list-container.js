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
		if (this.props.instructionsFlag == true) {
			return
		}
		this.props.dispatch(actions.getCategories(randomCategories()));
	},
	onClick: function(event) {
		event.preventDefault();
		this.props.dispatch(actions.getCategories(randomCategories()));
	},
	render: function() {
		return(
				<div className='categories-container'>
				  <div className="shuffle-instructions">Listed below are the types of restaraunts available. If you'd like other options, click the shuffle button</div>
				  <button className="shuffle-button" onClick={this.onClick}>shuffle</button>
				  <CategoryNames categoryList={this.props.categories} />
				</div>
			)
	}
});

var mapStateToProps = function(state, props) {
    return {
        categories: state.categories,
        instructionsFlag: state.instructionsFlag
    };
};

var Container = connect(mapStateToProps)(CategoryList);

module.exports = Container;
	