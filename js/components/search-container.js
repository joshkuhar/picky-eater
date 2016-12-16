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
		
		var randomPlaces = Object.keys(Categories).map(function(place, index){
			return Categories[place][Math.floor((Math.random() * Categories[place].length-1) + 1)]
		});
		this.props.dispatch(actions.saveLocation(searchWord, randomPlaces));
	},
	render: function() {
		return (
			<div>
				<input type="text" ref={function(element) {
                	this.textInput = element;
            	}.bind(this)} />
           	 	<Link to={"/locations/play"} ><button type="button" onClick={this.onButtonClick}>
                	Click me!
            	</button></Link>
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
