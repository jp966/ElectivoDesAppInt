(function () {

	$(document).ready(function(){
		//al cargar el documento

		$(".estado").each(function(){

			if($(this).text()=="true"){

				$(this).text("Vivo");

			}else{

				if($(this).text()=="false"){

					$(this).text("Muerto");
				}
			}
		});

		//al enviar el formulario
		$(document).on("submit","[name='formNuevo']",function(){

			$(".estado").each(function(){

				if($(this).text()=="true"){

					$(this).text("Vivo");

				}else{
					if($(this).text()=="false"){

						$(this).text("Muerto");
					}
				}
			});
			//reseteo de campos del formulario
			$("[name='formNuevo']")[0].reset();


		});




	});

})();