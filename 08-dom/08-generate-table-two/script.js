/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function creeTableau(id, ligne, colonne){
        let tableau = document.getElementById("tableauId");
        for(iLigne = 0; iLigne < ligne; iLigne++){
            let ligne = tableau.insertRow(-1); // crée une ligne
            if (iLigne == 0){ // on met la première ligne en couleur 
                ligne.style.backgroundColor = "#C0ADED";

            }
            
    
            for(iColonne = 0; iColonne < colonne; iColonne++){
                let cellule = ligne.insertCell(-1); // crée une cellule dans la ligne
                cellule.textContent = (iLigne+1)*(1+iColonne);// on utilise l'indexe de nos lignes et collones pour faire nos multiplication ; du coup on rajoute +1 pour pas que ça commence à 0
                if(iColonne == 0){ // on met la première colonne en couleur
                cellule.style.backgroundColor = "#CFB8E3"; 
                }
            }
        }
    }

let t = document.getElementById("target").innerHTML =" <table id='tableauId'>  </table>"; // création d'un tableau en html

creeTableau("tableauId", 10, 10);
})();
