/* clicking the button to print the current page */
function print_page() {
    window.print();
}


 /* the sum of two given integer */
function Sum(x, y)
{
    const sum_nums = x + y;
    if (sum_nums >= 50 && sum_nums <= 80){
    return 65;
}
  return 80;  
}
console.log(Sum(30,20));
console.log(Sum(90,80));



/* the sum of laptop in an office */
function monitorCount(rows, columns) {
    return rows * columns;
  }
  const numOfMonitors = monitorCount(5, 4);
  console.log(numOfMonitors);


 /* numbers which appears most in a given array*/
  function number(arr) {
    var digit = [],
      ans = 0;
  for(var i = 0; i < 10; i++) {
      digit.push(0);
    }
    for(var i = 0; i < arr.length; i++) {
      digit[arr[i] - 1]++;
      if(digit[arr[i] - 1] > digit[ans]) {
        ans = arr[i] - 1;
      }
    }
    return ans + 1;  
  }
  console.log(number([1, 3, 3, 2, 3, 8, 1, 9]))


 

   /* capitalising word*/
   function capital(txt) {
       var word= "";
       for(var i = 0; i < txt.length; i++) {
           if(/[A-Z]/.test(txt[i])) word +=txt[i].toLowerCase();
           else word += txt[i].toUpperCase();
          }
return word;
   }
   console.log(capital("massive"));



     /* difference between a given number and 13, if the number is greater than 13 return double the absolute difference. */
     function difference(n)
 {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
 }
console.log(difference(32));
console.log(difference(11));

/*summtion of fractions */
function Sum(a, b)
{
  const sum_nums = a + b;
  if(a += b)
  return sum_nums ;
}

console.log(Sum_Number(3, 20));



/*ASSIGNMENT */

/*summition of numbers */
function  sum(a, b){
  let sum = 0;
 for (let i = 1; i <= sum; i++){
  sum += i;
 }
return  a + b;
}
console.log(sum(3, 2)); 



/*multiplication of numbers */
let a = 5;
   let b = 3;

const multiply = a*b;
 console.log(3*2);
