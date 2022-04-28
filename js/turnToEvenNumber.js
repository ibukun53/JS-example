// eslint-disable-next-line consistent-return
const turnToEvenNumber = (num) => {
  const oddnum = (num % 2 !== 0);
  {
    if (oddnum === true) {
      return (num * 2);
    }
    const evennum = (num % 2 === 0);
    if (evennum === true) {
      return (num);
    }
  }
};
turnToEvenNumber(10);
turnToEvenNumber(7);
