const myArray = ['Ryu', 'Ken', 'Chun-Li', 'Cammy', 'Guile', 'Sakura', 'Sagat', 'Juri'];
let text = '';

myArray.pop();
myArray.push('bless', 'ola');

function myFunction(item, index) {
  text += `${index}: ${item}`;
}
myArray.forEach(myFunction);
document.getElementById('demo').innerHTML = text;

const myString = myArray.join('-');
// Don't edit the code below here!
const para1 = document.createElement('p');
para1.textContent = myString;
