// var React = require('react');
// var store = require('../store');
// var connect = require('react-redux').connect;
// var Button = require('./button');
// var actions = require('../actions/index');
// var Categories = require('../actions/categories');
// var Search = require('./search');

// var React = require('react');
// var ReactDOM = require('react-dom');


// var SearchContainer = React.createClass({
// 	onClick: function(){
// 		var searchWord = this.refs.searchWord.value;
// 		this.props.dispatch(actions.saveLocationToSearch(searchWord));
// 	},
// 	render: function() {
// 		return <Search text={this.props.searchText} onClick={this.onClick} searchWord={this.searchWord}/>
// 	}

// });


// var mapStateToProps = function(state, props) {
//     return {
// 		searchText: state.searchText
//     };
// };

// var Container = connect(mapStateToProps)(SearchContainer);

// module.exports = Container;