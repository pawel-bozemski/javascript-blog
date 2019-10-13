'use strict';

const titleClickHandler = function(event){

    event.preventDefault();

    const clickedElement = this;

    console.log('Link was clicked!');
    console.log('clickedElement (with plus): ' + clickedElement);
    console.log('clickedElement (with comma): ', clickedElement);

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }
    console.log('Removed class active from links' )

    /* [DONE] add class 'active' to the clicked link */

    clickedElement.classList.add('active')

    console.log('Added class active to link')

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts article.post.active');

    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }
    console.log('Removed class active from articles' )

    /* [DONE] get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');

    console.log('Attribute', articleSelector)

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);

    console.log('Target article', targetArticle)

    /* [DONE] add class 'active' to the correct article */

    targetArticle.classList.add('active')

    console.log('Added class active to article')

};

const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.titles';

function generateTitleLinks () {


    /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector).innerHTML = '';

    console.log("remove contents of titlelist ", titleList)

    /* for each article */

        /* get the article id */

        /* find the title element */

        /* get the title from the title element */

        /* create HTML of the link */

        /* insert link into titleList */

}

generateTitleLinks();

const links = document.querySelectorAll('.titles a');

for(let link of links){
    link.addEventListener('click', titleClickHandler);
}