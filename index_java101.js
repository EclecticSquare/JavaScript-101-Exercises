// STEP ONE
//returns hello plus the name as a string
// function hello(name) {
//   return "hello " + name;
// };
//
// console.log(hello("bob"));


//STEP TWO
//returns hello world if no name is given
// function hello(name) {
//   if (name){
//   return "hello " + name;
//   }
//   else {
//   return "hello world";
//   }
// };
//
// console.log(hello('joe'));

//STEP THREE
// creates a phrase about the named person's favorite subject
// function madLib(name, subject) {
//   return name + "'s favorite subject in school is " + subject;
// };
//
// console.log(madLib("bob", "science"));

//STEP FOUR
//calculates tip based on rating of good, fair or bad
// function tipAmount (rating, num) {
//   if (rating === "good") {
//   return num * 0.20;
//   }
//   else if (rating === "fair") {
//     return num * 0.15;
//   }
//   else if ( rating === "bad") {
//     return num * 0.10;
//   };
// };
//
// console.log(tipAmount("bad", 100.10));

//STEP FIVE
//returns the total bill including the tip that has been calculated
// function totalAmount(rating, num) {
//   if (rating === "good") {
//     return (num * 0.20) + num;
//   }
//   else if (rating === "fair") {
//     return (num * 0.15) + num;
//   }
//   else if (rating === "bad") {
//     return (num * 0.10) + num;
//   };
// };
//
// console.log(totalAmount("good", 100.11));

//STEP SIX
//takes the total bill, including the tip and divides it amongst the number of people given
//
// function splitAmount(rating, num, people) {
//   if (rating === "good") {
//       return ((num * 0.20) + num) / people;
//     }
//     else if (rating === "fair") {
//       return ((num * 0.15) + num) / people;
//     }
//     else if (rating === "bad") {
//       return ((num * 0.10) + num) / people;
//     };
//   };
//
// console.log(splitAmount("bad", 100, 4));

//STEP SEVEN INCOMPLETE
//prints each number in the range given
//Note:  If you use a return inside a function, it stops your loop
// var number
// function printNumbers(startNum, endNum) {
//   for ( var i = startNum; i < endNum; i++) {
//     console.log(i);
//   };
// };
//
// console.log(printNumbers(1, 5));

    //STEP SEVEN PART TWO
// function printNumbers(startNum, endNum) {
//    var startNum = startNum += 1;
//   while ( startNum < endNum) {
//     conso "This is the number: " + startNum;
//
//   };
// };
// console.log(printNumbers(2, 5));

//STEP EIGHT INCOMPLETE
// // takes the size and makes a square of that width and height using asterisks
// function printSquare(size) {
//   return size * "*";
// }
//
// console.log(printSquare(3));
