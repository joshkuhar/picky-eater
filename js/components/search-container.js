var React = require('react');
var store = require('../store');
var connect = require('react-redux').connect;
var Button = require('./button');
var actions = require('../actions/index');
var Categories = require('../actions/categories');

var React = require('react');
var ReactDOM = require('react-dom');


var SearchContainer = React.createClass({
	onClick: function(){
		console.log(this.refs.searchWord.value);
		var searchWord = this.refs.searchWord.value;
		this.props.dispatch(actions.saveLocation(searchWord));
	},
	render: function() {
		return (
			<div>
				<input type="text" ref="searchWord"/>
				<Button name="Search" onClick={this.onClick}/>
				<div>{this.props.searchText}</div>
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
