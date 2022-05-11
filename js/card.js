function Portfoliocard(CardImg, CardHeader, CardTags) {
  this.CardImg = CardImg;
  this.CardHeader = CardHeader;
  this.CardTags = CardTags;
  this.createElement = function createElement() {
    const newdiv = document.createElement('div');
    const element = newdiv.getElementsByClassName('card-img');
    element[0].innerHTML = `Hello, ${Portfoliocard.CardImg} is a card that describe how a personal portfolio look  like ,the title is ${Portfoliocard.CardHeader} and this languages are used for the creation which are ${Portfoliocard.CardTags}`;
  };
}

const portfolio = new Portfoliocard('./image/Screenshot.png', 'Multi-Post Stories Gain+Glory', ['Javscript', 'Ruby on rails', 'Html', 'Css']);

portfolio.createElement();