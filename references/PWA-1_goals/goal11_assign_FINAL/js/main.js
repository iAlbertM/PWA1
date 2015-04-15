/*
Created by Albert Martinez
Date: 10/26/14
Assignment: Mid Terms for PWA-1
*/

// self-executing function
(function(){
	// declare global variables
	var i = 0;
	var button = document.querySelector('a.buttonred');
	var form = document.getElementById('output');
	var studentName 	= document.querySelector('name p');
	var studentAddress  = document.getElementById('address p');
	var studentGPA 		= document.getElementById('gpa p');

	// ---------------- ARRAY OF STUDENT OBJECTS
	
	var students = [{
		// STUDENT 1 ///////////////////
		// 3 main properties name, address, and gpa
		name: "Albertini Martini" ,
		address: {
			// with 3 sub properties of address: street, city, state
			street: "1841 N Fuller Ave" ,
			city: "Los Angeles",
			state: "Ca"},
		// array of GPA scores for the student in this object	
		GPA: [3.0, 4.0, 4.0]},

		{
		// STUDENT 2 ///////////////////
		// 3 main properties name, address, and gpa
		name: "Mattronic Tonic" ,
		address: {
			// with 3 sub properties
			street: "1841 N Fuller Ave" ,
			city: "Los Angeles",
			state: "Ca"},
		// array of GPA scores for the student in this object	
		GPA: [3.6, 4.0, 4.0]
	}];
	// // print to console the starting 2 student objects from the students array
	// console.log("---------- Student objects in the student array ----------");
	// console.log('1. Name: ' + students[0].name + '\n2. Address: ' + (students[0].address.street + " " + students[0].address.city + " " + students[0].address.state) + '\n3. GPA: ' + students[0].GPA);
	// console.log('1. Name: ' + students[1].name + '\n2. Address: ' + (students[1].address.street + " " + students[1].address.city + " " + students[1].address.state) + '\n3. GPA: ' + students[1].GPA);



	// ------------------  NEW STUDENT FUNCTION

	// create a new students object with a function
	function addStudent(sname, sstreet, scity, sstate, sgpa) {
		students.splice(students.length, 0, {"name": sname, "address": {
			"street": sstreet,
			"city": scity,
			"state": sstate},	
			"GPA": sgpa
		});
		// say hello to the new student
		console.log("--------**** New Student has joined, Let's Welcome: " + students[students.length - 1].name + " ****--------\n");
	};


	// ------------------  ADD NEW STUDENT TO THE STUDENTS ARRAY
	// add a new student object to the student array
	addStudent("Lilly Sosilly", "1841 N Fuller Ave", "Los Angeles", "Ca", [4.0, 4.0, 4.0]);

	console.log("---------- Student objects in the student array ----------");
	console.log('1. Name: ' + students[0].name + '\n2. Address: ' + (students[0].address.street + " " + students[0].address.city + " " + students[0].address.state) + '\n3. GPA: ' + students[0].GPA);
	console.log('1. Name: ' + students[1].name + '\n2. Address: ' + (students[1].address.street + " " + students[1].address.city + " " + students[1].address.state) + '\n3. GPA: ' + students[1].GPA);
	console.log('1. Name: ' + students[2].name + '\n2. Address: ' + (students[2].address.street + " " + students[2].address.city + " " + students[2].address.state) + '\n3. GPA: ' + students[2].GPA);
	
	
	
	function showResults(){	
		// local variables that access the DOM
		var studentData;


		if(i < students.length) {
			studentData = students[i];
			studentName.innerHTML 	 = studentData.name;
			studentAddress.innerHTML = studentData.address[0] + " " + studentData.address[1] +  " " + studentData.address[2];
			studentGPA.innerHTML 	 = studentData.GPA;
			studentGPAavg.innerHTML  = ((students[i].GPA[0] + students["i"].GPA[1] + students["i"].GPA[2]) / students["i"].GPA.length);
		}

	};
button.onclick = function(){showResults()};
})();