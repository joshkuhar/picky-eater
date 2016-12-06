var actions = require('../actions/index');
var Data = require('../data');

var initialState = {
	restaurant: Data.locations.pizza,
	index: 1
};

var locationReducer = function(state, action) {
	state = state || initialState;
	console.log(state);
	if (action.type === actions.CHANGE_LOCATION) {
		var place = Object.keys(Data.locations);
		var name = Data.locations[place[state.index % place.length]];
		var index = state.index + 1;
		return {restaurant: name, index: index}
	}
	return state;
};

exports.locationReducer = locationReducer;


