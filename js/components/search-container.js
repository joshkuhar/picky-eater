var React = require('react');
var store = require('../store');
var connect = require('react-redux').connect;
var router = require('react-router');
var hashHistory = router.hashHistory;
var Link = router.Link;
var Button = require('./button');
var actions = require('../actions/index');
var Categories = require('../actions/categories');
var ReactDOM = require('react-dom');


var SearchContainer = React.createClass({
	handleSearchChange: function(event) {
		this.props.dispatch(actions.changeSearch(event.target.value));
	},
	onClick: function(event) {
		event.preventDefault();
		this.props.dispatch(actions.saveLocation(this.props.searchText));
		hashHistory.push('/locations/play');
	},
	render: function() {
		return (
			<div className="search-container">
				<div className="short-instructions">Enter the area you want to search and then click "I'm Hungry"</div>
				  <form className="search-box">
					<input type="text" placeholder="Search Near" value={this.props.searchText} onChange={this.handleSearchChange} />
	           	 	<button type="button" className="search-locations" onClick={this.onClick}>
	                	Search
	            	</button>
	              </form>
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
