'use strict';

const titleClickHandler = function(event){
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);
    console.log('clickedElement (with plus): ' + clickedElement);
    console.log('clickedElement (with comma): ', clickedElement);

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }
    console.log('activeLinkRemoved' )

    /* [DONE] add class 'active' to the clicked link */

    clickedElement.classList.add('active')

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts article.post.active');

    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }
    console.log('activeArticleRemoved' )

    /* get 'href' attribute from the clicked link */

    /* find the correct article using the selector (value of 'href' attribute) */

    /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
    link.addEventListener('click', titleClickHandler);
}