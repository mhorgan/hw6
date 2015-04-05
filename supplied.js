/* File: assign6.js
Author 1: Eni Mustafaraj
Author 2: Scott D. Anderson

First created: March 20, 2014
Modified: March 17, 2015

Explanation: This file contains some given code that 
supplied the necessary infrastructure 
to complete the HW6, "What's Cooking?" 

Student code is in a separate file.
*/

// Bind the event-handler function to the event onload, so that the Javascript
// code is executed only after the DOM is generated.

window.onload = onDocumentReady;

// Event handler function that is invoked automatically when the DOM is created.
// DO NOT CHANGE THIS FUNCTION.
function onDocumentReady() {
	
	// 1. Get current date and use two of its methods to get string values 
	// for the date and time part separately.
	
	var dateTime = new Date();
	var dateStr = dateTime.toLocaleDateString();
	var timeStr = dateTime.toLocaleTimeString();
	console.log("date is: " + dateStr + " time is: " + timeStr);
	
	// 2. Invoke the function findMeal() to find out the meal name.	
	var mealName = findMeal(dateStr, timeStr);
	
	// 3. invoke functions to update the page
	updateStatus(mealName);
	updateDateTime(dateStr, timeStr);
	updateMealPicture(mealName);

	// 4. Bind the onclick event for "Test" button to its event handler function.
	var button = document.querySelector("#run_test");
	button.onclick = executeTest;	// notice, we're not using () for the function.
}

/*---------------------------------------------------------------------------*/	
// DO NOT CHANGE THIS FUNCTION. It displays the test cases on the page
// and also changes the image of the page appropriately (once you have
// implemented the functions findMeal() and displayMessage().

	
function executeTest() {
	
	// 1. Read the date and time value from the input fields. They are strings.
	var dateStr = document.querySelector("[type='date']").value;
	var timeStr = document.querySelector("[type='time']").value;
	
	// 2. If the user specified a value for both date and time fields, invoke
	// the two functions findMeal() and displayMessage() to perform their tasks.
	if (dateStr != "" && timeStr !== "") {
		console.log("Testing - date is: " + dateStr + " time is: " + timeStr);
		var mealName = findMeal(dateStr, timeStr);
		var li = document.createElement("li")
		li.innerHTML = dateStr + " " + timeStr + " is " + mealName;
		var testList = document.querySelector("ol#tests");
		testList.appendChild(li);
		// invoke student-defined functions.
		updateStatus(mealName);
		updateDateTime(dateStr, timeStr);
		updateMealPicture(mealName);
	}
	
	// 4. If no valid values for date and time, alert the user.
	else {
		alert("Please enter a value for both date and time fields");
	}
	
}

// ================================================================

// These are the meal times during the week days. We have created an array
// that contains three objects, one for which meal with their corresponding 
// start and end times.
// DO NOT CHANGE THIS CODE.

var mealTimes = [
		 {name: "Breakfast", start: " 8:00 AM", end: " 11:29:59 AM"},
		 {name: "Lunch", start: " 11:30 AM", end: " 3:59:59 PM"},
		 {name: "Dinner", start: " 4:00 PM", end: " 11:59:59 PM"},
		 {name: "Closed", start: " 12:00 AM", end: " 7:59:59 AM"}  
		 ];

// Global variable which will be used in both functions that you will write.
var currentDateTimeObj;

