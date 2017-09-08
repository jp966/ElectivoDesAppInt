<!DOCTYPE html>
<html>
<head>
	<title>Ejemplos Clases PHP</title>
</head>
<body>
<p>
<?php 

	class Persona{
		public $viva=true;
		public $nombre=null;

		function __contruct($nombre){
			$this->$nombre=$nombre;

		}

		public function bailar(){
			echo "estoy baildando";
		}
	}

	$yo=new Persona("John");
	
	//comprueba si el objeto pertenece a la clase
	if(is_a($yo, "Persona")){
		echo "Soy una persona, ";
	}

	//si la propiedad existe
	if(property_exists($yo, "nombre")){
		echo "Tengo un nombre, ";
	}
	
	if(method_exists($yo, "bailar")){
		echo "y se como bailar!";
	}

 ?>

</p>

</body>
</html>