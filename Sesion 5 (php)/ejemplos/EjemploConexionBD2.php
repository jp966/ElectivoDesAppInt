<!DOCTYPE html>
<html>
<head>
	<title>Ejemplo Conexión con msqli</title>
</head>
<body>

<?php
	// Datos de conexión a la base de datos
	$dbHost = "localhost" ; // Host del servidor
	$dbUser = "root" ; // Nombre de usuario
	$dbPass = "1234" ; // Contraseña
	$dbName = "tutorialphp" ; // Nombre de la base de datos
	// Crear e inicializar conexión
	$link = new mysqli ( $dbHost , $dbUser , $dbPass , $dbName );
	// Verificar si hubo un error en la conexión a la base de datos
	if ( $link -> connect_error ) {
		die ( 'Error de conexión: ' . $link -> connect_error );
	}
	// Realizar una consulta MySQL
	$query = 'SELECT * FROM saludos';
	$result = $link -> query ( $query );
	if (! $result ) {
		echo "Error al ejecutar consulta a la base de datos: " . $link -> error;
	} else {
	// Imprimir los resultados en HTML
		echo "<table>\n";
	// Muestra cada resultado en una fila de la tabla
	// El método fetch_assoc() carga un resultado generado por la consulta.
	// $line contendrá las columnas de la tabla de la base de datos.
	// En este ejemplo(las columnas son "id" y "contenido"
		while ( $line = $result -> fetch_assoc ()) {
			echo "\t<tr>\n";
			echo "\t\t<td>{$line['id']}</td><td>{$line['contenido']}</td>\n";
			echo "\t</tr>\n";
		}
		echo "</table>\n";
	}
	// Cerrar la conexión
	$link -> close ();
?>

</body>
</html>