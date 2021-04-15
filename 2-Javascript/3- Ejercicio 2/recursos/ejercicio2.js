'use strict'

var suma = 0;
var contador = 0;

var num  = 0;

do {
	num = parseInt(prompt('Escribe un número', 0));
	if (isNaN(num)) {
		num = 0;
	}
	else if (num >= 0){
		contador++;
		suma += num;
	}
}while(num >= 0)

console.log("La suma de los números es: " + suma);
console.log("La media de los números es: " + suma / contador);