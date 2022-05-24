const numbers = [1, 2, 3, 4, 5];
const multiples = numbers.map(number => number * 7);

multiples();

// array of string
const str = ['a', 'b', 'c'];

const word = str => str.map(e => `${e}bless`);

// eslint-disable-next-line no-console
console.log(word(str));

// array of strings

const language = ['html', 'css', 'javascript'];

const newlang = language => language.map(e => `<li>${e}</li>`);

// eslint-disable-next-line no-console
console.log(newlang(language));
