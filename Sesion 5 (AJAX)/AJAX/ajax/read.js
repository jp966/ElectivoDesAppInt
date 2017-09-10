$(document).ready(function () {
  $.get('../AJAX/server/read.php', function (data) {
      if (data.exito) {
        for (var i = 0; i < data.datos.length; i++) {
          //console.log (data.datos[i]);
          $('#tabla-registro').after(
                          '<tr id="fila_'+data.datos[i].rut+'">'+
                            '<td>'+data.datos[i].rut+'</td>'+
                            '<td>'+data.datos[i].nombre+'</td>'+
                            '<td>'+data.datos[i].email+'</td>'+
                            '<td>'+data.datos[i].telefono+'</td>'+
                            '<td>'+data.datos[i].cargo+'</td>'+
                            '<td> <button value=\''+data.datos[i].rut+'\' type="button" class="btn btn-info" data-toggle="modal" href="#actualizar" name="actualizar">Actualizar</button> - <a id="eliminar" class="btn btn-danger" data-toggle="modal" href="#myModal">Eliminar</a></td>'+
                          '</tr>'
                         ); 

        }
      }
    });
});