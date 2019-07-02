/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
document.getElementById("run").addEventListener("click", () =>{
const template =document.getElementById("tpl-hero");
let target = document.getElementById("target");
let id = parseInt(document.getElementById("hero-id").value); 

    fetch("http://localhost:3000/heroes")
    .then((reponse) =>{
        reponse.json().then( (temp) =>{
            let trouver = false;
            temp.forEach(element => {
                let temp = template.content.cloneNode(true); // clone le template ("mise en page")
                if(element.id === id){
                    console.log("yep");
                    target.innerText="";
                    temp.querySelector(".name").innerText = element.name; // permet d'écrire dans la balise correspondate le texte
                    temp.querySelector(".alter-ego").innerText = element.alterEgo;
                    temp.querySelector(".powers").innerText = element.abilities;
    
                    target.appendChild(temp);// ajoute dans l'éllement parents, les élement enfant 
                    trouver = true;
                }
            })
            if(trouver == false){
                target.innerText = "Rien ne coorespond!"
            }
        })
    })
})
})();
