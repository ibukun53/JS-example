/* eslint-disable max-len */
function Portfoliocard(name, description, language, skills, Framework, link) {
  this.name = name;
  this.description = description;
  this.language = language;
  this.skills = skills;
  this.framework = Framework;
  this.link = link;
  this.createElement = function createElement() {
    const grid = document.createElement('grid');
    const textNode = document.createTextNode(`Hello, ${this.name} is a platform that tells how to ${this.description} using the Language which  are${this.language}, while the Skills are${this.skills},the framework to be use are${this.framework},and ${this.link} to contact us.`);
    /* const element = document.getElementsByClassName('card');
    element[0].innerHtml = 'hi'; */
    grid.appendChild(textNode);
    document.body.appendChild(grid);
  };
}

const portfolio = new Portfoliocard('Personal portfoilio', 'build a product,feature or website Look through some of my work and experience! If you like what you see and have a project you need coded',
  ['Javscript', 'Ruby', 'Html', 'Css'], ['Bootstrap', 'Ruby', 'RSpec', 'Capybara', 'Selenium'], [' Codekit', 'Github', 'Codepen', 'Gitlab', 'Terminal'], 'debbyblessing1234@gmail.com');

portfolio.createElement();
