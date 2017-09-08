<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

<p>
<?php 
//GET
/*
	// URL: http://tusitio.cl/EjemploFormularios.php?nombre=Juan&apellido=Perez
	echo "Nombre: " . $_GET [ 'nombre' ]; // Salida: "Nombre: Juan"
	echo "Apellido: " . $_GET [ 'apellido' ]; // Salida: "Apellido: Perez"
	*/

//POST
echo "Usuario: " . $_POST [ 'usuario' ];
echo "Contraseña: " . $_POST [ 'password' ];


 ?>	
</p>


</body>
</html>