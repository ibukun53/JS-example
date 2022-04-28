const turnToEvenNumber = (num) => {
  const evennum = (num % 2 === 0);
  if (evennum === true) {
    return num;
  }
  const oddnum = (num % 2 !== 0);
  if (oddnum === true) {
    return num * 2;
  }
  return num;
};
turnToEvenNumber(10);
turnToEvenNumber(7);