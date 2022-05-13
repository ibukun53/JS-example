function PortfolioCard(cardImg, cardHeader, cardTags) {
  this.cardImg = cardImg;
  this.cardHeader = cardHeader;
  this.cardTags = cardTags;
  this.createElement = function createElement() {
    //  a new element
    const div = document.createElement('div');
    // returns of element into html
    div.innerHTML = ` <div class="grid">
            <div class="grid-item">
              <div class="card">
                <img class="card-img" src="${this.cardImg}" alt="page" />
                <h3 class="card-header">${this.cardHeader}</h3>
                <ul class="card-content margin-left-right-auto">
                  <li class="content-tags">${this.cardTags}</li>
                  <li class="content-tags">css</li>
                  <li class="content-tags">Javascript</li>
                  <li class="content-tags">html</li>
                </ul>
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
const portfolioCard = new PortfolioCard('./image/Snapshoot Portfolio.png', 'Multi-Post Stories Gain+Glory', ['Javscript', 'Ruby on rails', 'Html', 'Css']);
// assiging the first existing element to selector
const div = document.querySelector('.card');
// assigning a variable
const portfolio = portfolioCard.createElement();
div.appendChild(portfolio);

document.querySelector('.grid').style.cssText = 'width: auto; height: auto; alignItems: start; marginTop: 5%;';
document.querySelector('.grid-item').style.cssText = 'display: inline- block; border: 6px solid #e5e5e5; background-color: rgba(255, 255, 255, 1); width: 60%; height: 70%; margin: auto; border-radius: 25px; overflow: hidden; cursor: pointer;transition: 0.2s;';
document.querySelector('.card').style.cssText = 'box-sizing: borderBox; border: 5px; width: 100%; height: 40%; margin-bottom: 5px;';
document.querySelector('.card-img').style.cssText = 'display: block; width: 100%; height: 30%;';
document.querySelector('.card-header').style.cssText = 'display: block; font-size: 140%; width: 70%; height: 8%; font-weight: 600; color: rgb(58, 74, 66); margin: auto; text-align: center; justify-content: center; font-style: normal;lineHeight: 32px';
document.querySelector('.card-content').style.cssText = 'display: flex;width: 96%;flex-wrap: wrap;align-content: center;justify-content: space-between;align-items: center;text-align: center;margin-top: 10%;';
document.querySelector('.content-tags').style.cssText = 'border-radius: 4px; margin-top: 12px; margin-bottom: 10px; background: rgba(235, 240, 238, 1);padding: 2%;font-size: 12px;font-style: normal;font-weight: 600;letter-spacing: 0.03em;color: black';
document.querySelector('.content-btn').style.cssText = 'border-radius: 4px; padding: 2%; margin: 10% 42% 5%;; background:  #805500; align-items: center; filter: contrast(150%)';
document.querySelector('.see-projects').style.cssText = '; text-decoration: none; text-align: center;  margin: auto;;border: 0; color: rgb(255, 255, 255); background:  #805500;';