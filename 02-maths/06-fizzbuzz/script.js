/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {

for(i=1 ; i<=100 ; i++){

    if (i % 3 == 0 && i % 5 == 0){
        console.log("Fizzbuzz" + i); 
    }
    else if (i % 3 == 0){
        console.log("fizz" + i);
    }
    else if (i % 5 == 0){
        console.log("buzz" + i);
    }

}

})();
 