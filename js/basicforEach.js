let text = '';
const fruits = ['apple', 'orange', 'cherry', 'banana'];
// eslint-disable-next-line no-use-before-define
fruits.forEach(myFunction);

function myFunction(item, index) {
  text += `${index}:  ${item}`;
  document.getElementById('demo').innerHTML = text;
}