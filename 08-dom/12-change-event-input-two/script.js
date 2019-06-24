/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
let mdp = document.getElementById("pass-one");
let ok = document.getElementById("validity");
mdp.addEventListener("input", () =>{
    let nmbr = /.*\d.*\d.*/;
    let result = nmbr.test(mdp.value);
    if (mdp.value.length >=8 && result == true){
        ok.textContent = "ok";
        console.log(ok);
    }
    else {
        ok.textContent = "Pas ok";
    }
})
})();
