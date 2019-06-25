/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
// let num = document.getElementById("target");
// let buttonFour = document.getElementById("part-four");
// let buttonThree = document.getElementById("part-three");
// let buttonTwo =document.getElementById("part-two");
// let buttonOne= document.getElementById("part-one");

// buttonOne.addEventListener("click", () =>{

// let valueOne = parseInt(buttonOne.innerText) + 1;// tu mets 

//     if (valueOne > buttonOne.dataset.max){
//         valueOne = buttonOne.dataset.min;
//     } 
//     buttonOne.textContent = valueOne;
//     num.textContent = buttonOne.innerText + buttonTwo.innerText + buttonThree.innerText + buttonFour.innerText;
    
// });

// buttonTwo.addEventListener("click", () =>{

//     let valueTwo = parseInt(buttonTwo.innerText) + 1;
    
//         if (valueTwo > buttonTwo.dataset.max){
//             valueTwo = buttonTwo.dataset.min;
//         }
//         else if (valueTwo <10){
//             valueTwo =  "0" + valueTwo;
     
//          } 
//         buttonTwo.textContent = valueTwo;
//         num.textContent = buttonOne.innerText + buttonTwo.innerText + buttonThree.innerText + buttonFour.innerText;
        
//     });
//     buttonThree.addEventListener("click", () =>{

//         let valueThree = parseInt(buttonThree.innerText) + 1;
        
//             if (valueThree > buttonThree.dataset.max){
//                 valueThree = buttonThree.dataset.min;
//             } 
//             else if (valueThree <10){
//                 valueThree =  "0" + valueThree;
         
//              } 
//             buttonThree.textContent = valueThree;
//             num.textContent = buttonOne.innerText + buttonTwo.innerText + buttonThree.innerText + buttonFour.innerText;
            
//         });
//         buttonFour.addEventListener("click", () =>{

//             let valueFour = parseInt(buttonFour.innerText) + 1;
            
//                 if (valueFour > buttonFour.dataset.max){
//                     valueFour = buttonFour.dataset.min;
//                 } 
//                 else if (valueFour <10){
//                     valueFour =  "0" + valueFour;
             
//                  } 
//                 buttonFour.textContent = valueFour;
//                 num.textContent = buttonOne.innerText + buttonTwo.innerText + buttonThree.innerText + buttonFour.innerText;
                
//             });
const target= document.getElementById("target");
const buttons = Array.from(document.querySelectorAll("button"));
document.querySelectorAll("button").forEach((button)=> {
    button.addEventListener("click", ()=>{
        const value = +/*parseInt */(button_.innerText);
        value ++;
        if(value>parseFloat(button.getAttribute("data-max") )){
            value=button.getAttribute("data-min");
        }
        button.innerText=`${value}`.padStart(2, "0"); //padStart si tu as pas ça fait ça ...
        EventTarget.innerText = `${_buttons.map(btn => btn.innerText).join (" ")}`; //map recup toute les valeurs et en recrée un new tab
    })
})
})();

