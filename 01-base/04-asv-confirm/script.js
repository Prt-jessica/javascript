/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var age;
    var genre;
    var ville;
    var confirmation;
    
    do {
        age = prompt("Quel est ton âge?");
        genre = prompt("De quel sexe est tu?");
        ville = prompt("D'où vient tu?");
        confirmation = prompt("Est-ce bon? " + age + " " + genre + " " + ville);
    } while (confirmation.toLowerCase() != "oui");

})();
