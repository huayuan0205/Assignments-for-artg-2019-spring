//You'll show messages in the console using console.log
console.log("Week-1 part-3: data structures");

//Let's start with an array of objects, representing a selection of US cities
const data = [
  {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
  {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
  {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
  {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
];

//Complete the following exercises by following the prompts

//#1
//Using array.forEach, print out (using console.log) the names of the 4 cities, followed by their population.
//The message should have the following sample format
//"seattle, WA has a population of 652405"
console.group("The names of 4 cities")
data.forEach(function(d){
	//YOUR CODE HERE
	console.log(`${d.city},${d.state} has a population of ${d.population}`);
});
console.groupEnd();

//#2
//Using array.forEach to sum up the populations of the 4 cities
//and print out the average population of the 4 cities
console.group("The population of 4 cities")
	//YOUR CODE HERE
	var sum = 0, avg;
	data.forEach(function(d,i){
		sum = sum + d.population;
		avg = sum/i;
	});
	console.log(`The sum population of 4 cities is ${sum}`);
	console.log(`The average population of 4 cities is ${avg}`);
console.groupEnd();

//#3
//Sort these 4 cities in terms of land area, from highest to lowest
//And print out the name of the city with the largest land area
//Hint: use array.sort
console.group("Sort 4 cities by land area")
	//YOUR CODE HERE
	const sort_by_land_area = data.sort(function(a,b){
		return b.land_area - a.land_area;
	});
	console.log(sort_by_land_area);
	console.log(`The city with the largest land area is ${sort_by_land_area[0].city}, and its land area is ${sort_by_land_area[0].land_area}`);
console.groupEnd();

//#4
//Using array.map, compute the population density of these 4 cities (population divided by area)
//add population density as a property to each object, and return the array
console.group("Population density")
	//YOUR CODE HERE
	const pop_density = data.map(function(d){
		return d.population / d.land_area;
	})
	console.log(pop_density);
	
	data.forEach(function(d,i){
		data[i]["population_density"] = d.population / d.land_area;
	});
	//data.push(pop_density);
	console.log(data);
console.groupEnd();

//#5
//Using array.filter, return a subset of the cities with a population <1 million
console.group("Population less than a million")
const less_than_a_million = data.filter(function(d){
	return d.population<1000000;
})
console.log(less_than_a_million);
console.groupEnd();







