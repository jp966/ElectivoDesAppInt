
$(document).ready(function(){ 
// código a ejecutar 


	//Arreglo del textoActual
	var arrayAct = [];
	var textoActual=$('.output-sms > p').html().split("");

	for (var i=0;i<textoActual.length;i++){
		arrayAct.push(textoActual[i]);
	};

	arrayAct[arrayAct.length]='';

	//Arreglo para el btn2
	var textArray2 = [];
	textArray2[0] = 'a';    
	textArray2[1] = 'b';    
	textArray2[2] = 'c';    
		 
	var idx2 = 0;
	var timer;
	$('#btn2').on('click', function(){

		if(idx2==textArray2.length){

			idx2=0;
			var caracterNuevo=textArray2[idx2];
			arrayAct[arrayAct.length-1]=caracterNuevo;
			var textoNuevo='';


			for (var i=0;i<arrayAct.length;i++){
				textoNuevo+=arrayAct[i];
			}

			//solo despues de 2 segundos
			$('.output-sms > p').html(textoNuevo);

			idx2++;

			/*
			setTimeout(function() {
				arrayAct.push('');
				idx2=0;
			}, 2000);
			*/

		}else{
			
			var caracterNuevo=textArray2[idx2];

			arrayAct[arrayAct.length-1]=caracterNuevo;

			var textoNuevo='';

			for (var i=0;i<arrayAct.length;i++){
				textoNuevo+=arrayAct[i];
			}


			//solo despues de 2 segundos
			$('.output-sms > p').html(textoNuevo);

			idx2++;
			/*
			setTimeout(function() {
				arrayAct.push('');
				idx2=0;
			}, 2000);
			*/
		}
		clearTimeout(timer);
		timer = setTimeout(function() {
				arrayAct.push('');
				idx2=0;
			}, 2000);
		//$('label#test').text(textArray[newidx]);
	});









/*
	$('#btnEnviar').click(function(e) { 

		//Contenido del textarea
		var textoNuevo = $("#textarea-chat").val();

		if(textoNuevo!=""){

			//contenido de la conversacion del chat
			var textoActual = $('.output-chat').html();
			//El texto actual ya posee las etiquetas
			var textoArreglado="";

			//En caso de que la cantidad de caracteres ingresados pase del ancho de su contenedor....
			if(textoNuevo.length>37){
				textoArreglado='<p style="width:200px; word-wrap: break-word;">' +textoNuevo+ '</p>';
				
			}else{
				textoArreglado='<p>'+textoNuevo+'</p>';
			}

			$('.output-chat').html(textoActual + textoArreglado);
			

			$("#textarea-chat").val("");

			$('.output-chat').animate({scrollTop:$('.output-chat').prop('scrollHeight')}, 0);

		}
	});
	*/
});