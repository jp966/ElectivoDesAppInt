(function () {

	$(document).ready(function(){

		$(document).on("click","#btnModificar",function(){

			var disabled=! $(this).closest('tr').children('td').find('input').attr('disabled');

			 $(this).closest('tr').children('td').find('input').attr('disabled',disabled);
		});
		



	});

})();