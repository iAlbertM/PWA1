/*
Created by Albert Martinez
Date: 10/26/14
Assignment: Mid Terms for PWA-1
*/


// self-executing function
$(function(){
	// declare global variables
	var i = 0;
		var sbutton = $('input');
		var sName 	 = $('#name');
		var sAddress = $('#address');
		var sgpa 	 = $('#gpa');
		var sgpaAvg  = $('gpaAvg');

	// ---------------- ARRAY OF STUDENT OBJECTS
	
	var students = [{
		// 3 main properties for ea. student name, address, and gpa
		// STUDENT 1 
		name: "Albertini Martini",
		// address has 3 sub properties: street, city, state
		address: {
			street: "7777 Hollywood Blvd Apt 209",
			city: "Los Angeles",
			state: "Ca" 
		},
		// gpa scores are stored in an array
		gpa: [3.0, 4.0, 4.0]
	},
	{	// STUDENT 2
		name: "Mattronic Tonic",
		address: {
			street: "7777 Hollywood Blvd Apt 209",
			city: "Los Angeles",
			state: "Ca"
	},
		gpa: [3.6, 4.0, 4.0]
	}];

	// // print to console the starting 2 student objects from the students array
	console.log("---------- Student objects in the student array ----------");
	console.log("1. Name: " + students[0].name + "\n2. Address: " + (students[0].address.street + " " + students[0].address.city + " " + students[0].address.state) + "\n3. gpa: " + students[0].gpa);
	console.log("1. Name: " + students[1].name + "\n2. Address: " + (students[1].address.street + " " + students[1].address.city + " " + students[1].address.state) + "\n3. gpa: " + students[1].gpa);



	// ------------------  NEW STUDENT FUNCTION

	// create a new students object with a function
	function addStudent(sname, sstreet, scity, sstate, sgpa) {
		students.splice(students.length, 0, {
			"name": sname,
			"address": {
			"street": sstreet,
			"city": scity,
			"state": sstate
		},	
			"gpa": sgpa
		})
	};
		// say hello to the new student
		// console.log("--------**** New Student has joined, Let's Welcome: " + students[students.length - 1].name + " ****--------\n");


	// ------------------  ADD NEW STUDENT TO THE STUDENTS ARRAY
	// add a new student object to the student array
	addStudent("Lilly Sosilly", "1841 N Fuller Ave", "Los Angeles", "Ca", [4.0, 4.0, 4.0]);

	// console.log("---------- Student objects in the student array ----------");
	// console.log("1. Name: " + students[0].name + "\n2. Address: " + (students[0].address.street + " " + students[0].address.city + " " + students[0].address.state) + "\n3. gpa: " + students[0].gpa);
	// console.log("1. Name: " + students[1].name + "\n2. Address: " + (students[1].address.street + " " + students[1].address.city + " " + students[1].address.state) + "\n3. gpa: " + students[1].gpa);
	// console.log("1. Name: " + students[2].name + "\n2. Address: " + (students[2].address.street + " " + students[2].address.city + " " + students[2].address.state) + "\n3. gpa: " + students[2].gpa);
	
	
	
	function showResults() {	
		var studentData;
		// local variables that access the DOM
		if (i < students.length) {
			i++;
			studentData = students[i];
			sName.innerHTML = studentData.name;
			sAddress.innerHTML = ("<p>" + studentData.address.street + "<br>" + studentData.address.city +  "<br> " + studentData.address.state + "</p>");
			sgpa.innerHTML = studentData.gpa;
			sgpaAvg.innerHTML = (studentData.gpa[0] + studentData.gpa[1] + studentData.gpa[2]) / studentData.gpa.length;
		};
	}
	console.log(sbutton);
	console.log(showResults());
		/* Act on the event */
})();
