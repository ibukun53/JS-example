/* eslint-disable no-console */
const cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting() {
    console.log(`hello, said ${cat.name} the ${cat.breed}.`);
  },
};

const cat2 = {
  name: 'cow',
  breed: 'goat',
  color: 'black',
  greeting() {
    console.log(`hello, said ${this.name} the ${this.breed}.`);
  },
};

cat.greeting();
cat2.greeting();
