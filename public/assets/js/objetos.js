var variedadesPizzaEntera = new Map();

variedadesPizzaEntera.set("P1 MUZZARELLA", 170);
variedadesPizzaEntera.set("P2 DOBLE MUZZARELLA", 180);
variedadesPizzaEntera.set("P3 ESPECIAL", 190);
variedadesPizzaEntera.set("P4 FUGAZZETA", 190);
variedadesPizzaEntera.set("P5 PALMITOS", 200);
variedadesPizzaEntera.set("P6 LANGOSTINOS", 270);
variedadesPizzaEntera.set("P7 ROQUEFORT", 195);
variedadesPizzaEntera.set("P8 NAPOLITANA", 190);
variedadesPizzaEntera.set("P9 SALCHICHAS PARRILLERA", 200);
variedadesPizzaEntera.set("P10 CALABRESA", 200);
variedadesPizzaEntera.set("P11 RUCULA Y CHERRY CONFITADOS", 210);
variedadesPizzaEntera.set("P12 PALTA Y CHERRY", 210);
variedadesPizzaEntera.set("P13 CHAMPIÑONES Y PANCETA", 230);
variedadesPizzaEntera.set("P14 ANCHOAS", 240);
variedadesPizzaEntera.set("P15 SALCHICAS VIENA", 190);
variedadesPizzaEntera.set("P16 CAPRESE", 200);
variedadesPizzaEntera.set("P17 ANANA", 210);
variedadesPizzaEntera.set("P18 RUCULA Y JAMON CRUDO", 230);
variedadesPizzaEntera.set("P19 TERNERA", 220);
variedadesPizzaEntera.set("P20 CUATRO QUESOS", 220);
variedadesPizzaEntera.set("P21 ARGENTINA", 210);
variedadesPizzaEntera.set("P22 POLLO Y BARBACOA", 210);
variedadesPizzaEntera.set("P23 CHOCLO", 210);
variedadesPizzaEntera.set("P24 MEXICANA", 230);
variedadesPizzaEntera.set("P25 AMERICANA", 240);

var variedadesPizzaMedia = new Map();

variedadesPizzaMedia.set("P1 MUZZARELLA", 90);
variedadesPizzaMedia.set("P2 DOBLE MUZZARELLA", 95);
variedadesPizzaMedia.set("P3 ESPECIAL", 100);
variedadesPizzaMedia.set("P4 FUGAZZETA", 100);
variedadesPizzaMedia.set("P5 PALMITOS", 105);
variedadesPizzaMedia.set("P6 LANGOSTINOS", 140);
variedadesPizzaMedia.set("P7 ROQUEFORT", 100);
variedadesPizzaMedia.set("P8 NAPOLITANA", 100);
variedadesPizzaMedia.set("P9 SALCHICHAS PARRILLERA", 105);
variedadesPizzaMedia.set("P10 CALABRESA", 105);
variedadesPizzaMedia.set("P11 RUCULA Y CHERRY CONFITADOS", 110);
variedadesPizzaMedia.set("P12 PALTA Y CHERRY", 110);
variedadesPizzaMedia.set("P13 CHAMPIÑONES Y PANCETA", 120);
variedadesPizzaMedia.set("P14 ANCHOAS", 125);
variedadesPizzaMedia.set("P15 SALCHICAS VIENA", 100);
variedadesPizzaMedia.set("P16 CAPRESE", 105);
variedadesPizzaMedia.set("P17 ANANA", 110);
variedadesPizzaMedia.set("P18 RUCULA Y JAMON CRUDO", 120);
variedadesPizzaMedia.set("P19 TERNERA", 115);
variedadesPizzaMedia.set("P20 CUATRO QUESOS", 115);
variedadesPizzaMedia.set("P21 ARGENTINA", 110);
variedadesPizzaMedia.set("P22 POLLO Y BARBACOA", 110);
variedadesPizzaMedia.set("P23 CHOCLO", 110);
variedadesPizzaMedia.set("P24 MEXICANA", 120);
variedadesPizzaMedia.set("P25 AMERICANA", 125);

