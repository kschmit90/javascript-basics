// Prompt the user for a positive odd number. Write a program that uses a nested if-statement to determine if the user's input fulfills the conditions. Now write one that uses the logical operators (&& and/or ||) to do the same test, but in less time.

var num = prompt("Enter a positive odd number.")

if ( num >= 0 && num % 2 != 0 ){
	console.log("Valid!")
}
else{
	console.log("Invalid!")
}