'use strict';
const $formulario = document.getElementById('form');
const $inputs = document.querySelectorAll('.form input');
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const data={
    name:'',
    email:'',
    message:''
}
const campo={
    name:false,
    email:false,
}
//Función para la llamada en app.js

export default function form(){
    $inputs.forEach((input)=>{
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });
    
    $formulario.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(campo.name && campo.email){
            enviarFormulario();
             $formulario.reset();
             document.getElementById('formulario__mensaje-error').style.display='none';
        }else{
            document.getElementById('formulario__mensaje-error').style.display='block';
        }
    });
}
const validarCampo=(expresion,name,value)=>{
    if(expresion.test(value)){
        document.querySelector(`#${name}-error`).classList.remove('formulario__input-activo');
        campo[name]=true;
    }else{
        document.querySelector(`#${name}-error`).classList.add('formulario__input-activo');
        campo[name]=false;
    }
}
const validarFormulario=(e)=>{
    switch(e.target.name){
        case 'name':
                validarCampo(expresiones.nombre,'name',e.target.value);
                data['name']=e.target.value;
        break;
        case 'email':
            validarCampo(expresiones.correo,'email',e.target.value);
            data['email']=e.target.value;
        break;
        case 'message':
            data['message']=e.target.value;
    }
}
async function enviarFormulario(){
    const datos=new FormData($formulario);
    const $response=document.querySelector('.response');
    const init = {
        method: "POST",
        body: datos,
        mode: "cors"
      };
      try {
        const response = await fetch('https://gentler-curvature.000webhostapp.com/mail.php', init);
        $response.innerHTML=`
        <div id="formulario__mensaje-successful">
            <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!</p>
        </div>
        `;
      } catch (err) {
        $response.innerHTML(`
        <div id="formulario__mensaje-error">
            <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> ${err.message}</p>
        </div>`);
      }finally{
        setTimeout(()=>$response.classList.remove('hidden'),300);
        setTimeout(()=>$response.classList.add('hidden'),5000);
      }
}