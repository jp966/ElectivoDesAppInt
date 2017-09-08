<!DOCTYPE html>
<html>
<head>
	<title>Ejemplo herencia PHP</title>
</head>
<body>
<p>
<?php 
	
	class Figura{
		public $tieneLados=true;
	}

	class Cuadrado extends Figura{

	}

	$cuadrado = new Cuadrado();

	if(property_exists("Cuadrado", "tieneLados")){

		echo "Tengo lados";
	}


?>
</p>


</body>
</html>