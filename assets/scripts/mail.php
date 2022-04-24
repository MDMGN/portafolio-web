<?php 
    if(isset($_POST)){
        error_reporting(0);
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message=   $_POST['message'];
        $subject = 'Formulario Rellenado';

        $domain= $_SERVER['HTTP_HOST'];
        $to= 'michaelmdvr@gmail.com';
        $mensaje = "
            <p>
            Datos enviados desde: <b>$domain</b> 
            </p>
            <ul>
                <li>Nombre: $name</li>
                <li>Email:$email</li>
            </ul>
            <p>Mensaje</p>
        ";
        $headers="MIME-Version: 1.0\r\n"."Content-Type:text/html; charset=utf8\r\n".
        "From: Envío Automatico <no-reply@$domain>";
        
        if(mail($to, $subject, $mensaje,$headers)){
            $res=[
                "err"=>false,
                "message"=>"El formularioa ha sido enviado exitosamente."
            ];
        }else{
            $res=[
                "err"=>true,
                "message"=>"Error al enviar tus datos. Intenta nuevamente."
            ];
        }
header("Access-Control-Allow-Origin:*");
header("Content-type:application/json");
echo json_encode($res);
}
?>