var f = new Date();
fecha_hoy = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();

function exportTableToExcel(tableID, filename = '') {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    //Specify file name
    filename = filename?filename+'.xls':'ventas'+fecha_hoy+'.xls';
    
    //Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    } else {
        //Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        //Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}

window.addEventListener('load', function() {
	var finalizar = document.getElementById("finalizar");
	var tr = "myTrF"; //Para recorrer tabla
	var tr_c = 0;

	for(var i = 0; i < localStorage.length; i++) {
		var array = [];
		var tableReg = localStorage.getItem(localStorage.key(i));
		const splitString = tableReg.split("<td>");
		console.log(splitString);
		for(var j = 1; j < splitString.length; j++) {
			//console.log(splitString);
			var p = splitString[j].indexOf("</td>");
			console.log(p);
			var q = splitString[j].slice(0, p);
			console.log(q);
			array.push(q);
		}

	    //Agrego elementos a tabla final
	    for(k = 0; k < array.length; ) {
			var y = document.createElement("TR");
	        y.setAttribute("id", tr + tr_c);
	        document.getElementById("tablaFinal").appendChild(y);

	        var z = document.createElement("TD");
	        var t = document.createTextNode(i);
	        z.appendChild(t);
	        document.getElementById(tr + tr_c).appendChild(z);

	        var z = document.createElement("TD");
	        var t = document.createTextNode(array[k]);
	        z.appendChild(t);
	        document.getElementById(tr + tr_c).appendChild(z);

	        var z = document.createElement("TD");
	        var t = document.createTextNode(array[k+1]);
	        z.appendChild(t);
	        document.getElementById(tr + tr_c).appendChild(z);

	        var z = document.createElement("TD");
	        var t = document.createTextNode(array[k+2]);
	        z.appendChild(t);
	        document.getElementById(tr + tr_c).appendChild(z);

	        k = k + 3;

	        tr_c = tr_c + 1;
	    }
	}

	finalizar.addEventListener('click', function() {
		var tr = "myTrF"; //Para recorrer tabla
		var tr_c = 0;

		for(var i = 0; i < localStorage.length; i++) {
			var array = [];
			var tableReg = localStorage.getItem(localStorage.key(i));
			const splitString = tableReg.split("<td>");
			console.log(splitString);
			for(var j = 1; j < splitString.length; j++) {
				//console.log(splitString);
				var p = splitString[j].indexOf("</td>");
				console.log(p);
				var q = splitString[j].slice(0, p);
				console.log(q);
				array.push(q);
			}

		    //Agrego elementos a tabla final
		    for(k = 0; k < array.length; ) {
				var y = document.createElement("TR");
		        y.setAttribute("id", tr + tr_c);
		        document.getElementById("tablaFinal").appendChild(y);

		        var z = document.createElement("TD");
		        var t = document.createTextNode(i);
		        z.appendChild(t);
		        document.getElementById(tr + tr_c).appendChild(z);

		        var z = document.createElement("TD");
		        var t = document.createTextNode(array[k]);
		        z.appendChild(t);
		        document.getElementById(tr + tr_c).appendChild(z);

		        var z = document.createElement("TD");
		        var t = document.createTextNode(array[k+1]);
		        z.appendChild(t);
		        document.getElementById(tr + tr_c).appendChild(z);

		        var z = document.createElement("TD");
		        var t = document.createTextNode(array[k+2]);
		        z.appendChild(t);
		        document.getElementById(tr + tr_c).appendChild(z);

		        k = k + 3;

		        tr_c = tr_c + 1;
		    }
	  	}
		localStorage.clear();
		var contenido = document.getElementById("tablaFinal").innerHTML;
		exportTableToExcel("tablaFinal", filename = '');
	})

});
