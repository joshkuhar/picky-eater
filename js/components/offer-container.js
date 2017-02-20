var React = require('react');
var router = require('react-router');
var hashHistory = router.hashHistory;
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Link = router.Link;
var Categories = require('../actions/categories');
var Button = require('./button');
var Offer = require('./offer');

var LocationType = React.createClass({
	componentDidMount: function(){
		if (this.props.chose) {
			this.props.dispatch(actions.resetLocations());
			hashHistory.push('/locations');
			return
		}
		this.props.dispatch(actions.fetchLocations(this.props.params.locationId, this.props.searchText));
	},
	render: function(){
		return (
			<div>
			  <Offer name={this.props.name} onClick={this.onClick} name={this.props.name} address={this.props.address} rating={this.props.rating} phone={this.props.phone} variety={this.props.variety} image={this.props.image} canLink={this.props.canonicalUrl}/>
			</div>
				)
	}
});

var mapStateToProps = function(state, props) {
    return {
        name: state.name,
        address: state.address,
        rating: state.rating,
        phone: state.phone,
        variety: state.variety,
        image: state.image,
        locationId: state.locationId,
        categories: state.categories,
        searchText: state.searchText,
        cachedLocation: state.cachedLocation,
        secondOfferId: state.secondOfferId,
        firstLocation: state.firstLocation,
        chose: state.chose,
        canonicalUrl: state.canonicalUrl
    };
};

var Container = connect(mapStateToProps)(LocationType);

module.exports = Container;