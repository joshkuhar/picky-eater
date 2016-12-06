require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;
var Provider = require('react-redux').Provider;
var store = require('./store');

var LocationContainer = require('./components/location-container');

var routes = (
	<Provider store={store}>
	    <Router history={hashHistory}>
	        <Route path="/location" component={LocationContainer} />
	    </Router>
	</Provider>
);


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});