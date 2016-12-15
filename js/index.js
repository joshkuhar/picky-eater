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
var LocationList = require('./components/location-list-container');
var Location = require('./components/location-container');
var LocationDetails = require('./components/location-details-container');

var Page404 = require('./components/page404');

var Bar = function(){
	return (<div> Bar </div>)
}

var Routes = (
	<Provider store={store} >
		<Router history={hashHistory}>
			<Route path="/locations" component={App}>
				<IndexRoute component={LocationList} />
				<Route path=":locationId" component={Location} />
				<Route path=":locationId/:locationDetailsId" component={LocationDetails} />
			</Route>
	    </Router>
	</Provider>
	);


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(Routes, document.getElementById('app'));
});


{/*




*/}




