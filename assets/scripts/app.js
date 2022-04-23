import cards from "./cards.js";
import components from "./components.js";
import darkmoder from "./darkmoder.js";
import validForm from "./form_valid.js";
import observer from "./observer.js";

document.addEventListener('DOMContentLoaded',()=>{
    darkmoder();
    components();
    cards();
    observer();
    validForm();
});