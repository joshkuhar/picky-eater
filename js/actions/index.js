require('isomorphic-fetch');

var CHANGE_SEARCH = 'CHANGE_SEARCH';
var changeSearch = function(text) {
    return {
        type: CHANGE_SEARCH,
        text: text
    }
}
exports.CHANGE_SEARCH = CHANGE_SEARCH;
exports.changeSearch = changeSearch;

var INSTRUCTIONS_FLAG = 'INSTRUCTIONS_FLAG';
var instructionsFlag = function() {
    return {
        type: INSTRUCTIONS_FLAG
    }
};
exports.INSTRUCTIONS_FLAG = INSTRUCTIONS_FLAG;
exports.instructionsFlag = instructionsFlag;

var RESET_INSTRUCTIONS_FLAG = 'RESET_INSTRUCTIONS_FLAG';
var resetInstructionsFlag = function() {
    return {
        type: RESET_INSTRUCTIONS_FLAG
    }
};
exports.RESET_INSTRUCTIONS_FLAG = RESET_INSTRUCTIONS_FLAG;
exports.resetInstructionsFlag = resetInstructionsFlag;

var SAVE_LOCATION = 'SAVE_LOCATION';
var saveLocation = function(searchText){
    return {
        type: SAVE_LOCATION,
        searchText: searchText
    }
};
exports.SAVE_LOCATION = SAVE_LOCATION;
exports.saveLocation = saveLocation;

var GET_CATEGORIES = 'GET_CATEGORIES';
var getCategories = function(categories) {
    return {
        type: GET_CATEGORIES,
        categories: categories,
        secondOfferId: categories[2].id
    }
};
exports.GET_CATEGORIES = GET_CATEGORIES;
exports.getCategories = getCategories;

var GET_OFFER = 'GET_OFFER';
var getOffer = function(location){
	return {   
		type: GET_OFFER,
		location: location
		};
};
exports.GET_OFFER = GET_OFFER;
exports.getOffer = getOffer;

var CHOICE_MADE = 'CHOICE_MADE';
var choiceMade = function() {
    return {
        type: 'CHOICE_MADE',
        chose: "chose"
    }
}
exports.CHOICE_MADE = CHOICE_MADE;
exports.choiceMade = choiceMade;

var RESET_LOCATIONS = 'RESET_LOCATIONS';
var resetLocations = function() {
    return {
        type: RESET_LOCATIONS
    }
}
exports.RESET_LOCATIONS = RESET_LOCATIONS;
exports.resetLocations = resetLocations;

var RESET_CHOSE = 'RESET_CHOSE';
var resetChose = function() {
    return {
        type: RESET_CHOSE
    }
}
exports.RESET_CHOSE = RESET_CHOSE;
exports.resetChose = resetChose;

var RESET_ALL =  'RESET_ALL';
var resetAll = function(){
    return {
        type: RESET_ALL
    }
}
exports.RESET_ALL = RESET_ALL;
exports.resetAll = resetAll;

var FETCH_SUCCESS = 'FETCH_SUCCESS';
var fetchSuccess = function(id, data, secondOfferId) {
	return {
		type: FETCH_SUCCESS,
        id: id,
		data: data,
        secondOfferId: secondOfferId
	}
};
exports.FETCH_SUCCESS = FETCH_SUCCESS;
exports.fetchSuccess = fetchSuccess;

var FETCH_CACHED_LOCATIONS = 'FETCH_CACHED_LOCATIONS';
var fetchCachedLocations = function(){
    return {
        type: FETCH_CACHED_LOCATIONS
    }
}
exports.FETCH_CACHED_LOCATIONS = FETCH_CACHED_LOCATIONS;
exports.fetchCachedLocations = fetchCachedLocations;

var FETCH_MAP_SUCCESS = 'FETCH_MAP_SUCCESS';
var fetchMapSuccess = function(map){
    return {
        type: FETCH_MAP_SUCCESS,
        map: map
    }
}
exports.FETCH_MAP_SUCCESS = FETCH_MAP_SUCCESS;
exports.fetchMapSuccess = fetchMapSuccess;

