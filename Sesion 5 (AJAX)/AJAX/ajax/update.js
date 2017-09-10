$(document).ready(function () {

	$(document).on("click","button[name='actualizar']",function(event){
		event.preventDefault();

		var valor=$(this).attr('value');

		$.get('../AJAX/server/read.php', function (data) {
	      if (data.exito) {
	      	
	        for (var i = 0; i < data.datos.length; i++) {
	        	
	         	if(data.datos[i].rut==valor){
	         		var variable=null;

	         		$("input[name='rutAct']").val(data.datos[i].rut);
	         		$("input[name='nombreAct']").val(data.datos[i].nombre);
	         		$("input[name='emailAct']").val(data.datos[i].email);
	         		$("input[name='telefonoAct']").val(data.datos[i].telefono);

	         		if(data.datos[i].cargo=="Jefe Proyecto"){
	         			variable="12";
	         		}
	         		if(data.datos[i].cargo=="Analista"){
	         			variable="23";
	         		}
	         		if(data.datos[i].cargo=="Desarrollador"){
	         			variable="32";
	         		}

	         		$("select[name='cargoAct']").val(variable);

	         		break;
	         	}

	        }
	      }
    });

	});

	$(document).on("submit","#form-actualizar",function(event){
		
		event.preventDefault();


		$.post('../AJAX/server/update.php', //la url
			//los datos
			$('#form-actualizar').serialize(),
			//success
			function(data){
				if(data.exito){
					location.reload(true);
				}else{
					alert('Error al recibir respuesta del servidor');
				}
			});
			



	});




});