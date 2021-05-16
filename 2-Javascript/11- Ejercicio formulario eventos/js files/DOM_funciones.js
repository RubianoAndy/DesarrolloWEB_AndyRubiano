'use strict'

window.addEventListener("load", () => {
	var formulario = document.querySelector("#formulario");
	var box_dashed = document.querySelector(".dashed");		// Selecciona el primer elemento dashed

	box_dashed.style.display = "none";

	formulario.addEventListener("submit",() => {
		var nombre = document.querySelector("#nombres").value;
		var apellido = document.querySelector("#apellidos").value;
		var edad = parseInt(document.querySelector("#edad").value);

		if(nombre.trim() == null || nombre.trim().length == 0){
			document.querySelector("#error_nombre").innerHTML = "Nombres no válidos <br>";
			return false;
		}
		else {
			document.querySelector("#error_nombre").style.display = "none";
		}

		if(apellido.trim() == null || apellido.trim().length == 0){
			document.querySelector("#error_apellido").innerHTML = "Apellidos no válidos <br>";
			return false;
		}
		else {
			document.querySelector("#error_apellido").style.display = "none";
		}

		if(edad == null || edad <= 0 || isNaN(edad)){
			document.querySelector("#error_edad").innerHTML= "Edad no válida <br>";
			return false;
		}
		else {
			document.querySelector("#error_edad").style.display = "none";
		}

		box_dashed.style.display = "block";

		/*
		var datos_usuario = [nombre, apellido, edad];
		
		for (var indice in datos_usuario){
			var parrafo = document.createElement("p");		// Crea una etiqueta HTML <p></p>
			parrafo.append(datos_usuario[indice]);			// Dentro del párrafo coloca el dato de usuario
			box_dashed.append(parrafo);						// Ubica el párrafo en el cuadro de líneas punteadas
		}*/

		var p_nombre = document.querySelector("#p_nombre span");
		var p_apellido = document.querySelector("#p_apellido span");
		var p_edad = document.querySelector("#p_edad span");

		p_nombre.innerHTML = nombre;
		p_apellido.innerHTML = apellido;
		p_edad.innerHTML = edad;
	});
});