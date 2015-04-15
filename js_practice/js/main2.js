/*
SOURCE-BOOK: Head First JavaScript Programming, 1st Edition
AUTHORS: Eric Freeman & Elisabeth Robson
PSUEDO CODE, COMMENTS, and most of the code created by: Albert Martinez on: 10/11/14
OVERVIEW: This code comes from the practice excersizes from the book. They start you off with a function
or a variable or two and then say what the scenario is and I would have to code the rest with the
knowledge learned from the material. 
*/


/*** CHAPTER 10: First Class Functions

passengers is the data structure representing the passengers in an array
each object represents a passenger containing a name: and paid: property
name: "holds a string value as the passengers name" 
paid: true/false boolean value represents if the passenger paid for the flight
*/
// var passengers = [ {name: "Jane Doloop", paid: true, ticket: "coach"},
// 				   {name: "Dr. Evel", paid: true, ticket: "firstclass"},
// 				   {name: "Sue Property", paid: false, ticket: "firstclass"},
// 				   {name: "John Funcall", paid: true, ticket: "coach"}	];

// // this is to check if any passengers are on the no-fly-list
// var allCanFly = processPassengers(passengers, checkNoFlyList);
// if(!allCanFly) {
// 	console.log("The plane can't take off: we have a passenger on the no-fly-list.");
// }

// // this is to check if every passenger has paid
// var allPaid = processPassengers(passengers, checkNotPaid);
// if(!allPaid) {
// 	console.log("The plane can't take off: not everyone has paid.");
// }

// processPassengers(passengers, printPassenger);

// // function has 2 parameters
// // passengers: array of passengers, testFunction: test for some condition in passengers
// function processPassengers(passengers, testFunction) {
// 	for (var i = 0; i < passengers.length; i++) { // iterate through passengers 1 x 1
// 		if (testFunction(passengers[i])) { // function to test each passenger if paid & on noFly list
// 			return false; // return false: if testFunction is true: we don't want the plane to take-off
// 		}
// 	}
// 	return true; // return true if all passengers passed and the plane is ok to take off
// }

// // function to check if passenger is on the nofly list
// function checkNoFlyList(passenger) {
// 	return (passenger.name === "Dr. Evel"); // return true if passenger on noFly list = failed test
// }
// // function to check if passenger has paid for the flight
// function checkNotPaid(passenger) {
// 	return (!passenger.paid); // return true if passenger has not paid = failed test
// }
// // function to print a passengers name and if they've paid or not
// function printPassenger(passenger) {
// 	return (console.log("Passenger: " + passenger.name + " | valid ticket: " + (!checkNotPaid(passenger))));
// }
// // function to take a passengers drink order based on the type of ticket they purchased
// function createDrinkOrder(passenger) {
// 	var orderFunction; // create a variable to hold the function to return

// 	if (passenger.ticket === "firstclass") { // if passenger has a first class ticket
// 		orderFunction = function() { // create function that knows how to take 1st class drink order
// 			alert("Would you like a cocktail or wine?"); 
// 		};
// 	} else { // if passenger does not have first class ticket
// 		orderFunction = function() { // create function that knows how to take coach class orders
// 			alert("Your choice is cola or water.");
// 		};
// 	}
// 	return orderFunction; // returns the function
// }

// function serveCustomer(passenger) {
// 	var getDrinkOrderFunction = createDrinkOrder(passenger); // getDrinkOrderFunction returns a function
	
// 	getDrinkOrderFunction();  // use function whenever a drink for this passenger is needed
// 	// get dinner order
// 	getDrinkOrderFunction();
// 	getDrinkOrderFunction();
// 	// show movie
// 	getDrinkOrderFunction();
// 	//pick up trash
// }

// function servePassengers(passengers) {
// 	for (var i = 0; i < passengers. length; i++) {
// 		serveCustomer(passengers[i]);
// 	}
// }

// servePassengers(passengers);







/************  DUPLICATE CODE -- NO BUENO --  DUPLICATE CODE  *************
// only difference between checkPaid + checkNoFlu: test for paid vs being on nofly list
function checkPaid(passengers) {
	for (var i = 0; i < passengers.length; i++) {
		if (!passengers[i].paid) {
			return false;
		}
	}
	return true;
}
// only difference between checkPaid + checkNoFlu: test for paid vs being on nofly list
function checkNoFly(passengers) {
	for (var i = 0; i < passengers.length; i++) {
		if (onNoFlyList(passengers[i].name)) {
			return false;
		}
	}
	return true;
}
// no test here just prints passengers names
function printPassengers(passengers) {
	for (var i = 0; i < passengers.length; i++) {
		console.log(passengers[i].name);
		return false;
		}
	return true;
}
************* END OF >> DUPLICATE CODE -- NO BUENO --  DUPLICATE CODE  ************/

(function(){
var myCounter = 1;
	var counter = function(newct) {
		var myCounter = 50;
		myCounter += newct;
		return myCounter;
	};

	var count = counter(5);
	console.log('counter = ', count);
	
	var count = counter(2);
	console.log('counter = ', count);
})();
































