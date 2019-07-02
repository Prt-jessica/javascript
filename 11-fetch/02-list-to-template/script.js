/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
const template =document.getElementById("tpl-hero");
let target = document.getElementById("target");

document.getElementById("run").addEventListener("click",()=>{

fetch("http://localhost:3000/heroes")
.then((reponse) =>{
        reponse.json().then( (temp) =>{
            temp.forEach(element => {
                let temp = template.content.cloneNode(true); // clone le template ("mise en page")
                temp.querySelector(".name").innerText = element.name;
                temp.querySelector(".alter-ego").innerText = element.alterEgo;
                temp.querySelector(".powers").innerText = element.abilities;

                target.appendChild(temp);
            })

        })
    })
})
})();
