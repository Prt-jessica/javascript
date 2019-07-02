/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
document.getElementById("run").addEventListener("click", ()=>{
  let art= window.lib.getPosts();
  art.then((articles) => {
    articles.forEach(element => {

        let com = window.lib.getComments(element.id);
        com.then( (tab)=>{
            element.com = tab;
        }) 
        
    });
    console.log(articles);
  }) 
})
})();
