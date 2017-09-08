<!DOCTYPE html>
<html>
<head>
	<title>Ejemplo sesion PHP</title>
</head>
<body>
	<p>
		<?php 

		// Inicializar sesión
		session_start ();
		// Verificar datos de formulario (POST)
		if ( $_POST [ "usuario" ] == "admin" && $_POST [ "password" ] == "1234" ) {
			// Guardar datos en sesión
			$_SESSION [ "usuario" ] = $_POST [ "usuario" ];
			$_SESSION [ "logged_in" ] = true;
			echo "Sesión iniciada correctamente";
		} else {
			echo "¡Datos de sesión incorrectos!";
		}
		?>
	</p>

</body>
</html>