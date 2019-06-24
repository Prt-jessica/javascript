/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
let inputOne = document.getElementById("part-one");
let inputTwo = document.getElementById("part-two");
let inputThree = document.getElementById("part-three");
let inputFour = document.getElementById("part-four");

let buttonOne = document.getElementById("fix-part-one");
let buttonTwo = document.getElementById("fix-part-two");
let buttonThree = document.getElementById("fix-part-three");
let buttonFour = document.getElementById("fix-part-four");

const deffiler = () => {
    value = parseInt(inputOne.innerText) + 1;

    if (value > inputOne.dataset.max){
        value = inputOne.dataset.min;
    } 
    setTimeout(deffiler)
};
deffiler ()
})();
