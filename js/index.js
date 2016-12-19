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
var Instructions = require('./components/instructions');
var Search = require('./components/search-container');
var CategoryList = require('./components/category-names-list-container');
var Offer = require('./components/offer-container');
var OfferDetails = require('./components/offer-details-container');

var Page404 = require('./components/page404');

var Routes = (
	<Provider store={store} >
		<Router history={hashHistory}>
			<Route path="/locations" component={App}>
				<IndexRoute component={Search} />
				<Route path="instructions" component={Instructions} />
				<Route path="play"component={CategoryList} />
				<Route path="play/:locationId" component={Offer} />
				<Route path="play/:locationId/:locationDetailsId" component={OfferDetails} />
			</Route>
	    </Router>
	</Provider>
	);


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(Routes, document.getElementById('app'));
});


{/*




*/}




