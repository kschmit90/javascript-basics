// Write a program which prompts the user for an integer and outputs whether that integer is even or odd. (Hint: even numbers have a remainder of 0 when divided by 2; odd numbers have a remainder of 1 when divided by 2.)

var num = prompt("Please enter an integer");

if( num % 2 === 0 ){
	console.log("even");
}
else{
	console.log("odd");
}