var DISPLAY_OFFER_TEXT = 'DISPLAY_OFFER_TEXT';
var displayOfferText = function(){
    return {
        type: DISPLAY_OFFER_TEXT
    }
}
exports.DISPLAY_OFFER_TEXT = DISPLAY_OFFER_TEXT;
exports.displayOfferText = displayOfferText;


var fetchLocations = function(id, searchText, secondOfferId) {
    var p = {
        url: "https://api.foursquare.com/v2/venues/search?",
        clId: "client_id=LT5PEZMUYPGXVYMZX0BDR1O2001DFRSKWV2DWI3AFFEPDWJZ",
        secret: "&client_secret=MYGCCF0ENAGRFLGAUKMOKYFIDJGULKUW0V0Q3UENAWVO2R2P",
        v: "&v=20161201",
        near: "&near=",
        categoryId: "&categoryId=",
        limit: "&limit=50",
        radius: "&radius=5000",
        m: "&m=foursquare"
    };
    var play = p.url + p.clId + p.secret + p.v + p.near + searchText + p.categoryId + id + p.limit + p.radius + p.m;

    return function(dispatch) {
        return fetch(play).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var venues = data.response.venues;
            var venuesIndex = Math.floor((Math.random() * venues.length-1) + 1);
            var randomLocation = venues[venuesIndex];
            if (randomLocation.stats.checkinsCount < 5) {
                randomLocation = venues[0];
            }
            return dispatch(
                fetchSingleLocation(randomLocation.id)
            );
        })
        .catch(function(error) {
           console.log(error);
        });
    }
};
exports.fetchLocations = fetchLocations;

var FETCH_SINGLE_LOCATION_SUCCESS = 'FETCH_SINGLE_LOCATION_SUCCESS';
var fetchSingleLocationSuccess = function(venue){
    return {
        type: FETCH_SINGLE_LOCATION_SUCCESS,
        address: venue.location.address,
        city: venue.location.city,
        name: venue.name,
        rating: venue.rating,
        phone: venue.contact.formattedPhone,
        variety: venue.categories[0].name,
        lat: venue.location.lat,
        lng: venue.location.lng,
        image: venue.bestPhoto.prefix + "300x300" + venue.bestPhoto.suffix,
        canonicalUrl: venue.canonicalUrl

    }
};
exports.FETCH_SINGLE_LOCATION_SUCCESS = FETCH_SINGLE_LOCATION_SUCCESS;
exports.fetchSingleLocationSuccess = fetchSingleLocationSuccess;

var fetchSingleLocation = function(id) {
    var p = {
        url: "https://api.foursquare.com/v2/venues/",
        clId: "&client_id=LT5PEZMUYPGXVYMZX0BDR1O2001DFRSKWV2DWI3AFFEPDWJZ",
        secret: "&client_secret=MYGCCF0ENAGRFLGAUKMOKYFIDJGULKUW0V0Q3UENAWVO2R2P",
        v: "v=20161201",
        m: "&m=foursquare"
    };
    var play = p.url + id + "?"  + p.v + p.m + p.clId + p.secret;

    return function(dispatch) {
        return fetch(play).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;    
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var venue = data.response.venue;
            return dispatch(
                fetchSingleLocationSuccess(venue)
            );
        })
        .catch(function(error) {
           console.log(error);
        });
    }
};

exports.fetchSingleLocation = fetchSingleLocation;


var fetchMap = function(map) {
    console.log("I was called", map);
    return function(dispatch) {
        return fetch(map).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        // .then(function(response) {
        //     console.log(response);
        //     return response.json();
        // })
        .then(function(data) {
            return dispatch(
                fetchMapSuccess(data)
            );
        })
        .catch(function(error) {
           console.log(error);
        });
    }
};

exports.fetchMap = fetchMap;



























