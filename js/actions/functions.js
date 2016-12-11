var parsed = function(data){
	console.log(data);
	var place = data.response.venues;
	var locations = [];
	for (var index in place){
		if(place[index].categories){
			console.log(place[index].categories);
			console.log(place[index].categories[0].shortName);
		}
	}
};

exports.parsed = parsed;