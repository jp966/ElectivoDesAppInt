$('#form-ingreso').submit(function(event){
 
  event.preventDefault();

  $.post('../AJAX/server/create.php', //URL
    //DATA
    $('#form-ingreso').serialize(),
    //SUCCESS
      function(dato){
        $("#agregar").modal('hide');
        if(dato.exito){
          console.log(dato);
          var variable="";
          if(dato.cargo == 12) variable="Jefe Proyecto";
          if(dato.cargo == 23) variable="Analista";
          if(dato.cargo == 32) variable="Desarrollador";


          $('#tabla-registro').after(
                          '<tr id="fila_'+dato.rut+'">'+
                            '<td>'+dato.rut+'</td>'+
                            '<td>'+dato.nombre+'</td>'+
                            '<td>'+dato.email+'</td>'+
                            '<td>'+dato.telefono+'</td>'+
                            '<td>'+variable+'</td>'+
                            '<td> <button value=\''+dato.rut+'\' type="button" class="btn btn-info" data-toggle="modal" href="#actualizar" name="actualizar">Actualizar</button> - <a id="eliminar" class="btn btn-danger" data-toggle="modal" href="#myModal">Eliminar</a></td>'+
                          '</tr>'
                         ); 
        }else{
          alert('Error al recibir la respuesta del Servidor');
        }
      });
});
