var actions = require('../actions/index');
var Data = require('../data');

var initialState = {
	restaurant: Data.locations.pizza,
	places: "",
	data: Data,
	time: 20,
	categoriesCount: 7
};

var locationReducer = function(state, action) {
	state = state || initialState;
	if (action.type === actions.GET_LOCATIONS) {
		if(state.time % 4 == 0){
			var categoriesCount = state.categoriesCount - 1
		} else {
			var categoriesCount = state.categoriesCount
		}
		return {
			places: action.locations, 
			time: state.time, 
			categoriesCount: categoriesCount
		}
	} 
	else if (action.type === actions.GET_OFFER) {
		return {address: action.location + " I am the placeholder address, woooo"}
	} //
	else if (action.type === actions.FETCH_SUCCESS) {
		return {
			name: action.data.response.venues[0].name,
			address: action.data.response.venues[0].location.address,
			locationId: action.data.response.venues[0].id,
			verified: action.data.response.venues[0].verified
		}
	}
	else if (action.type === actions.FETCH_LOCATION_SUCCESS) {
		console.log("I am ", action);
		return {
			name: action.name,
			address: action.address,
			rating: action.rating
		}
	}
	else if(action.type === actions.COUNTDOWN) {
		var time = state.time - 1;
		return {
			time: time,
			places: state.places,
			categoriesCount: state.categoriesCount
		}
	}
	return state;
};

exports.locationReducer = locationReducer;


