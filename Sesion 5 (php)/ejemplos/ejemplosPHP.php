<!DOCTYPE html>
<html>

<head>
<title>Ejemplos PHP</title>
</head>

<body>
<p>
<?php 

/*
	$txt="hello world";
	$x=5;
	$y=10.5;

	echo $txt;

	echo "<br>";

	echo $x;

	echo "<br>";

	echo $y;
*/

	//ARREGLO

	/*
	$languages=array("HTML/CSS","JavaScript","PHP","Python","Ruby");

	foreach ($languages as $lang) {
		print ("<p>$lang</p>");
	}

	print ("======");

	//eliminar un elemento del arreglo
	unset($languages[3]);


	foreach($languages as $lang){
		print ("<p>$lang</p>");

	}
	*/

	//FUNCIONES
	function saludar($nombre){
		//concatenación
		echo "Saludos, " . $nombre . "!";
	}

	saludar("john");




 ?>

</p>
</body>
</html>