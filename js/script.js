'use strict';

const titleClickHandler = function(event) {

  event.preventDefault();

  const clickedElement = this;
  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  /* [DONE] add class 'active' to the clicked link */

  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.post.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);

  /* [DONE] add class 'active' to the correct article */

  targetArticle.classList.add('active');

};

const optArticleSelector = '.post';
const optTitleSelector = '.post-title';
const optTitleListSelector = '.titles';
const optArticleTagsSelector = '.post-tags .list';
const optArticleAuthorSelector = '.post-author';

const generateTitleLinks = function(customSelector = '') {

  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* for each article */

  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  let html = '';

  for (let article of articles) {

    /* [DONE] get the article id */

    const articleId = article.getAttribute('id');

    /* [DONE] find the title element */
    /* [DONE] get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* [DONE] create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    /* [DONE] insert link into titleList */

    html = html + linkHTML;
  }

  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
};

generateTitleLinks();

const generateTags = function (){

  /* [DONE] find all articles */

  const articles = document.querySelectorAll(optArticleSelector);
  /* [DONE] START LOOP: for every article: */

  for (let article of articles) {

    /* [DONE] find tags wrapper */

    const articleTagWrapper = article.querySelector(optArticleTagsSelector);

    /* [DONE] make html variable with empty string */

    let html = '';

    /* [DONE] get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');

    /* [DONE] split tags into array */

    const articleTagsArray = articleTags.split(' ');

    /* [DONE] START LOOP: for each tag */


    for (let tag of articleTagsArray) {

      /* [DONE] generate HTML of the link */

      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      /* [DONE] add generated code to html variable */

      html = html + linkHTML;

      /* [DONE] END LOOP: for each tag */

    }

    /* insert HTML of all the links into the tags wrapper */

    articleTagWrapper.innerHTML = html;

    /* [DONE] END LOOP: for every article: */

  }
};

generateTags();

const tagClickHandler = function (event) {

  /* [DONE] prevent default action for this event */

  event.preventDefault();

  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;

  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');

  /* [DONE] find all tag links with class active */

  const tagActive = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log ('activeTag', tagActive)
  /* [DONE] START LOOP: for each active tag link */

  for (let activeTag of tagActive) {

    /* [DONE] remove class active */

    activeTag.classList.remove('active');
    console.log('Remove active tag', activeTag);

    /* [DONE] END LOOP: for each active tag link */

  }

  /* [DONE] find all tag links with "href" attribute equal to the "href" constant */

  const tagLinks = document.querySelectorAll ('a[href="'+ href + '"]');

  /* [DONE] START LOOP: for each found tag link */

  for (let tagLink of tagLinks) {

    /*[DONE]  add class active */

    tagLink.classList.add('active');
    console.log ('Add active tag', tagLink);

    /* [DONE] END LOOP: for each found tag link */

  }

  /* [DONE] execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~=" ' + tag + ' "]');

};

const addClickListenersToTags = function () {

  /* find all links to tags */

  const allLinksToTags = document.querySelectorAll ('a[href^="#tag-"]');

  /* START LOOP: for each link */

  for (let allLinkToTags of allLinksToTags) {

    /* add tagClickHandler as event listener for that link */

    allLinkToTags.addEventListener('click', tagClickHandler);

    /* END LOOP: for each link */

  }
};

addClickListenersToTags();


const generateAuthors = function (){

  /* [DONE] find all articles */

  const articles = document.querySelectorAll(optArticleSelector);

  /* [DONE] START LOOP: for every article: */

  for (let article of articles) {

    /* [DONE] find tags wrapper */

    const articleAuthorWrapper = article.querySelector(optArticleAuthorSelector);

    /* [DONE] make html variable with empty string */

    let html = '';

    /* [DONE] get tags from data-tags attribute */

    const articleAuthors = article.getAttribute('data-author');

    /* [DONE] generate HTML of the link */

    const linkHTML = '<a href="author-' + articleAuthors + '">' + articleAuthors + '</a></<a>';

    /* [DONE] add generated code to html variable */

    html = html + linkHTML;

    /* insert HTML of all the links into the tags wrapper */

    articleAuthorWrapper.innerHTML = html;

    /* [DONE] END LOOP: for every article: */

  }
};

generateAuthors();

const authorClickHandler = function (event) {

  /* [DONE] prevent default action for this event */

  event.preventDefault();

  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;

  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */

  const author = href.replace('author-', '');

  /* [DONE] find all tag links with class active */

  const authorActive = document.querySelectorAll('a.active[href^="author-"]');

  /* [DONE] START LOOP: for each active tag link */

  for (let activeAuthor of authorActive) {

    /* [DONE] remove class active */

    activeAuthor.classList.remove('active');

  }

  /* [DONE] find all tag links with "href" attribute equal to the "href" constant */

  const authorLinks = document.querySelectorAll ('a[href="'+ href + '"]');

  /* [DONE] START LOOP: for each found tag link */

  for (let authorLink of authorLinks) {

    /*[DONE]  add class active */

    authorLink.classList.add('active');

    /* [DONE] END LOOP: for each found tag link */

  }

  /* [DONE] execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-author=" ' + author + '"]');

};

const addClickListenersToAuthors = function () {

  /* find all links to tags */

  const allLinksToAuthors = document.querySelectorAll ('a[href^="author"]');

  /* START LOOP: for each link */

  for (let allLinkToAuthors of allLinksToAuthors) {

    /* add tagClickHandler as event listener for that link */

    allLinkToAuthors.addEventListener('click', authorClickHandler);

    /* END LOOP: for each link */

  }
};

addClickListenersToAuthors();
