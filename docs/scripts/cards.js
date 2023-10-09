import projects from "../json/proyects.json";
export default function cards(){
    createCards();
}
console.log(location)

const createCards=()=>{
    const $cards=document.querySelector('.cards');
    const $template=document.getElementById('template-card').content;
    const $fragment=document.createDocumentFragment();
    projects.forEach(proyect => {
        $template.querySelector('.card img').setAttribute('src',`${location.origin+proyect.image}`);
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