import "./public/scss/styles.scss"
import cards from "./public/scripts/cards.js";
import components from "./public/scripts/components.js";
import darkmoder from "./public/scripts/darkmoder.js";
import form from "./public/scripts/form.js";
import observer from "./public/scripts/observer.js";

document.addEventListener('DOMContentLoaded',()=>{
    darkmoder();
    components();
    cards();
    observer();
    form();
});