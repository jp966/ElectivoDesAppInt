<?php 
include 'db.php';
session_start();

if(!isset($_SESSION['usuario'])) {
	header('Location: ./');
	die;
}

$id=$_GET['id'];

$result = $db->query("DELETE FROM noticias WHERE id_noticia=$id");

header("Location: welcome.php");
