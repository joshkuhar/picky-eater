var React = require('react');
var store = require('../store');
var connect = require('react-redux').connect;
var router = require('react-router');
var Link = router.Link;
var Button = require('./button');
var actions = require('../actions/index');
var Categories = require('../actions/categories');

var React = require('react');
var ReactDOM = require('react-dom');


var SearchContainer = React.createClass({
	onButtonClick: function() {
	    var searchWord = this.textInput.value;
		var randomCategories = Object.keys(Categories).map(function(place, index){
			return Categories[place][Math.floor((Math.random() * Categories[place].length-1) + 1)]
		});
		this.props.dispatch(actions.saveLocation(searchWord, randomCategories));
	},
	render: function() {
		return (
			<div className="search-container">
				<div className="short-instructions">Enter the area you want to search and then click "I'm Hungry"</div>
				<div className="search-box">
					<input type="text" placeholder="Search Near" ref={function(element) {
	                	this.textInput = element;
	            	}.bind(this)} />
	           	 	<Link to={"/locations/play"} ><button type="button" className="search-locations" onClick={this.onButtonClick}>
	                	Search
	            	</button></Link>
				</div>
			</div>
		)
	}
});


var mapStateToProps = function(state, props) {
    return {
		searchText: state.searchText
    };
};

var Container = connect(mapStateToProps)(SearchContainer);

module.exports = Container;
