const switchBody=document.body.classList;
export default function darkmoder(){
    document.addEventListener('click',(e)=>{
        if(e.target.matches('.fa-solid')){
            if(e.target.classList.contains('fa-sun')){
                e.target.classList.remove('fa-sun');
                e.target.classList.add('fa-moon');
                e.target.classList.add('move');
            }else{
                e.target.classList.remove('fa-moon');
                e.target.classList.add('fa-sun');
                e.target.classList.add('move');
            }
            setTimeout(()=>e.target.classList.remove('move'),400);
            switchBody.toggle('darkmoder');
            if(switchBody.contains('darkmoder')){
                localStorage.setItem('theme','light');
            }else{
                localStorage.setItem('theme','dark');
            }
        }      
    });
    (localStorage.getItem('theme')=== 'light') 
    ? switchBody.add('darkmoder') : switchBody.remove('darkmoder');
}