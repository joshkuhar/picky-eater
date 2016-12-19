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
	//This action saves the local area the user is searching
	if (action.type === actions.SAVE_LOCATION) {
		return {
			searchText: action.searchText,
			places: action.locations
		}
	}
	else if (action.type === actions.GET_LOCATIONS) {
		return {
			places: action.locations, 
			searchText: state.searchText
		}
	} 
	else if (action.type === actions.FETCH_SUCCESS) {
		return {
			name: action.data.name,
			address: action.data.location.address,
			locationId: action.data.id,
			verified: action.data.verified,
			places: state.places,
			searchText: state.searchText,
			lat: action.data.location.lat,
			lng: action.data.location.lng
		}
	}
		else if (action.type === actions.CACHE_LOCATION) {
		return {
			name: state.name,
			address: state.address,
			locationId: state.locationId,
			verified: state.verified,
			searchText: state.searchText,
			lat: state.lat,
			lng: state.lng,
			cachedLocation: action.location
		}
	}
	else if (action.type === actions.FETCH_LOCATION_SUCCESS) {
		return {
			name: action.name,
			address: action.address,
			rating: action.rating,
			places: state.places,
			searchText: state.searchText
		}
	}
	else if (action.type === actions.FETCH_MAP_SUCCESS) {
		return {
			map: action.map
		}
	}
	return state;
};

exports.locationReducer = locationReducer;


