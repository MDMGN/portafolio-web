<?php 
	$name = $_POST['name'];
	$email = $_POST['email'];
    $message=   $_POST['message'];
	$asunto = 'Formulario Rellenado';
    if(isset($name,$email,$message)){
        $mensaje = "Nombre: ".$name."<br> Email: $email<br> Mensaje:".$message;
        if(mail('michaelmdvr@gmail.com', $asunto, $mensaje)){
            echo "Correo enviado";
        }   
    }else{
        echo "Corre no enviado";
    }
?>