/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
document.getElementById("run").addEventListener("click", () =>{
class Person{
    constructor(firstname, lastname){
        this.firstname= firstname;
        this.lastname= lastname;
    }
    get name (){
        return this.firstname + this.lastname ;
    }
    set name(chaine){
        result = chaine.split(" ");
        console.log(result);
    }

}  
let poutchou = new Person ("bidule", "machin");
console.log(poutchou.name = "lol mdr");
});
})();
