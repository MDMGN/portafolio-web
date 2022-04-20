export default function observer(){
    showElements();
}
const loadedElemnts=(entradas,observador)=>{
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }
    });
}
const observador=new IntersectionObserver(loadedElemnts,{
    root:null,
    rootMargin: '0px 0px 0px 500px',
    threshold:1.0
});
const showElements=()=>{
    const main=document.querySelector('main').children;
    for(let el of main){
        observador.observe(el);
    }
    const footer=document.querySelector('footer').children;
    for(let el of footer){
        observador.observe(el);
    }
}