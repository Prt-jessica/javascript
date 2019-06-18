/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
document.getElementById("run").addEventListener("click", () => {

    let perso = {lastname: "Pirotte" , firstname : "Jessica" , age : "28ans" , city: "Vivegnis" , country : "Belgique"};
    
    const identite = (obj) => { 
        return " Nom de famille: " + obj.lastname +
        "\n Prénom: " + obj.firstname +
        "\n Âge: " + obj.age +
        "\n Ville: " + obj.city +
        "\n Pays:  " + obj.country ;

    };
    console.log(identite(perso)); 
});
})();
