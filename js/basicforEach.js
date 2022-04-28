let text = '';
const fruits = ['apple', 'orange', 'cherry', 'banana'];

function myFunction(item, index) {
  text += `${index}: ${item}<br>`;
}
fruits.forEach(myFunction);
document.getElementById('demo').innerHTML = text;