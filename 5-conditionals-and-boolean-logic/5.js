// Create a menu (perhaps for food or drinks?) which asks the user to input a number corresponding to their choice of item, and which then prints "Delivering [that item]." Use a case statement. Make sure to account for invalid inputs using an else. (Read up on case statements in JavaScript.)

// prompt returns a string

alert("1. Pizza, 2. Pasta or 3. Salad?");
var choice = prompt("Enter a choice.");

switch( choice ){
case "1":
	alert("Pizza!");
	break;
case "2":
	alert("Pasta!");
	break;
case "3":
	alert("Salad!?");
	break;
default:
	alert("Invalid Choice.");
}