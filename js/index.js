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


var App = require('./components/app');
var Offer = require('./components/offer-container');
var Result = require('./components/offer-result');
var LocationContainer = require('./components/location-container');
var LocationList = require('./components/location-list-container');

var routes = (
	<Provider store={store}>
	    <Router history={hashHistory}>
	    	<Route path="/" component={App}>
	    		<Route path="/offer/:local" component={Offer} >
	    			<Route path="/offer/result" component={Result} />
	    		</Route>
	    		<Route path="/result" component={Result} />
	        	<Route path="/location" component={LocationContainer} />
	        	<Route path="/locations" component={LocationList} />
	        </Route>
	    </Router>
	</Provider>
);


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});