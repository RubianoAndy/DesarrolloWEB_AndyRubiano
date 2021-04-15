'use strict'

var numero = parseInt(prompt("Escriba un número por favor" ,0));

document.write("<h2>Tabla de miltiplicar del " + numero + "</h2>");

while(isNaN(numero)) {
	numero = parseInt(prompt("Escriba un número por favor", 0));
}

for(var i = 1; i <= 10; i++){
	document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
}

for(var j = 1; j <= 9; j++){
	document.write("<h2>Tabla del " + j + "</h2>");
	for (var k = 1; k <= 10; k++){
		document.write(j + " x " + k + " = " + (j * k) + "<br>");
	}
}