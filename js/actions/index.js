require('isomorphic-fetch');

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
	console.log(data);
	return {
		type: FETCH_SUCCESS,
		data: data
	}
};

exports.FETCH_SUCCESS = FETCH_SUCCESS;
exports.fetchSuccess = fetchSuccess;



var fetchLocations = function() {
    return function(dispatch) {
        var url = "https://api.foursquare.com/v2/venues/search?"; 
        var ClId = "client_id=LT5PEZMUYPGXVYMZX0BDR1O2001DFRSKWV2DWI3AFFEPDWJZ";
        var secret = "&client_secret=MYGCCF0ENAGRFLGAUKMOKYFIDJGULKUW0V0Q3UENAWVO2R2P";
       	var v = "&v=20161121";
		var ll = "&ll=39.9,-75.1";
		var query = "&query=sushi";
		var m = "$m=foursquare";
        return fetch(url+ClId+secret+v+ll+query+m).then(function(response) {
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




