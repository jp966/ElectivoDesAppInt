<?php 
require('connection.php');
$db= new ConnectionDB();

$rut = $_POST['id'];

if($db->query("DELETE FROM contacto WHERE rut='$rut'")){

	header('Content-Type: application/json');

	echo json_encode(array('exito' => true,'rut'=> $rut));
	
}else{
	die("Ocurrio UN problema al ejecutar la consulta [ ".$db->error." ]");
}


 ?>