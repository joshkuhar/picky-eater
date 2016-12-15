var React = require('react');
var router = require('react-router');
var store = require('../store');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Link = router.Link;
var Location = require('./location');
var Button = require('./button');

var LocationType = React.createClass({
	componentWillMount: function(){
		console.log("I am the params dsdsds ",  this.props.params.locationId)
		this.props.dispatch(actions.fetchLocations(this.props.params.locationId));
		//this.props.dispatch(actions.getOffer(this.props.params.local));
	},
	render: function(){
		console.log("foo props.address", this.props.address);
		return (
				<div>
					<div>I am the location container.</div>
					<div>{this.props.name}</div>
					<div>{this.props.address}</div>
					<div>{this.props.locationId}</div>
					<Link to={"/locations/" + this.props.params.locationId +"/"+ this.props.locationId}>select</Link>
				</div>			
				)
	}
});


var mapStateToProps = function(state, props) {
    return {
        name: state.name,
        address: state.address,
        locationId: state.locationId
    };
};

var Container = connect(mapStateToProps)(LocationType);

module.exports = Container;
	{/*


	*/}