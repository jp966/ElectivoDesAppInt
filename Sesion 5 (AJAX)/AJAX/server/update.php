<?php 

require('connection.php');
$db= new ConnectionDB();

$rut=$db->escape_string($_POST['rutAct']);
$nombre=$db->escape_string($_POST['nombreAct']);
$email=$db->escape_string($_POST['emailAct']);
$telefono=$db->escape_string($_POST['telefonoAct']);
$cargo=$db->escape_string($_POST['cargoAct']);



if($db->query("UPDATE contacto SET nombre='$nombre', email='$email', telefono='$telefono', 
	cod_cargo='$cargo' WHERE rut='$rut'")){
	
	header('Content-Type: application/json');
	echo json_encode(array('exito'=>true));

}else{
	echo ("Existe un error al realizar la consulta [". $db->error."]");
}




 ?>