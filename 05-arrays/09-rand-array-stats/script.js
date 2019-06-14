/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () =>{
        let somme = 0;
        let result = 0;
        newTab = []
        for(i=1 ; i<11 ; i++){
             result = document.getElementById("n-" + i).textContent = Math.floor((Math.random() *100) +1); 
             //Récupération de tout les id n-, après textContent pour les mettres dans les cellules et ensuite on fait mathfloor pour avoir un nombre entier et mathrandom pour avoir les chiffre entre 0 et 1 ( 1non inclus) et * 100 pour avoir les chiffre jusque 100 et plus 1 pour pas avoir de zero 
            newTab.push(result);
            somme += result;
        }
        var min = document.getElementById("min").textContent = Math.min(...newTab);
        var max = document.getElementById("max").textContent = Math.max(...newTab);
        document.getElementById("sum").textContent = somme;
        document.getElementById("average").textContent = somme/(newTab.length);
    });
    // your code here
})();
