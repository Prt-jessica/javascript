/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
    document.getElementById("run").addEventListener("click", () => { 
    let rng = (max, min) => {Math.floor(Math.random() * (max - min)- min)};
    let oiseau = birds[rng];
    let texte = ""

    if(oiseau.fem == true){
        texte += "la " + oiseau.name + " " + [...adjectives][Math.floor(Math.random()* adjectives.size)] + "e"; 
    }
    else{
        texte= "le " + oiseau.name + " " + [...adjectives][Math.floor(Math.random() * adjectives.size)];
    }
    document.getElementById("target").innerHTML= texte;
});
})();
