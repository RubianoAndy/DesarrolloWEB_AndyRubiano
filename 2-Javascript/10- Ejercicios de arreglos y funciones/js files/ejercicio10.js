'use strict'

var datos = new Array(6);
let tamano = 0;

solicitudDatos();

mostrarPagina(datos, "ingresado");
mostrarConsola(datos, "ingresado");

mostrarPagina(datos.sort((a, b) => {return a - b}), "ordenado"); // Ordena los datos y los guarda en la misma variable
mostrarConsola(datos, "ordenado");

mostrarPagina(datos.reverse(), "invertido"); // Invierte los datos y los guarda en la misma variable
mostrarConsola(datos, "invertido");

tamano = tamanoArreglo(datos);

document.write("El arreglo tiene " + tamano + " elementos");
console.log("El arreglo tiene", tamano, "elementos");

busqueda(datos);

// Solicitud de datos

function solicitudDatos() {
	for(var i = 0; i < 6; i++){
		datos[i] = parseInt(prompt("Escriba el número de la posición " + i, 0));

		while(isNaN(datos[i])){
			datos[i] = parseInt(prompt("Escriba el número de la posición " + i, 0));
		}
	}
}

// Mostrar datos en página
function mostrarPagina(array, texto = ""){
	document.write("<h2>Arreglo " + texto + ":</h2>");
	document.write("<ul>");
	array.forEach((numero) => {
		document.write("<li>" + numero + "</li>");
	});
	document.write("</ul>");
}

//Mostrar datos en consola
function mostrarConsola(array, texto = ""){
	console.log("Arreglo",texto);
	console.log(array + "\n");
}

function tamanoArreglo(array){
	return array.length;
}

function busqueda(array){
	var datoBuscado = parseInt(prompt("Digite el número a buscar"));
	var indice = array.indexOf(datoBuscado);

	if(indice == -1){
		confirm("Dato no encontrado");
		console.log("Dato no encontrado");
	}
	else {
		confirm("El índice del dato ingresado es: " + indice);
		console.log("El índice del dato ingresado es:", indice);
	}
}