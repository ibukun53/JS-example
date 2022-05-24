function PortfolioCard(cardImg, cardHeader, cardTags) {
  this.cardImg = cardImg;
  this.cardHeader = cardHeader;
  this.cardTags = cardTags;
  this.createElement = function createElement() {
    const tags = cardTags => cardTags.map(e => `<li class="content-tags">${e}</li>`).join('');
    tags(cardTags);
    const card = tags(cardTags);
    const div = document.createElement('div');
    // returns of element into html
    div.innerHTML = ` <div class="grid">
            <div class="grid-item">
              <div class="card">
                <img class="card-img" src="${this.cardImg}" alt="page" />
                <h3 class="card-header">${this.cardHeader}</h3>
                <ul class="card-content margin-left-right-auto">${card} </ul>
                <div class="content-btn">
                <a href="#" aria-label="button">
                <button-style onclick ="myFunction()" class="see-projects">See Project </button-style>
              </a>
                </div>
              </div>
            </div>
          </div> `;
    return div;
  };
}

// assigning a new variable  to call the  method
const portfolioCard = new PortfolioCard('./image/Snapshoot Portfolio.png', 'Multi-Post Stories Gain+Glory', ['Javascript', 'Ruby on rails', 'Html', 'Css']);
// assiging the  first existing element to selector
const div = document.querySelector('.card');
// assigning a variable
const portfolio = portfolioCard.createElement();
div.appendChild(portfolio);