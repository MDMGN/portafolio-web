export default function observer(){
    showElements();
}
const loadedElemnts=(entradas,observador)=>{
    entradas.forEach(entrada => {
        /* let isTexBox=entrada.target.classList.contains('text-box'); */
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }/* else{
            if(isTexBox) entrada.target.classList.remove('visible');
        } */
    });
}
const observador=new IntersectionObserver(loadedElemnts,{
    threshold:0.4
});
const showElements=()=>{
    /* const header=document.querySelector('header').children;
    for(let el of header){
        observador.observe(el);
    } */
    const main=document.querySelector('main').children;
    for(let el of main){
        observador.observe(el);
    }
    const footer=document.querySelector('footer').children;
    for(let el of footer){
        observador.observe(el);
    }
}