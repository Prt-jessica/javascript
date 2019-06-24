/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
let image = document.querySelector("img");
let one = ""
image.addEventListener("mouseover", () => { // au survol de la souris
    one = image.src; // on récupère la première source de l'img
    image.src = image.dataset.hover; // on met la deuxième img au survol
});
image.addEventListener("mouseout", () =>{ // quant o enlève la souris

    image.src = one; // on reprends la première src de l'img
});
})();
