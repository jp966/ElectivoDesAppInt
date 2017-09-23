(function () {

	$(document).ready(function(){

		$(document).on("click","#btnModificar",function(){

			var disabled=! $(this).closest('tr').children('td').find('input').attr('disabled');

			 $(this).closest('tr').children('td').find('input').attr('disabled',disabled);
		});

	$(document).on("click","#btnPrestamo",function(){

				var nombre = $(this).closest('tr').children('td').find('#inputNombre').val();
				var email =$(this).closest('tr').children('td').find('#inputEmail').val();
				var telefono=$(this).closest('tr').children('td').find('#inputTelefono').val();

				$("input[ng-model='nombreCliente']").attr('value',nombre).trigger('change');
				$("input[ng-model='emailCliente']").attr('value',email).trigger('change');
				$("input[ng-model='telefonoCliente']").attr('value',telefono).trigger('change');
			});

	$(document).on("submit","#prestamo",function(){
		 $("#prestamo").modal('hide');
	})

		
	});

})();