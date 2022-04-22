const $textBox=document.querySelector('.text-box');
export default function autoTyping(){
    observer.observe($textBox);
}
//Typing text animation vanilla JS.
const typingAnimation=(entries)=>{
    const texts=['Darren','Developer','Designer','Creator'];
    let count=0,index=0,currenText='',letter='';   
    entries.forEach(entry => {
        if(entry.isIntersecting){
            (function type(){
                if(count===texts.length) count=0;
                currenText=texts[count];
                letter=currenText.slice(0,++index);
                document.querySelector('.auto-input').textContent=letter;
                if(letter.length===currenText.length) count++,index=0;
                var setType=setTimeout(type,400);
            })();
        }else{
            clearTimeout(setType);
        }
    });
    
}
const observer= new IntersectionObserver(typingAnimation,{
    threshold:0.4
});
