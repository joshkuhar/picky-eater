var React = require('react');
var store = require('../store');
var Button = require('./button');
var router = require('react-router');
var Link = router.Link;

var App = React.createClass({
	showStore: function(event) {
		event.preventDefault();
		// console.log("I was clicked");
		console.log(store.getState());
	},
	render: function(){
	return(
		<div>
			<div className="main-photo">
				<button onClick={this.showStore} className="store-button">store</button>
				<h2 className="headline">Picky Eater</h2>
				<div className="nav-bar">
				  <Link to={"/locations"} ><div className="nav-bar-item">Home</div></Link>
			      <Link to={"/locations/instructions"} ><div className="nav-bar-item">Instructions</div></Link>
				</div>
			</div>
			  <div className="game-container">
				{this.props.children}
			  </div>
			  <div className="footer">
			    <div className="attribution footer-item">Photo via Unsplash</div>
			    <div className="legal footer-item">&copy; 2017 Josh Kuhar</div>
			    <div className="foursquare footer-item">Locations provided by <a href="https://foursquare.com" className="foursquare-link">Foursquare</a></div>
			  </div>
		</div>

		)
	}
});

module.exports = App;

