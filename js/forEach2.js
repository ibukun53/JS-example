const card = [
  {
    title: 'Project Portfolio',
    description: 'tells more about the project',
    image: './img/1.png',
    link: 'https://github.com/ibukun53/',
    languages: ['javascript', 'css', 'html', 'ruby'],
  },
  {
    title: 'Growth Portfolio',
    description: 'gives more information about the development',
    image: './img/2.png',
    link: 'https://wa.me/2347013729933',
    languages: ['javascript', 'css', 'html', 'ruby'],
  },
  {
    title: 'Achievement Portfolio',
    description: 'shows the improvement in the system',
    image: './img/3.png',
    link: 'https://www.linkedin.com/in/ibukun53/',
    languages: ['javascript', 'css', 'html'],
  },
  {
    title: 'Celebration Portfolio',
    description: 'Multi-post stories gain glory',
    image: './img/4.png',
    link: 'https://web.facebook.com/debby.blessing.1460',
    languages: ['javascript', 'css', 'html', 'Jquery'],
  },
  {
    title: 'Competence Portfolio',
    description: 'shows the hieracy of competent project',
    image: './img/5.png',
    link: 'https://t.me/debbie1234',
    languages: ['javascript', 'css', 'html'],
  },
];

function ShowProjects(data) {
  this.image = data.image;
  this.title = data.title;
  this.languages = data.languages;
  this.createElement = function createElement() {
    const generalLiElements = textContents => textContents.map(textContent => `<li class="content-tags">${textContent}</li>`).join('');
    const languageLiElements = generalLiElements(this.languages);
    const div = document.createElement('div');
    // returns of element into html
    div.innerHTML = ` <div class="grid"> 
            <div class="grid-item">
              <div class="card" >
                <img class="card-img" src="${this.image}" alt="page" />
                <h3 class="card-header">${this.title}</h3>
                <ul class="card-content margin-left-right-auto">${languageLiElements} </ul>
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
const data = card[0];

const div = document.querySelector('.grid');
function attachToDom(cardDetail) {
  const portfolioCard = new ShowProjects(cardDetail);
  const portfolio = portfolioCard.createElement();
  div.appendChild(portfolio);
}
attachToDom(data);