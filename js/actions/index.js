require('isomorphic-fetch');

var GET_OFFER = 'GET_OFFER';
var getOffer = function(location){
	return {
		type: GET_OFFER,
		location: location
		};
};

exports.GET_OFFER = GET_OFFER;
exports.getOffer = getOffer;

var GET_LOCATIONS = 'GET_LOCATIONS';
var getLocations = function(locations) {
	return {
		type: GET_LOCATIONS,
		locations: locations
	}
};

exports.GET_LOCATIONS = GET_LOCATIONS;
exports.getLocations = getLocations;

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
    console.log('locationSucess ', data);
    return {
        type: FETCH_LOCATION_SUCCESS,
        address: data.location.address,
        name: data.name,
        rating: data.rating
    }
};

exports.FETCH_LOCATION_SUCCESS = FETCH_LOCATION_SUCCESS;
exports.fetchLocationSuccess = fetchLocationSuccess;

var COUNTDOWN = 'COUNTDOWN';
var countDown = function(){
        return { type: COUNTDOWN }   
    };



exports.COUNTDOWN = COUNTDOWN;
exports.countDown = countDown;

var fetchLocations = function(id) {
    var p = {
        url: "https://api.foursquare.com/v2/venues/search?",
        clId: "client_id=LT5PEZMUYPGXVYMZX0BDR1O2001DFRSKWV2DWI3AFFEPDWJZ",
        secret: "&client_secret=MYGCCF0ENAGRFLGAUKMOKYFIDJGULKUW0V0Q3UENAWVO2R2P",
        v: "&v=20161201",
        near: "&near=philadelphia,pa",
        categoryId: "&categoryId=",
        limit: "&limit=50",
        radius: "&radius=3000",
        m: "&m=foursquare"
    };
    var play = p.url + p.clId + p.secret + p.v + p.near + p.categoryId + id + p.limit + p.radius + p.m;

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
            //Parsed.parsed(data);
            return dispatch(
                fetchSuccess(data)
            );
        })
        .catch(function(error) {
           console.log(error);
        });
    }
};

exports.fetchLocations = fetchLocations;

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





























