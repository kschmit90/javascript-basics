// Write a program which prompts the user for a number and outputs "Valid" if the number is between 1 and 10 (inclusive) and "Invalid" otherwise.

var num = prompt("Please enter a number");

if( num > 0 && num <= 10 ){
	console.log("valid");
}
else{
	console.log("invalid");
}