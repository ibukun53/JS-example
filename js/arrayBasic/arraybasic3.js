const myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
const myArray = myString.split(' , ');
const lastItem = [myArray.length - 1];
const arrayLength = [myString.length];

const array = myArray.splice(['+']);
// eslint-disable-next-line no-console
console.log(array);
// Don't edit the code below here!
const section = document.querySelector('section');
section.innerHTML = ' ';
// eslint-disable-next-line prefer-const
let para1 = document.createElement('p');
para1.textContent = `Array: ${myArray}`;

// eslint-disable-next-line prefer-const
let para2 = document.createElement('p');
para2.textContent = `The length of the array is ${arrayLength}.`;

// eslint-disable-next-line prefer-const
let para3 = document.createElement('p');
para3.textContent = `The last item in the array is "${lastItem}".`;

section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);