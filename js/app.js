// variables
const btnEnviar = document.querySelector('.btnEnviar');
const formulario = document.querySelector('#enviarMail')
// Variables para campos
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const  er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


eventListeners();
function eventListeners(){
    // Cuando la App inicia
    document.addEventListener('DOMContentLoaded', iniciarApp)

    // Campos del formulario
    nombre.addEventListener('blur', validarFormulario)
    email.addEventListener('blur', validarFormulario)
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarFormulario)
    // enviar formulario
    formulario.addEventListener('click', enviarEmail)
}

// Funciones
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('opacity-50');
}
//  Valida el fornulario
function validarFormulario(e){
    console.log(e.target.value)
    if(e.target.value.length > 0){

        // elimina los errores
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }

        e.target.style.borderBottomColor= 'none';
        e.target.style.borderBottomColor= '#ffce00';
    }else{
        e.target.style.borderBottomColor= '#e84855';
        e.target.style.borderBottomColor= 'none';
        mostrarError('Todos los campos son obligatorios');
    }
    
    if(e.target.type === 'email'){
            if(er.test(e.target.value)){
            // elimina los errores
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }

            e.target.style.borderBottomColor= 'none';
            e.target.style.borderBottomColor= '#ffce00';
        }else{
            e.target.style.borderBottomColor= '#e84855';
            e.target.style.borderBottomColor= 'none';
            mostrarError('Email no valido');
        }
    }

    if(nombre.value !== '' && er.test(email.value) && asunto.value !=='' && mensaje.value !==''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('opacity-50');
    }else{

    }
}
function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('borderror', 'error')

    const errores = document.querySelectorAll('.error')
    if(errores.length === 0){
       formulario.appendChild(mensajeError) 
    }
}


function enviarEmail(e){
    e.preventDefault();
    console.log('Enviando')
}


function menuMobile() {
    let change = 'change';
    let none = 'd-none';
    let appear = 'menuAppear';
    const menuOn = document.querySelector('.i-menu');
    const brand = document.querySelector('.brand');
    const menuEstru = document.querySelector('.navbar .container');
    const items = document.querySelector('.items');
    let imenu = document.querySelector('.menu-tablet-mobile');
        menuOn.addEventListener('click', () => {
            if (brand.classList.contains(none)) {
                brand.classList.remove(none)
                items.classList.remove(appear)
                imenu.src="img/icon2-mobile.png";
            } else{
                brand.classList.add(none)
                items.classList.add(appear)
                imenu.src="img/icon-x.png";
            }
            if (menuEstru.classList.contains(change)) {
                menuEstru.classList.remove(change)
                
            } else {
                menuEstru.classList.add(change) 
            }
    }) 
}
menuMobile();

function barra() {
    let progress = document.getElementById('progressbar');
    let totalhe = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function (){
        let progressHe = (window.pageYOffset / totalhe) * 100;
        progress.style.height = progressHe + "%";
    }
}
barra();
