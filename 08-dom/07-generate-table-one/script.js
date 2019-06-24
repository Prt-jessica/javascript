/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
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
            let nouvelle = tableau.insertRow(-1); // crée une ligne
    
            for(iColonne = 0; iColonne < colonne; iColonne++){
                let cellule = nouvelle.insertCell(-1); // crée une cellule dans la ligne
            }
        }
    }

let t = document.getElementById("target").innerHTML =" <table id='tableauId'>  </table>"; // création d'un tableau en html

creeTableau("tableauId", 10, 0);// appele le tableau, nmbr de ligne & nmb de cellule
})(); 
