/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var chiffre1;
    var chiffre2;
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        chiffre1 = parseFloat (document.getElementById("op-one").value);
        chiffre2 = parseFloat (document.getElementById("op-two").value);
        alert(chiffre1 + chiffre2);
        
    });

    document.getElementById("substraction").addEventListener("click", () => {
        chiffre1 = parseFloat (document.getElementById("op-one").value);
        chiffre2 = parseFloat (document.getElementById("op-two").value);
        alert(chiffre1 - chiffre2);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        chiffre1 = parseFloat (document.getElementById("op-one").value);
        chiffre2 = parseFloat (document.getElementById("op-two").value);
        alert(chiffre1 * chiffre2);
    });

    document.getElementById("division").addEventListener("click", () => {
        chiffre1 = parseFloat (document.getElementById("op-one").value);
        chiffre2 = parseFloat (document.getElementById("op-two").value);
        alert(chiffre1 / chiffre2);
    });
})();
