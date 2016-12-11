var Categories = require('./categories');

var getRandom = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
//Generates random category ID
var randomPlaces = Object.keys(Categories).map(function(place, index){
  return Categories[place][getRandom(0, Categories[place].length-1)]
});

var categoryIds = function(places){
	var list = "&categoryId=";
	for (var id in places){
		console.log(places[id].shortName);
		if(id<places.length-1){
	        list += places[id].id + ",";
		} else {
			list += places[id].id;
		}
	}
	console.log(list);
	return list;
}
var p = {
		url: "https://api.foursquare.com/v2/venues/search?",
        clId: "client_id=LT5PEZMUYPGXVYMZX0BDR1O2001DFRSKWV2DWI3AFFEPDWJZ",
        secret: "&client_secret=MYGCCF0ENAGRFLGAUKMOKYFIDJGULKUW0V0Q3UENAWVO2R2P",
       	v: "&v=20161201",
		near: "&near=philadelphia,pa",
		categoryId: "&categoryId=4bf58dd8d48988d150941735,4bf58dd8d48988d1cc941735,4bf58dd8d48988d16e941735",
		limit: "&limit=50",
		radius: "&radius=3000",
		m: "&m=foursquare"
};

var play = p.url + p.clId + p.secret + p.v + p.near + categoryIds(randomPlaces) + p.limit + p.radius + p.m;
exports.play = play;


var cs = {
		url: "https://api.foursquare.com/v2/venues/categories?",
        clId: "client_id=LT5PEZMUYPGXVYMZX0BDR1O2001DFRSKWV2DWI3AFFEPDWJZ",
        secret: "&client_secret=MYGCCF0ENAGRFLGAUKMOKYFIDJGULKUW0V0Q3UENAWVO2R2P",
       	v: "&v=20161121",
		ll: "&ll=39.9,-75.1",
		query: "&query=sushi",
		m: "&m=foursquare"
};

var categories = cs.url + cs.clId + cs.secret + cs.v;
exports.categories = categories;

