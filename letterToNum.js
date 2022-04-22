const numToLetter  = (str) =>{
    const orderedNums = str
    .toLowerCase()
    .split("")
    .map ((value) =>{
return value.charCodeAt() - 96;
    })
    .join("");
    return orderedNums
};
console.log(numToLetter("b"));
console.log(numToLetter("zep"));
