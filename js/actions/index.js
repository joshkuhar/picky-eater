require('isomorphic-fetch');
var Calls = require('./api-Calls');
var Parsed = require('./functions');

var CHANGE_LOCATION = 'CHANGE_LOCATION';
var changeLocation = function(location){
	return {
		type: CHANGE_LOCATION,
		location: location
		};
};

exports.CHANGE_LOCATION = CHANGE_LOCATION;
exports.changeLocation = changeLocation;

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



var fetchLocations = function() {
    return function(dispatch) {
        return fetch(Calls.play).then(function(response) {
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
            Parsed.parsed(data);
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





























