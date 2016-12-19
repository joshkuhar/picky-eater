require('isomorphic-fetch');

var SAVE_LOCATION = 'SAVE_LOCATION';
var saveLocation = function(searchText, categories){
    return {
        type: SAVE_LOCATION,
        searchText: searchText,
        categories: categories
    }
};
exports.SAVE_LOCATION = SAVE_LOCATION;
exports.saveLocation = saveLocation;

var GET_CATEGORIES = 'GET_CATEGORIES';
var getCategories = function(categories) {
    return {
        type: GET_CATEGORIES,
        categories: categories
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

var CACHE_LOCATION = 'CACHE_LOCATION';
var cacheLocation = function(location) {
    return {
        type: CACHE_LOCATION,
        location: location
    }
}
exports.CACHE_LOCATION = CACHE_LOCATION;
exports.cacheLocation = cacheLocation;



var FETCH_SUCCESS = 'FETCH_SUCCESS';
var fetchSuccess = function(data) {
	return {
		type: FETCH_SUCCESS,
		data: data
	}
};
exports.FETCH_SUCCESS = FETCH_SUCCESS;
exports.fetchSuccess = fetchSuccess;


var FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS';
var fetchLocationSuccess = function(data){
    return {
        type: FETCH_LOCATION_SUCCESS,
        address: data.location.address,
        name: data.name,
        rating: data.rating
    }
};
exports.FETCH_LOCATION_SUCCESS = FETCH_LOCATION_SUCCESS;
exports.fetchLocationSuccess = fetchLocationSuccess;

var FETCH_MAP_SUCCESS = 'FETCH_MAP_SUCCESS';
var fetchMapSuccess = function(map){
    return {
        type: FETCH_MAP_SUCCESS,
        map: map
    }
}
exports.FETCH_LOCATION_SUCCESS = FETCH_LOCATION_SUCCESS;
exports.fetchMapSuccess = fetchMapSuccess;

var fetchLocations = function(id, searchText) {
    var p = {
        url: "https://api.foursquare.com/v2/venues/search?",
        clId: "client_id=LT5PEZMUYPGXVYMZX0BDR1O2001DFRSKWV2DWI3AFFEPDWJZ",
        secret: "&client_secret=MYGCCF0ENAGRFLGAUKMOKYFIDJGULKUW0V0Q3UENAWVO2R2P",
        v: "&v=20161201",
        near: "&near=",
        categoryId: "&categoryId=",
        limit: "&limit=50",
        radius: "&radius=3000",
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
            var location = data.response.venues;
            var randomLocation = location[Math.floor((Math.random() * location.length-1) + 1)];
            console.log(randomLocation);
            return dispatch(
                fetchSuccess(randomLocation)
            );
        })
        .catch(function(error) {
           console.log(error);
        });
    }
};

exports.fetchLocations = fetchLocations;


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
            console.log(data);
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
            console.log(data.response.venue);
            return dispatch(
                fetchLocationSuccess(data.response.venue)
            );
        })
        .catch(function(error) {
           console.log(error);
        });
    }
};

exports.fetchSingleLocation = fetchSingleLocation;





























