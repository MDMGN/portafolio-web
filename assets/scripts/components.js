export default function(){
    typingAnimation();
    stepProgressBar();
    animateBars();
    darkmoder();
}
//Typing text animation vanilla JS.
const typingAnimation=()=>{
    const texts=['Developer','Creator','Designer'];
    let count=0,index=0,currenText='',letter='';
    (function type(){
        if(count===texts.length) count=0;
        currenText=texts[count];
        letter=currenText.slice(0,++index);
        document.querySelector('.auto-input').textContent=letter;
        if(letter.length===currenText.length){
            count++;
            index=0;
        }
        setTimeout(type,400);
    })();
}
//Step Progress Bar Animation.
const $progress=document.getElementById('progress');
const $prev=document.getElementById('prev');
const $next=document.getElementById('next');
const $circles=document.querySelectorAll('.circle');
const $wordBallon=document.querySelector('.burbuja-texto');
const $wordBallon_text=document.querySelector('.burbuja-texto p');
let currentActive=1;
const stepProgressBar=()=>{
    $next.addEventListener('click',()=>{
        currentActive++;
        if(currentActive>$circles.length) currentActive= $circles.length;
        updateProgressBar();
    });
    $prev.addEventListener('click',()=>{
        currentActive--;
        if(currentActive<1) currentActive= 1;
        updateProgressBar();
    });
}
const updateProgressBar=()=>{
    $circles.forEach((circle,index) => {
        if(index<currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    });
    const $actives=document.querySelectorAll('.active');
    $progress.style.width=(($actives.length-1)/($circles.length-1))*100+'%';
    if(currentActive===1){
        $prev.disabled=true
    }else if(currentActive===$circles.length){
        $next.disabled=true;
    }else{
        $prev.disabled=false;
        $next.disabled=false;
    }
    switch(currentActive){
        case 1: $wordBallon_text.textContent='85%';
        break;
        case 2: $wordBallon_text.textContent='80%';
        break;
        case 3: $wordBallon_text.textContent='65%';
        break;
        case 4: $wordBallon_text.textContent='Learning';
        break;
    }
    $wordBallon.style.transform=`translateX(${(currentActive-1)*100}px)`;
}
const animateBars=()=>{
    const $line1__bars=document.querySelector('.line1__bars-menu');
    const $line2__bars=document.querySelector('.line2__bars-menu');
    const $line3__bars=document.querySelector('.line3__bars-menu');
    const $bars__menu=document.querySelector('.bars__menu');
    const $nav_menu=document.querySelector('nav ul');
    const $nav_logo=document.querySelector('nav .logo');
    $bars__menu.addEventListener('click',()=>{
        $line1__bars.classList.toggle('activeline1__bars-menu');
        $line2__bars.classList.toggle('activeline2__bars-menu');
        $line3__bars.classList.toggle('activeline3__bars-menu');
        $nav_menu.classList.toggle('active');
        $nav_logo.classList.toggle('disable');
        $bars__menu.classList.toggle('active');
        document.querySelector('.darkmoder-icon').classList.toggle('disable');
    });
}
const darkmoder=()=>{
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
            document.body.classList.toggle('darkmoder');
        }      
    });
}