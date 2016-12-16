var actions = require('../actions/index');
var Data = require('../data');

var initialState = {
	restaurant: Data.locations.pizza,
	places: "",
	data: Data,
	searchText: ""
};

var locationReducer = function(state, action) {
	state = state || initialState;
	if (action.type === actions.SAVE_LOCATION) {
		console.log('save location');
		return {
			searchText: action.searchText,
			places: action.locations
		}
	}
	else if (action.type === actions.GET_LOCATIONS) {
		console.log("get_locations");
		if(state.time % 4 == 0){
			var categoriesCount = state.categoriesCount - 1
		} else {
			var categoriesCount = state.categoriesCount
		}
		return {
			places: action.locations, 
			time: state.time, 
			categoriesCount: categoriesCount,
			searchText: state.searchText
		}
	} 
	else if (action.type === actions.GET_OFFER) {
		return {address: action.location + " I am the placeholder address, woooo"}
	} 
	else if (action.type === actions.FETCH_SUCCESS) {
		console.log(action);
		return {
			name: action.data.name,
			address: action.data.location.address,
			locationId: action.id,
			verified: action.verified,
			places: state.places,
			searchText: state.searchText
		}
	}
	else if (action.type === actions.FETCH_LOCATION_SUCCESS) {
		console.log("I am ", action);
		return {
			name: action.name,
			address: action.address,
			rating: action.rating,
			places: state.places,
			searchText: state.searchText
		}
	}
	else if(action.type === actions.COUNTDOWN) {
		var time = state.time - 1;
		return {
			time: time,
			places: state.places,
			categoriesCount: state.categoriesCount,
			searchText: state.searchText
		}
	}
	return state;
};

exports.locationReducer = locationReducer;


