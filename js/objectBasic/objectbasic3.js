const cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting() {
    `hello, said ${this.name} the ${this.breed}.`();
  },
};

const cat2 = {
  name: 'cow',
  breed: 'goat',
  color: 'black',
  greeting() {
    `hello, said ${this.name} the ${this.breed}.`();
  },
};

cat.greeting();
cat2.greeting();
