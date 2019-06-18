/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Cat extends Animal{
        constructor (name){
            super();
            this.name = name;
            this.constructor.greeting = "miaou";
        }
    }
    class Dog extends Animal{
        constructor(name){
            super();
            this.name = name;
            this.constructor.greeting = "wouf";
        }
    }
    let meyko = new Dog ("Meyko");
    let guizmo = new Cat("Guizmo");
    console.log(meyko.sayHello());
    console.log(guizmo.sayHello());


})();
