const cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting() {
    `Hello, said ${this.name} the ${this.breed}.`();
  },
};

const cat2 = {
  name: 'Elfie',
  breed: 'Aphrodite Giant',
  color: 'ginger',
  greeting() {
    `Hello, said ${this.name} the ${this.breed}.`();
  },
};

cat.greeting();
cat2.greeting();

function createCat(name, breed, color) {
  const obj = {};
  obj.name = name;
  obj.breed = breed;
  obj.color = color;
  obj.greeting = function greeting() {
    `Hello, said ${this.name} the ${this.breed}.`();
  };
  return obj;
}
createCat();
