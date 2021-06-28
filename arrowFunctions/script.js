// function double(arr) {
   // return arr.map(function (val) {
     //   return val * 2;
   // });
// }

const double = (arr) => arr.map((val) => val * 2);

const squares = (numbers) => numbers.map((num) => num ** 2);
const evens = (squares) => squares.filter((square) => square % 2 === 0);