/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
       
       var nombre_texte = document.getElementById("numbers").value
       var nombres = nombre_texte.split(",");
       for(var i=0; i<nombres.length; i++){
           nombres[i] = parseFloat(nombres[i]);
       }
       nombres.sort(function(a, b){return a-b});
       alert(nombres);
    });
})();
