/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
let button = document.getElementById("run").addEventListener("click", ()=>{
    let name = document.getElementById("hero-name").value;
    let alterEgo = document.getElementById("hero-alter-ego").value;
    let powers = document.getElementById("hero-powers").value;
    let init = {
        method:"POST", // methode d'envoie à l'API
        headers:{"Accept":"application/json", //accepte des données de type Json
                "Content-type": "application/json"}, //envoie des données  de type Jsob
        body: JSON.stringify( //transforme l'objet en chaine de caractere Json
            {
                name: name,
                alterEgo: alterEgo,
                abilities: powers.split(",")
            }
        )
    };
    fetch("http://localhost:3000/heroes", init) //requete pour ajouter les paramettre = objet init
    setTimeout(()=>{
        fetch("http://localhost:3000/heroes")
        .then((reponse) =>{
            reponse.json().then((temp)=>{
                temp.forEach(element => {
                    console.log(element);
                    
                });
            });
        });
    },2000);
})
})();
