const cardDetails = [
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

function PortfolioCard(data) {
  return [cardTags, cardImg, cardHeader];
}
const data = {
  cardImg: cardDetails[0],
  cardHeader: cardDetails[0],
  cardTags: cardDetails[0],
};
// eslint-disable-next-line no-console
console.log(PortfolioCard(data));