var variedadesLomo = new Map();

variedadesLomo.set("L1 COMUN", 140);
variedadesLomo.set("L2 ESPECIAL", 170);
variedadesLomo.set("L3 BUONA", 190);
variedadesLomo.set("L4 CAPRESE", 140);

var variedadesHamburguesa = new Map();

variedadesHamburguesa.set("H1 COMUN", 120);
variedadesHamburguesa.set("H2 ESPECIAL", 140);
variedadesHamburguesa.set("H3 BUONA", 170);
variedadesHamburguesa.set("H4 CAPRESE", 140);
variedadesHamburguesa.set("H5 MEXICANA", 170);

var total_final = 0;
var bdr_total = 0;
var bdr_para = 0;
var precio_aux = 0;
var tr = "myTr"; //Para recorrer tabla
var tr_c = 0;
var n_tabla = 0; //ID localStorage

window.addEventListener('load', function() {
	var añadir = document.getElementById("añadir");
	var deshacer = document.getElementById("deshacer");
	var imprimir = document.getElementById("imprimir");
	var confirmar = document.getElementById("confirmar");
	var total = document.getElementById("total");
	var tf = document.getElementById("tablaFinal");
	var t = document.getElementById("tabla");
	var box = document.querySelector(".box");
	box.style.display = "none";
	tf.style.display = "none";
	t.style.display = "none";
	var selec_producto = document.getElementById("producto");

	añadir.addEventListener('click', function() {
		var cantidad = document.querySelector("#cantidad").value;
		var para = document.querySelector("#para").value;
		var variedad = document.querySelector("#variedad").value;
		var tipo_pizza = document.querySelector("#tipo_pizza").value;
		var producto_seleccionado = document.querySelector("#producto").value;
		var precio;

		if(bdr_para == 0) {
			var parrafo = document.createElement("p");
			parrafo.append("Para: " + para);
			box.append(parrafo);
			bdr_para = 1;
		}

		for(var [key, value] of variedadesPizzaEntera) {
			if(variedad == key && tipo_pizza == "ENTERA") {
				precio = value * cantidad;
				total_final = total_final + precio;
				precio_aux = precio;
			}
		}

		for(var [key, value] of variedadesPizzaMedia) {
			if(variedad == key && tipo_pizza == "MEDIA") {
				precio = value * cantidad;
				total_final = total_final + precio;
				precio_aux = precio;
			}
		}

		for(var [key, value] of variedadesLomo) {
			if(variedad == key) {
				precio = value * cantidad;
				total_final = total_final + precio;
				precio_aux = precio;
			}
		}

		for(var [key, value] of variedadesHamburguesa) {
			if(variedad == key) {
				precio = value * cantidad;
				total_final = total_final + precio;
				precio_aux = precio;
			}
		}

		box.style.display = "block";

		if(producto_seleccionado == "PIZZAS") {
			var datos_pedido = [cantidad +" - "+ variedad +"   "+ tipo_pizza + "   $" + precio];

			//Agrego elementos a tabla 
			var y = document.createElement("TR");
            y.setAttribute("id", tr + tr_c);
            document.getElementById("tabla").appendChild(y);

            var z = document.createElement("TD");
            var t = document.createTextNode(cantidad);
            z.appendChild(t);
            document.getElementById(tr + tr_c).appendChild(z);

            var z = document.createElement("TD");
            var t = document.createTextNode(variedad + ' ' + tipo_pizza);
            z.appendChild(t);
            document.getElementById(tr + tr_c).appendChild(z);

            var z = document.createElement("TD");
            var t = document.createTextNode(precio);
            z.appendChild(t);
            document.getElementById(tr + tr_c).appendChild(z);
            tr_c = tr_c + 1;
		} else {
			var datos_pedido = [cantidad +" - "+ variedad +"   $" + precio];

			// Agrego elementos a tabla
			var y = document.createElement("TR");
            y.setAttribute("id", tr + tr_c);
            document.getElementById("tabla").appendChild(y);

            var z = document.createElement("TD");
            var t = document.createTextNode(cantidad);
            z.appendChild(t);
            document.getElementById(tr + tr_c).appendChild(z);

            var z = document.createElement("TD");
            var t = document.createTextNode(variedad);
            z.appendChild(t);
            document.getElementById(tr + tr_c).appendChild(z);

            var z = document.createElement("TD");
            var t = document.createTextNode(precio);
            z.appendChild(t);
            document.getElementById(tr + tr_c).appendChild(z);
            tr_c = tr_c + 1;
		}

		var indice;
		for(indice in datos_pedido) {
			var parrafo = document.createElement("p");
			parrafo.append(datos_pedido[indice]);
			box.append(parrafo);
		}
	})

	deshacer.addEventListener('click', function() {
		var par = document.querySelectorAll("#box p");
		box.removeChild(par[par.length-1]);
		total_final = total_final - precio_aux;
		var x = document.getElementById("tabla");
    	x.deleteRow(-1);
	})

	selec_producto.addEventListener('click', function() {
		if(document.querySelector("#producto").value == "PIZZAS" && document.querySelector("#tipo_pizza").value == "ENTERA") {
			var x1 = document.getElementById("variedad");
    		document.getElementById("variedad").options.length = 0;

			for(var [key, value] of variedadesPizzaEntera) {
				var option = document.createElement("option");
			    option.text = key;
			    x1.add(option);
			}
		}

		if(document.querySelector("#producto").value == "PIZZAS" && document.querySelector("#tipo_pizza").value == "MEDIA") {
			var x1 = document.getElementById("variedad");
    		document.getElementById("variedad").options.length = 0;

			for(var [key, value] of variedadesPizzaMedia) {
				var option = document.createElement("option");
			    option.text = key;
			    x1.add(option);
			}
		}

		if(document.querySelector("#producto").value == "LOMOS") {
			var x1 = document.getElementById("variedad");
    		document.getElementById("variedad").options.length = 0;

			for(var [key, value] of variedadesLomo) {
				var option = document.createElement("option");
			    option.text = key;
			    x1.add(option);
			}
		}

		if(document.querySelector("#producto").value == "HAMBURGUESAS") {
			var x1 = document.getElementById("variedad");
    		document.getElementById("variedad").options.length = 0;

			for(var [key, value] of variedadesHamburguesa) {
				var option = document.createElement("option");
			    option.text = key;
			    x1.add(option);
			}
		}
	})

	total.addEventListener('click', function() {
		if(bdr_total == 0) {
			var comentarios = document.querySelector("#comentarios").value;
			var costo_envio = document.querySelector("#costo_envio").value;
			var parrafo = document.createElement("p");
			parrafo.append("Costo de envio: $" + costo_envio);
			box.append(parrafo);
			total_final = total_final + parseInt(costo_envio);
			var parrafo = document.createElement("p");
			parrafo.append("Total: $" + total_final);
			box.append(parrafo);
			var parrafo = document.createElement("p");
			parrafo.append("Comentarios: ");
			box.append(parrafo);
			parrafo.append(comentarios);
			box.append(parrafo);
			bdr_total = 1;
		}
	})

	imprimir.addEventListener('click', function() {
		var contenido = document.getElementById("box").innerHTML;
        var contenidoOriginal = document.body.innerHTML;
        document.body.innerHTML = contenido;
		window.print();
		document.body.innerHTML = contenidoOriginal;
	})

	confirmar.addEventListener('click', function() {
		// Para guardar en localStorage
		var x = document.getElementById("tabla").innerHTML;
		var n_local = localStorage.length;
		localStorage.setItem(n_tabla + n_local, x);
		n_tabla = n_tabla + 1;
	})

});
