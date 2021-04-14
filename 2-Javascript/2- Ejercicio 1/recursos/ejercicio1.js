'use strict'

var num1 = parseFloat(prompt("Escriba el primer número", 0));
var num2 = parseFloat(prompt("Escriba el segundo número", 0));

while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
	num1 = parseFloat(prompt("Escriba el primer número", 0));
	num2 = parseFloat(prompt("Escriba el segundo número", 0));
}

if(num1 > num2) {
	alert("El número " + num1 + " es el mayor");
}
else if(num1 < num2) {
	alert("El número " + num2 + " es el mayor");
}
else if (num1 == num2) {
	alert("Ambos números son iguales")
}