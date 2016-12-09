var actions = require('../actions/index');
var Data = require('../data');

var initialState = {
	restaurant: Data.locations.pizza,
	index: 1,
	places: "",
	data: Data
};

var locationReducer = function(state, action) {
	state = state || initialState;
	if (action.type === actions.CHANGE_LOCATION) {
		var index = state.index + 1;
		return {restaurant: action.location, index: index, data: state.data}
	} 
	else if (action.type === actions.GET_LOCATIONS) {
		return {places: action.locations, data: Data, address: "I am the placeholder address, woooo"}
	} //
	else if (action.type === actions.FETCH_SUCCESS) {
		return {data: action.data}
	}
	return state;
};

exports.locationReducer = locationReducer;


