/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () =>{
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    let cat = new Map ();
    console.log(keys.length);
    for(let i=0 ; i < keys.length ; i++){
        cat.set(keys[i], values[i]);
    }
    let final  = Object.fromEntries(cat);
    console.log(final);
            
});
})();
