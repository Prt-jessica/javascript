/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () =>{

        window.lib.getPosts((erreur, articles) =>  { // recup la lib des articles => on prends l'erreurs et après on prend le tab d'articles
            articles.forEach(element => { // on fait une boucle sur les articles pour les recup un par un
                window.lib.getComments(element.id, (erreur, tab) => { // on récupère nos articles et leur id pour associer chaque comment au bon articles
                    element.comments = tab;
                }) // on prends les articles et on y associe les comments et on affiche le tab de comments
            });
            console.log(articles); // on affiche les articles et leurs comment
        })
})
})();
