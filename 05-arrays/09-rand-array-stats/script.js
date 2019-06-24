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
        let newTab = [];
        for(let i=1 ; i<11 ; i++){
            result = Math.floor((Math.random() *100) +1);
            document.getElementById("n-" + i).textContent = result;  
            newTab.push(result);
            somme += result;
        }
        let min = Math.min(...newTab);
        document.getElementById("min").textContent = min ;
        let max = Math.max(...newTab);
        document.getElementById("max").textContent = max;
        document.getElementById("sum").textContent = somme;
        document.getElementById("average").textContent = somme/(newTab.length);
    });
    
})();
