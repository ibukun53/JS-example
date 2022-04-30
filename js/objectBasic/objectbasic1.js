const cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting() {
    ('Meow!');
  },
};

// Put your code here
const catName = ['Bertie'];
cat.greeting();
cat.color = 'black';

// Don't edit the code below here

const para1 = document.createElement('p');
const para2 = document.createElement('p');

para1.textContent = `The cat's name is ${catName}.`;
para2.textContent = `The cat's color is ${cat.color}.`;