
$(document).ready(function() {

	$arrayRUT=null;

	$(document).on("click","#eliminar",function(e){
		
		e.preventDefault();
		$arrayRUT = $(this).closest('tr').attr('id').split("_");
		/*
		$.post('../ejAjax/server/delete.php',
			//DATA
			{
				id : $arrayRUT[1]
			},
		    //SUCCESS
		    function(data){
		    	if(data.exito){
		    		//console.log(data);
		    		location.reload(true)
			    	//$(this).closest('tr').remove();
		    	}else{
		    		alert('Error al recibir respuesta del servidor');
		    	}
		    });
		    */
		

	});

	$(document).on("click","#aceptDel",function(e){
		e.preventDefault();
		
		$.post('../AJAX/server/delete.php',
			//DATA
			{
				id : $arrayRUT[1]
			},
		    //SUCCESS
		    function(data){
		    	if(data.exito){
		    		//console.log(data);
		    		$arrayRUT=null;
		    		location.reload(true)
			    	//$(this).closest('tr').remove();
		    	}else{
		    		alert('Error al recibir respuesta del servidor');
		    	}
		    });
	});

	 
	 
});