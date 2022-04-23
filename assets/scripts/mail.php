<?php 
	$nombre = $_POST['name'];
	$email = $_POST['email'];
	$asunto = 'Formulario Rellenado';
	$mensaje = "Nombre: ".$nombre."<br> Email: $email<br> Mensaje:".$_POST['mensaje'];


	if(mail('michaelmdvr@gmail.com', $asunto, $mensaje)){
		echo "Correo enviado";
	}
 ?>