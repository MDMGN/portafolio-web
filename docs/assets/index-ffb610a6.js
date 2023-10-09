(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const $=[{title:"Web",name:"Sistema de facturación",description:"Sistema de facturación de productos, desarrollado con las tecnologías web HTML5, CSS3, JavaScript, Boostrap4, PHP y MySQL.        usuario:seven7@gmail.com usuario:12a3@gmail.com  contraseña:12345678.",image:"/images/pfactura.png",url:"https://gentler-curvature.000webhostapp.com/clientes_facturas_poo_mvc/login"},{title:"Web",name:"Piazzere",description:"Pizzeria E-commerce, contribución al proyecto Frontend de @LiquidArtDevelopers, desarrollado con las tecnologías web HTML5, CSS3, SASS y JavaScript",image:"/images/piazzere.png",repository:"https://github.com/LiquidArtDevelopers/_PROYECTO_PIZZERIA_",url:"https://gentler-curvature.000webhostapp.com/piazzere/"},{title:"Web",name:"Tik-Tok",description:"Contenido para entretener",image:"/images/tik-tok.png",repository:"https://github.com/GCode123xz/tik-tok",url:"https://gcode123xz.github.io/tik-tok"},{title:"Web",name:"Semiconservas",description:"Proyecto Web, desarrollado con las tecnologías HTML5, CSS3, BootStrap, JavaScritp.",image:"/images/sconservasdelnorte.jpg",repository:"https://github.com/MDMGN/semiconservasdelnorte",url:"https://mdmgn.github.io/semiconservasdelnorte"},{title:"Android",name:"Touch - Kill Zombie",description:" Juego Touch para matar diferentes zombies. ¡Únete al terror y acción!. Desarrollado con JAVA y Android Studios para el Sistema Operativo móvil Android.",image:"/images/touchKillZombie.png",repository:"https://github.com/MDMGN/TouchKillZombie",url:"https://docs.google.com/document/d/1Mx2HmOUU8PBRV7wQxp3iqTa5atO19hE-/edit?usp=sharing&ouid=100778067612269930603&rtpof=true&sd=true"},{title:"Python",name:"Sendinblue",description:"Pequeño proyecto de sistema de gestión de emails, desarrollado con el lenguaje de programación 'Python' y la API 'Sendinblue' gestiona y administra los emails de usuarios para newsletter.",image:"/images/sendinblue.png",repository:"https://github.com/MDMGN/send",url:""}];function q(){E()}console.log(location);const E=()=>{const e=document.querySelector(".cards"),t=document.getElementById("template-card").content,r=document.createDocumentFragment();$.forEach(s=>{t.querySelector(".card img").setAttribute("src",`${location.origin+s.image}`),t.querySelector(".card h3").textContent=`${s.title}`,t.querySelector(".card p").textContent=`${s.description}`,t.querySelector(".card .url").setAttribute("href",`${s.url}`),t.querySelector(".card .url").textContent=`${s.name}`,t.querySelector(".card .repository").setAttribute("href",`${s.repository}`);const o=document.importNode(t,!0);r.appendChild(o)}),e.appendChild(r)};function w(){C(),x(),T(),P(".top-btn")}const k=document.getElementById("progress"),g=document.getElementById("prev"),p=document.getElementById("next"),i=document.querySelectorAll(".circle"),A=document.querySelector(".burbuja-texto"),l=document.querySelector(".burbuja-texto p");let a=1;const x=()=>{p.addEventListener("click",()=>{a++,a>i.length&&(a=i.length),h()}),g.addEventListener("click",()=>{a--,a<1&&(a=1),h()})},h=()=>{i.forEach((t,r)=>{r<a?t.classList.add("active"):t.classList.remove("active")});const e=document.querySelectorAll(".active");switch(k.style.width=(e.length-1)/(i.length-1)*100+"%",a===1?g.disabled=!0:a===i.length?p.disabled=!0:(g.disabled=!1,p.disabled=!1),a){case 1:l.textContent="85%";break;case 2:l.textContent="80%";break;case 3:l.textContent="65%";break;case 4:l.textContent="Learning";break}A.style.transform=`translateX(${(a-1)*100}px)`},T=()=>{const e=document.querySelector(".line1__bars-menu"),t=document.querySelector(".line2__bars-menu"),r=document.querySelector(".line3__bars-menu"),s=document.querySelector(".bars__menu"),o=document.querySelector("nav ul"),n=document.querySelectorAll("nav ul li a"),c=document.querySelector("nav .logo");s.addEventListener("click",()=>v()),n.forEach(_=>_.addEventListener("click",()=>{o.classList.contains("active")&&v()}));const v=()=>{e.classList.toggle("activeline1__bars-menu"),t.classList.toggle("activeline2__bars-menu"),r.classList.toggle("activeline3__bars-menu"),o.classList.toggle("active"),c.classList.toggle("disable"),s.classList.toggle("active"),document.querySelector(".darkmoder-icon").classList.toggle("disable")}},C=()=>{const e=["Darren","Desarrollador","Creador","Programador"];let t=0,r=0,s="",o="";(function n(){t===e.length&&(t=0),s=e[t],o=s.slice(0,++r),document.querySelector(".auto-input").textContent=o,o.length===s.length&&(t++,r=0),setTimeout(n,400)})()},P=e=>{const t=document.querySelector(e).classList,r=".fa-arrow-up";window.addEventListener("scroll",s=>{(window.pageYOffset||document.documentElement.scrollTop)>600?t.add("hidden"):t.remove("hidden")}),document.addEventListener("click",s=>{(s.target.matches(e)||s.target.matches(r))&&window.scrollTo({behavior:"smooth",top:0})})},d=document.body.classList,u=document.querySelector(".fa-solid").classList;function B(){document.addEventListener("click",e=>{e.target.matches(".fa-solid")&&(e.target.classList.contains("fa-sun")?(e.target.classList.remove("fa-sun"),e.target.classList.add("fa-moon"),e.target.classList.add("move")):(e.target.classList.remove("fa-moon"),e.target.classList.add("fa-sun"),e.target.classList.add("move")),setTimeout(()=>e.target.classList.remove("move"),400),d.toggle("darkmoder"),d.contains("darkmoder")?localStorage.setItem("theme","light"):localStorage.setItem("theme","dark"))}),localStorage.getItem("theme")==="light"?(d.add("darkmoder"),u.remove("fa-sun"),u.add("fa-moon")):(d.remove("darkmoder"),u.remove("fa-moon"),u.add("fa-sun"))}const f=document.getElementById("form"),M=document.querySelectorAll(".form input"),b={nombre:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/},m={name:!1,email:!1};function z(){M.forEach(e=>{e.addEventListener("keyup",S),e.addEventListener("blur",S)}),f.addEventListener("submit",e=>{e.preventDefault(),m.name&&m.email&&I()})}const y=(e,t,r)=>{e.test(r)?(document.querySelector(`#${t}-error`).classList.remove("activo"),m[t]=!0):(document.querySelector(`#${t}-error`).classList.add("activo"),m[t]=!1)},S=e=>{switch(e.target.name){case"name":y(b.nombre,"name",e.target.value),e.target.value;break;case"email":y(b.correo,"email",e.target.value),e.target.value;break;case"message":e.target.value}};async function I(){const e=new FormData(f),t=document.querySelector(".response"),r={method:"POST",body:e,mode:"cors"};try{const s=await fetch("https://mdmgn.000webhostapp.com/portafolio/mail.php",r);t.innerHTML=`
        <div class="formulario__mensaje-successful">
            <p >El formulario ha sido enviado exitosamente!</p>
        </div>
        `,f.reset()}catch(s){t.innerHTML=`
        <div class="formulario__mensaje-error">
            <p>Error al enviar tus datos. Intenta nuevamente.</p>
        </div>`,console.error(`Fomulario error: ${s}`)}finally{setTimeout(()=>t.classList.remove("hidden"),300),setTimeout(()=>t.classList.add("hidden"),5e3)}}function O(){Z()}const D=(e,t)=>{e.forEach(r=>{r.isIntersecting&&r.target.classList.add("visible")})},L=new IntersectionObserver(D,{threshold:.1}),Z=()=>{const e=document.querySelector("main").children;for(let r of e)L.observe(r);const t=document.querySelector("footer").children;for(let r of t)L.observe(r)};document.addEventListener("DOMContentLoaded",()=>{B(),w(),q(),O(),z()});
