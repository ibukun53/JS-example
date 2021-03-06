function PortfolioCard(data) {
  this.cardImg = data.cardImg;
  this.cardHeader = data.cardHeader;
  this.cardTags = data.cardTags;
  this.createElement = function createElement() {
    const tags = cardTags => cardTags.map(e => `<li class="content-tags">${e}</li>`).join('');
    const card = tags(this.cardTags);
    const div = document.createElement('div');
    // returns of element into html
    div.innerHTML = ` <div class="grid"> 
            <div class="grid-item">
              <div class="card" >
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
  // eslint-disable-next-line no-sequences
}
const data = {
  cardImg: './image/Snapshoot Portfolio.png',
  cardHeader: 'Multi-Post Stories Gain+Glory',
  cardTags: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
};
// assigning a new variable  to call the  method
const portfolioCard = new PortfolioCard(data);
// assiging the  first existing element to selector
const div = document.querySelector('.card');
// assigning a variable
const portfolio = portfolioCard.createElement();
div.appendChild(portfolio);
// eslint-disable-next-line no-console