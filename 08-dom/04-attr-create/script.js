/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
 let test= document.getElementById("source").getAttribute("data-image"); // récupère l'attribut image
 console.log(test);
 document.getElementById("target").innerHTML = `<img src="${test}" alt="chat"\>`; // met  l'image dans une balise img
 let del = document.getElementById("source");// sélectione la partie à enlever
 let parent = document.querySelector(".material");// sélectionne le parent de la partie enlever
 parent.removeChild(del); // on enleve la partie
})();
