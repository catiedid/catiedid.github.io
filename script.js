window.onload=function(e){
alert("Thanks for visiting my site!");
var kittens = 5;
function turtleFact () {
	alert("Some turtles can live longer than humans");
}

turtleFact();

function temptGang(gangName) {
	alert(gangName + "Come out and play")
}

function addNumbers(num1, num2) {
	alert(num1+num2)
}

// addNumbers(10, 5);

function square(number) {
	return number * number;
}

function displaySquare(squaredNumber) {
	console.log("Your number is " + squaredNumber);
}

displaySquare(square(3));


