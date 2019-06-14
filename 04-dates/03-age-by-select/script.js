/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

    var jour = document.getElementById("dob-day").value;
    var mois = document.getElementById("dob-month").value;
    var annee = document.getElementById("dob-year").value;
    var ajd = new Date ();

    var resultat = (ajd.getFullYear() - annee);
    if (ajd.getMonth() < mois && ajd.getDate() < jour){
        alert(resultat -1);
    }
    else {
        alert(resultat);
    }
});
})();
