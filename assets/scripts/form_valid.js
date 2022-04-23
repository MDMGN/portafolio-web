'use strict';
const $formulario = document.getElementById('form');
const $inputs = document.querySelectorAll('.form input');
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campo={
    name:false,
    email:false,
}
//Función para la llamada en app.js

export default function validForm(){
    $inputs.forEach((input)=>{
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });
    
    $formulario.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(campo.name && campo.email){
             $formulario.reset();
             document.getElementById('formulario__mensaje-error').style.display='none';
             document.getElementById('formulario__mensaje-successful').style.display='block';
            setTimeout(() => {
                document.getElementById('formulario__mensaje-successful').style.display='none';
            }, 5000);
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
        break;
        case 'email':
            validarCampo(expresiones.correo,'email',e.target.value);
        break;
    }
}