<!DOCTYPE html>
<html>
<head>
	<title>Ejemplo conexión BD</title>
</head>
<body>
<p>

<?php 

	$mySqlHost="localhost";
	$mySqlUser="root";
	$mySqlPass="1234";
	$baseDeDatos="tutorialphp";

	$link= mysql_connect($mySqlHost,$mySqlUser,$mySqlPass) 
		or die('No se pudo conectar' . mysql_error());

	echo "Conectado exitosamente";

	mysql_select_db($baseDeDatos) or die('No se pudo conectar a la BD');

	//REALIZAR CONSULTA

	$query="SELECT * FROM saludos";
	$result = mysql_query($query) or die("Consulta fallida" . mysql_error());


	//IMPRIMIR RESULTADOS

	echo "<table>\n";

	while ($line = mysql_fetch_array($result,MYSQL_ASSOC)){

		echo "\t<tr>\n";

		foreach ($line as $col_value) {
			echo "\t\t<td>$col_value</td>\n";
		}

		echo "\t</tr>\t";

	}

	echo "</table>\n";

	//LIBERAR RESULTADOS
	mysql_free_result($result);

	//CERRAR LA CONEXION
	mysql_close($link);

 ?>
</p>
</body>
</html>