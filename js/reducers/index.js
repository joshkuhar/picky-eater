var actions = require('../actions/index');

var initialState = {
	categories: "",
	searchText: "",
    address: "",
    name: "",
    rating: "",
    phone: "",
    variety: "",
    secondOfferId: "",
    chose: ""

};

var locationReducer = function(state, action) {
	state = state || initialState;
	if (action.type === actions.SAVE_LOCATION) {
		return Object.assign({}, state, {
			searchText: action.searchText
		})
	}
	else if (action.type === actions.CHANGE_SEARCH) {
		return Object.assign({}, state, {
			searchText: action.text
		})
	}
	else if (action.type === actions.GET_CATEGORIES) {
		return Object.assign({}, state, {
			categories: action.categories,
			secondOfferId: action.secondOfferId
		})
	} 
	else if (action.type === actions.CHOICE_MADE) {
		return Object.assign({}, state, {
			chose: action.chose
		})
	}
	else if (action.type === actions.RESET_LOCATIONS) {
		console.log(state);
		return Object.assign({}, state, {
			address: "",
		    name: "",
		    rating: "",
		    phone: "",
		    variety: "",
		    lat: "",
		    lng: "",
		    searchText: "",
		    chose: "",
		    secondOfferId: "",
		    categories: ""
		})
	}
	else if (action.type === actions.FETCH_SINGLE_LOCATION_SUCCESS) {
		return Object.assign({}, state, {
            address: action.address,
		    name: action.name,
		    rating: action.rating,
		    phone: action.phone,
		    variety: action.variety,
		    lat: action.lat,
		    lng: action.lng
		})
	}

	return state;
};

exports.locationReducer = locationReducer;


