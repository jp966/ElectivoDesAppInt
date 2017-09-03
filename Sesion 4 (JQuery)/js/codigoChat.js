
$(document).ready(function(){ 
// código a ejecutar 

$("#textarea-chat").keydown(function(e){
	if (e.keyCode == 13 && !e.shiftKey)
	{
	    $('#btnEnviar').click();
	    e.preventDefault();
	}
});

/*

if($("#textarea-chat").val()!=""){

	$('#textarea-chat').keypress(function(e) {

			if(e.which == 13) {
        		$('#btnEnviar').click();
    		}
	});
}
*/


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
});