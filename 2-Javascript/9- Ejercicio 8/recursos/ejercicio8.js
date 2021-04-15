'use strict'

var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número" , 0));

while(isNaN(numero1)) {
	numero1 = parseInt(prompt("Introduce el primer número", 0));
}

while(isNaN(numero2)) {
	numero2 = parseInt(prompt("Introduce el segundo número", 0));
}

document.write("<h2>Calculadora de números ingresados</h2>");

var resultadoHTML = numero1 + " + " + numero2 + " = " + (numero1 + numero2) + "<br>" +
					numero1 + " - " + numero2 + " = " + (numero1 - numero2) + "<br>" +
					numero1 + " * " + numero2 + " = " + (numero1 * numero2) + "<br>" +
					numero1 + " / " + numero2 + " = " + (numero1 / numero2) + "<br>"


var resultadoJS = "Calculadora de números ingresados\n" +
				  numero1 + " + " + numero2 + " = " + (numero1 + numero2) + "\n" +
				  numero1 + " - " + numero2 + " = " + (numero1 - numero2) + "\n" +
				  numero1 + " * " + numero2 + " = " + (numero1 * numero2) + "\n" +
				  numero1 + " / " + numero2 + " = " + (numero1 / numero2) + "\n"

document.write(resultadoHTML);
console.log(resultadoJS);
alert(resultadoJS);