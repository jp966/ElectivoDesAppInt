<?php
 $usuario = $_POST["user"]; 
 $apellido= $_POST["apellido"];
 $edad =$_POST["edad"];

 $check_apellido=false;
 $check_edad=false;



 $array = array("pedro","homero","bart"); 
 $resultado = "No se ha encontrado en la lista"; 

 if(soloLetras($usuario)){
	 for ($i = 0; $i < count($array); $i++) {
		if($usuario == $array[$i] ){ 
			$resultado = "Si se encuentra en la lista"; 
		
		}
	} 
}

	if(empty($apellido)){
		echo "Campo apellido vacío*";
		$check_apellido=false;
	}else{
		if(soloLetras($apellido)){
			$check_apellido=true;

		}else{
			echo "Ingrese solo letras en apelido*";
			$check_apellido=false;
		}
	}

	if(empty($edad)){
		echo "Campo edad vacío*";
		$check_edad=false;
	}else{
		if(is_numeric($edad)){
			if($edad<0){
				echo "Ingrese una edad correcta*";
				$check_edad=false;
			}else{
				$check_edad=true;
			}
		}else{
			echo "Ingrese solo números en edad*";
			$check_edad=false;
		}
	}

/*
	function soloLetras($in){
  		if(preg_match('/[^a-Z]/',$in)){ 
  			return false;
  		}else{
 			return true;
  		}
  	}
  		*/

function soloLetras($cadena){ 
	$permitidos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ "; 
	for ($i=0; $i<strlen($cadena); $i++){ 
		if (strpos($permitidos, substr($cadena,$i,1))===false){ 
			//no es válido; 
			return false; 
		} 
	}  
	//si estoy aqui es que todos los caracteres son validos 
	return true; 
}  
if($check_edad && $check_apellido){
	echo $resultado; 
}
?>