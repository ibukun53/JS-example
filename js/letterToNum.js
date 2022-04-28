const numToLetter = str => {
  const orderedNums = str
    .toLowerCase()
    .split('')
    .map(value => value.charCodeAt() - 96)
    .join('');
  return orderedNums;
};

numToLetter('b');
numToLetter('zep');
