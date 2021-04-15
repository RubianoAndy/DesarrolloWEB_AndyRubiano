'use strict'

var num1 = parseInt(prompt("Introduzca el primer número", 0));
var num2 = parseInt(prompt("Introduzca el segundo número", 0));

document.write("<h2>Los números impares que están entre " + num1 + " y " + num2 + " son:</h2>");

for(var i = num1; i <= num2; i++) {
	if(i % 2 != 0) {
		document.write(i + "<br>");
	}
}