const myArray = ['Ryu', 'Ken', 'Chun-Li', 'Cammy', 'Guile', 'Sakura', 'Sagat', 'Juri'];
let text = '';

myArray.pop();
myArray.push('bless', 'ola');
// eslint-disable-next-line no-use-before-define
myArray.forEach(myFunction);
document.getElementById('demo').innerHTML = text;

function myFunction(item, index) {
  text += `${index}:${item}  `;
}
const myString = myArray.join('-');

// Don't edit the code below here!
const section = document.querySelector('section');
section.innerHTML = 'myArray';

// eslint-disable-next-line prefer-const
let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);