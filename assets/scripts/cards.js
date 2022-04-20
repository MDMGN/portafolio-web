export default function cards(){
    createCards();
}
const createCards=()=>{
    const $cards=document.querySelector('.cards');
    const $template=document.getElementById('template-card').content;
    const $fragment=document.createDocumentFragment();
    try{
        async function getProyects(){
            const res= await fetch('assets/json/proyects.json'), json= await res.json();
            json.forEach(proyect => {
                $template.querySelector('.card img').setAttribute('src',`${proyect.image}`);
                $template.querySelector('.card h3').textContent=`${proyect.title}`;
                $template.querySelector('.card p').textContent=`${proyect.description}`;
                $template.querySelector('.card .url').setAttribute('href',`${proyect.url}`);
                $template.querySelector('.card .url').textContent=`${proyect.name}`;
                $template.querySelector('.card .repository').setAttribute('href',`${proyect.repository}`);
                const $clone=document.importNode($template,true);
                $fragment.appendChild($clone);
            });
            $cards.appendChild($fragment);
        }
        getProyects();
    }catch(err){
        console.log(`Error read JSON proyects: ${err}`);
    }
}