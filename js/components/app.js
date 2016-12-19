var React = require('react');
var store = require('../store');
var Button = require('./button');
var router = require('react-router');
var Link = router.Link;

var App = React.createClass({
	render: function(){
	return(
		<div>
			<div>
				<h2 className="headline">Restaraunt Picker</h2>
				<div className="nav-bar">
					<Link to={"/locations/instructions"} ><div className="nav-bar-item">Instructions</div></Link>
					<Link to={"/locations"} ><div className="nav-bar-item">Home</div></Link>
				</div>
			</div>
			<div>
				<div className="game-container">
					{this.props.children}
				</div>
			</div>
		</div>

		)
	}
});

module.exports = App;

