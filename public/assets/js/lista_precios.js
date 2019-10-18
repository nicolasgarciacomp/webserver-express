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

var count = 0;

window.addEventListener('load', function() {
	var box = document.querySelector(".boxPrecios");
	box.style.display = "block";

	var parrafo = document.createElement("h4");
	parrafo.append("PIZZAS(Entera):");
	box.append(parrafo);
	var parrafo = document.createElement("p");
	for(var [key, value] of variedadesPizzaEntera) {
		parrafo.append(key + " $" + value + " - ");
		box.append(parrafo);
	}

	var parrafo = document.createElement("h4");
	parrafo.append("PIZZAS(Media):");
	box.append(parrafo);
	var parrafo = document.createElement("p");
	for(var [key, value] of variedadesPizzaMedia) {
		parrafo.append(key + " $" + value + " - ");
		box.append(parrafo);
	}

	var parrafo = document.createElement("h4");
	parrafo.append("LOMOS:");
	box.append(parrafo);
	var parrafo = document.createElement("p");
	for(var [key, value] of variedadesLomo) {
		parrafo.append(key + " $" + value + " - ");
		box.append(parrafo);
	}

	var parrafo = document.createElement("h4");
	parrafo.append("HAMBURGUESAS:");
	box.append(parrafo);
	var parrafo = document.createElement("p");
	for(var [key, value] of variedadesHamburguesa) {
		parrafo.append(key + " $" + value + " - ");
		box.append(parrafo);
	}

});
