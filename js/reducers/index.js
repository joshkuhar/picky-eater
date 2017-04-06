var actions = require('../actions/index');

var initialState = {
	categories: "",
	searchText: "",
    address: "",
    city: "",
    name: "",
    rating: "",
    phone: "",
    variety: "",
    image: "",
    secondOfferId: "",
    chose: "",
    canonicalUrl: "",
    offerText: "",
    instructionsFlag: false

};

var locationReducer = function(state, action) {
	state = state || initialState;
	if (action.type === actions.SAVE_LOCATION) {
		return Object.assign({}, state, {
			searchText: action.searchText
		})
	}
	else if (action.type === actions.INSTRUCTIONS_FLAG) {
		return Object.assign({}, state, {
			instructionsFlag: true
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
	else if (action.type === actions.DISPLAY_OFFER_TEXT) {
		var offerText = "If you don't like what we suggested, that's too bad. You shouldn't have been such a picky eater. The other suggestion is gone and you can't go back. However, you can play again and get a new, completely random location.";
		return Object.assign({}, state, {
			offerText: offerText
		})
	}
	else if (action.type === actions.RESET_LOCATIONS) {
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
		    categories: "",
		    image: ""
		})
	}
	else if (action.type === actions.RESET_ALL) {
		return Object.assign({}, state, {
			address: "",
		    name: "",
		    rating: "",
		    phone: "",
		    variety: "",
		    lat: "",
		    lng: "",
		    secondOfferId: "",
		    categories: "",
		    image: "",
		    canonicalUrl: ""
		})
	}
	else if (action.type === actions.RESET_CHOSE) {
			return Object.assign({}, state, {
				chose: ""
			})
	}
	else if (action.type === actions.FETCH_SINGLE_LOCATION_SUCCESS) {
		return Object.assign({}, state, {
            address: action.address,
            city: action.city,
		    name: action.name,
		    rating: action.rating,
		    phone: action.phone,
		    variety: action.variety,
		    image: action.image,
		    lat: action.lat,
		    lng: action.lng,
		    canonicalUrl: action.canonicalUrl
		})
	}

	return state;
};

exports.locationReducer = locationReducer;


