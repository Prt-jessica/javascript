/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
document.getElementById("run").addEventListener("click", () =>{
console.clear();
    let id = document.getElementById("hero-id").value;
    id = id.split(",");
    let init = {
        method:"DELETE"
    }
    id.forEach(element =>{
        fetch("http://localhost:3000/heroes/"+element, init)
    })

    setTimeout(()=>{
        fetch("http://localhost:3000/heroes")
        .then((reponse) =>{
            reponse.json().then((temp)=>{
                temp.forEach(element => {
                    console.log(element);
                    
                });
            });
        });
    },2000);
})
})();
