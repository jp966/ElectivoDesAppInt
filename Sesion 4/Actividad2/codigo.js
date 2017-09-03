
// Obtenemos el button y lo almacenamos en una variable llamada "btn"
var btnSuma = document.getElementById("btnSuma");
var btnResta = document.getElementById("btnResta");
var btnMulti = document.getElementById("btnMulti");
var btnDivision = document.getElementById("btnDivision");

/* Obtenemos el div que muestra el resultado y lo
almacenamos en una variable llamada "resultado" */
var resultado = document.getElementById("resultado")
var alerta1 = document.getElementById("alerta-1");
var alerta2 = document.getElementById("alerta-2");

/* Obtenemos los dos input y los almacenamos en
variables "inputUno" y "inputDos" */
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");

//booleanos de validación
var esNumero1=true;
var esNumero2=true;
var esCampoVacio=false;

//VALIDACIÓN DE INPUTS
function validarEntrada1(numero){
	//Expresión que considera numeros de 0 a 9 y sus combinaciones
	if (!/^([0-9])*$/.test(numero)){
    	//alert("El valor " + numero + " no es un número");
    	alerta1.innerHTML="*El valor " + numero + " no es un número";
    	esNumero1=false;
    }else{
    	esNumero1=true;
    }
}


function validarEntrada2(numero){
	//Expresión que considera numeros de 0 a 9 y sus combinaciones

	if (!/^([0-9])*$/.test(numero)){
	    	//alert("El valor " + numero + " no es un número");
	    	alerta2.innerHTML="*El valor " + numero + " no es un número";
	    	esNumero2=false;
	    }else{
	    	esNumero2=true;
	    }

	}


//SUMA
btnSuma.addEventListener("click",function(){
	if(esNumero1 && esNumero2){
		alerta1.innerHTML="";
		alerta2.innerHTML="";
		var n1 = inputUno.value;
		var n2 = inputDos.value;

		if(n1=="" || n2==""){
			alerta1.innerHTML="*Campo vacío";
		}else{
			resultado.innerHTML = suma(n1,n2);

		}

		
	}
});

//RESTA
btnResta.addEventListener("click",function(){
	
	if(esNumero1 && esNumero2){
		alerta1.innerHTML="";
		alerta2.innerHTML="";
		var n1 = inputUno.value;
		var n2 = inputDos.value;

		if(n1=="" || n2==""){
			alerta1.innerHTML="*Campo vacío";
		}else{
			resultado.innerHTML = restar(n1,n2);
		}
	}

});

//MULTIPLICACIÓN
btnMulti.addEventListener("click",function(){

	if(esNumero1 && esNumero2){
		alerta1.innerHTML="";
		alerta2.innerHTML="";
		var n1 = inputUno.value;
		var n2 = inputDos.value;

		if(n1=="" || n2==""){
			alerta1.innerHTML="*Campo vacío";
		}else{

			resultado.innerHTML = multiplicar(n1,n2);
		}
	}

});

//DIVISIÓN
btnDivision.addEventListener("click",function(){
	
	if(esNumero1 && esNumero2){
		var n1 = inputUno.value;
		var n2 = inputDos.value;

		if(n1=="" || n2==""){
			alerta1.innerHTML="*Campo vacío";
		}else{
			if(inputDos.value==0){
				alerta2.innerHTML="Esta dividiendo por 0";

			}else{
				alerta1.innerHTML="";
				alerta2.innerHTML="";
		
				resultado.innerHTML = dividir(n1,n2);

			}
		}
	}

});


//SUMA
function suma(n1, n2){
	return parseInt(n1) + parseInt(n2);
}
//RESTA
function restar(n1, n2){
	return parseInt(n1) - parseInt(n2);
}
//MULTIPLICACIÓN
function multiplicar(n1, n2){
	return parseInt(n1) * parseInt(n2);
}
//DIVISIÓN
function dividir(n1, n2){
	return parseInt(n1) / parseInt(n2);
}