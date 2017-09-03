var personas=[
{
	"Nombre":"Juan",
	"Apellido":"Perez",
	"Edad":30,
	"Télefono":987654321,
	"Correo":"j.perez@ufro.cl"
},

{
	"Nombre":"Juan",
	"Apellido":"Nieves",
	"Edad":25,
	"Télefono":912345678,
	"Correo":"j.nieves@ufro.cl"
}
];

var tabla=document.getElementById("contenido");


//onload
window.addEventListener("load", myInit, true); function myInit(){ 

	//SE LLENA LA TABLA
	var text = "";
	var persona;

	for(var i=0;i<personas.length;i++){
		text+="<tr>"

		var persona=personas[i];

		for (elemento in persona) {
			text += "<td>"+persona[elemento]+ "</td>";
		}

		text+="</tr>";

	}

	tabla.innerHTML=text;

	//**ONLOAD ELEVATOR (ACTIVIDAD 2 JQUERY)

	var elementButton = document.querySelector('.elevator');
	var elevator = new Elevator({
		element: elementButton

	});

	

}

/*
window.onload=function(){
	var text = "";
	var persona;

	for(var i=0;i<personas.length;i++){
	text+="<tr>"

	var persona=personas[i];

	for (elemento in persona) {
		text += "<td>"+persona[elemento]+ "</td>";
	}

	text+="</tr>";

}

	tabla.innerHTML=text;

	
};
*/


/*
btnTabla.addEventListener("click",function(){
	var text = "";
	var persona;

	for(var i=0;i<personas.length;i++){
	text+="<tr>"

	var persona=personas[i];

	for (elemento in persona) {
		text += "<td>"+persona[elemento]+ "</td>";
	}

	text+="</tr>";

}

	tabla.innerHTML=text;

	
});

/*
window.onload=function(){

	var text = "";
	var persona;

	for(var i=0;i>personas.length;i++){

	for (persona in personas[i]) {
		text += "<td>"+persona+ "</td>";
	}

	tabla.innerHtml="<tr>"+text+"</tr>";
}

		
	
};
*/



