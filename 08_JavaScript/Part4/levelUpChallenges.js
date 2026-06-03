/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/
let chosenTea = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < chosenTea.length; i++) {
   if(chosenTea[i]==="chai") break;
   selectedTeas.push(chosenTea[i]);
}
// console.log(selectedTeas);

 
/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/
let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for(let i=0; i<cities.length; i++){
   if(cities[i]==="Paris") continue;
   visitedCities.push(cities[i]);
}
// console.log(visitedCities);


/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/
let numbers = [1,2,3,4,5];
let smallNumber = [];
for(let num of numbers){
   if(num===4) break;
    smallNumber.push(num);
}
// console.log(smallNumber);

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/
let chais = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for(let chai of chais){
   if(chai==="herbal tea") continue;
   preferredTeas.push(chai);
}
// console.log(preferredTeas);



/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
//    */
let citiesPopulation = {
   "London": 8900000,
   "New York": 8400000,
   "Paris": 2200000,
   "Berlin": 3500000
};
let cityPop = {};
for(let city in citiesPopulation){
   if(city==="Berlin") break;
   cityPop[city]=citiesPopulation[city];
}
// console.log(Object.values(citiesPopulation));


/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

   */
let worldCities = {
   "Sydney": 5000000,
   "Tokyo": 9000000,
   "Berlin": 3500000,
   "Paris": 2200000
}

let populatedCities = {};

for(let city in worldCities){
   if(worldCities[city]<3000000) continue;
   populatedCities[city] = worldCities[city];
}
// console.log(populatedCities);



/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/
let teas = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teas.forEach((tea)=>{
   if(tea=='chai') return;
   availableTeas.push(tea); 
})
// console.log(availableTeas);

/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/
let citiesTraveled = ["Berlin","Tokyo","Sydney","Paris"];
let travelCities = [];
citiesTraveled.forEach((city)=>{
   if(city==="Sydney") {
      return;
   }
   travelCities.push(city);
})

console.log(travelCities);



/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/
let numb = [2,5,7,9];
let doubledNumbers = [];
for(let num of numb){
   if(num==7) continue;
   doubledNumbers.push(num*2);
}
// console.log(doubledNumbers);

/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let hotTea = ["chai","green tea","black tea","jasmine tea","herbal tea"];
let shorTeas = [];
for(let tea of hotTea){
   if(tea.length>=10) continue;
   else shorTeas.push(tea);
}

// console.log(shorTeas);