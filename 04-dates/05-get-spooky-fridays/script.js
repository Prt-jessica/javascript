/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function format(dates){
        var option = {weekday:"long", year:"numeric", month:"long", day:"numeric"};
        return dates.toLocaleDateString("fr-FR",option);
    }
    document.getElementById("run").addEventListener("click", () =>{

        let annee = document.getElementById("year").value;
        let tableau = [];
        for(month=1 ; month <= 12 ; month ++){
            let dates = new Date(annee, month, 13);
            if(dates.getDay() == 5){
                tableau.push(dates);
    }
        }

        let result = "";
        for(i=0 ; i<tableau.length ; i++) {
        result += format (tableau[i]) + "\n";
        }
        alert (result);

    });
})();
