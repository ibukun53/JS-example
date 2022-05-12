function Portfoliocard(cardImg, cardHeader, cardTags) {
  this.cardImg = cardImg;
  this.cardHeader = cardHeader;
  this.cardTags = cardTags;
  this.createElement = function createElement() {
    //  a new element
    const div = document.createElement('div');
    // returns of element into html
    div.innerHTML = `Hello, ${this.cardImg} is a card that describe how a personal portfolio look  like ,the title is ${this.cardHeader} and the languages used for developing are ${this.cardTags}`;
    return div;
  };
}
// assigning a new variable  to call the  method
const portfolio = new Portfoliocard('./image/Screenshot.png', 'Multi-Post Stories Gain+Glory', ['Javscript', 'Ruby on rails', 'Html', 'Css']);
// assiging the first existing element to selector
const div = document.querySelector('.card');
// assigning a variable
const port = portfolio.createElement();
div.appendChild(port);