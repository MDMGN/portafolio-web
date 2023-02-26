import "../scss/styles.scss"
import cards from "./cards.js";
import components from "./components.js";
import darkmoder from "./darkmoder.js";
import form from "./form.js";
import observer from "./observer.js";

document.addEventListener('DOMContentLoaded',()=>{
    darkmoder();
    components();
    cards();
    observer();
    form();
});