var CHANGE_LOCATION = 'CHANGE_LOCATION';
var changeLocation = function(location){
	return {
		type: CHANGE_LOCATION,
		location: location
		};
};

exports.CHANGE_LOCATION = CHANGE_LOCATION;
exports.changeLocation = changeLocation;

// var randomNumber = function(){
// 	var number = somerandom;
// 	return{
// 		type: RANDOM_NUM,
// 		number: number
// 	}
// }