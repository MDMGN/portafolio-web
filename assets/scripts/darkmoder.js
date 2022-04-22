const switchBody=document.body.classList;
const $darkmode_btn=document.querySelector('.fa-solid').classList;
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
    if(localStorage.getItem('theme')=== 'light'){
        switchBody.add('darkmoder');
        $darkmode_btn.remove('fa-sun');
        $darkmode_btn.add('fa-moon');
    }else{
        switchBody.remove('darkmoder');
        $darkmode_btn.remove('fa-moon');
        $darkmode_btn.add('fa-sun');
    }
}