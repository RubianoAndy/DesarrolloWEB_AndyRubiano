'use strict'

var numero = parseInt(prompt("Escriba un número", 0));

while(isNaN(numero)){
	numero = parseInt(prompt("Escriba un número", 0));
}

document.write("<h2>Comprobando si " + numero + " es par o impar </h2>");

if(numero % 2 == 0) {
	document.write("El número " + numero + " es par <hr>");
}
else {
	document.write("El número " + numero + " es impar <hr>");
}