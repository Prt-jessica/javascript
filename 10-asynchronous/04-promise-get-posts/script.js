/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
 const promes = window.lib.getPosts(); // variable qui rapel une promesse grâce a new Promise dans promises.js
    promes.then((tab) => { // retourne la prommesse et ses paramètre
        console.log(tab); // affiche nos paramètre donc notre tab
 })
})();
