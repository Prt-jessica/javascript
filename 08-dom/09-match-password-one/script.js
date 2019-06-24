/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
document.getElementById("run").addEventListener("click", () => {
   let motDePass1 = document.getElementById("pass-one");
   let verification = document.getElementById("pass-two");

   // motDePass1.type= "password";
   // verification.type= "password";  

   if ( motDePass1.value != verification.value){
       motDePass1.style.border= "1px solid red";
        verification.style.border = "1px solid red"
   } 
   else {
    motDePass1.style.border= "1px solid silver";
    verification.style.border = "1px solid silver"
} 
});
})();
