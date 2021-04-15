'use strict'

var numero = parseInt(prompt("Escriba un número",1));

while(numero == 0 || isNaN(numero)) {
	numero = parseInt(prompt("Escriba un número", 1));
}

document.write("<h2>El número " + numero + " se puede dividir entre los siguientes números </h2>");

for(var i = 1; i <= numero; i++){
	if(numero % i == 0){
		document.write(i + "<br>");
	}
}