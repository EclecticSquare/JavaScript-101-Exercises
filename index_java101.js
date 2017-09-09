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

//STEP SEVEN
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
    //Note:  If you use return inside a function it stops the loop
// function printNumbers(startNum, endNum) {
//    var startNum = startNum++;
//   while ( startNum <= endNum) {
//     console.log(startNum);
//     startNum++;
//
//   };
// };
// console.log(printNumbers(2, 5));

//STEP EIGHT
// takes the size and makes a square of that width and height using asterisks
// function printSquare(size) {
//   var star = "*";
// for (var i = 0; i < size; i++){
//   console.log(star.repeat(size));
// };
// };
//
// console.log(printSquare(3));

//STEP NINE
//makes a square using given size but is empty in the middle
//
// function printBox(width, height) {
//   var star = "*";
//   var space = " "
//   console.log(star.repeat(width));
//   for (var i =0; i < height - 2; i++)
//   console.log("*" + (space.repeat(width - 2)) + "*");
//
//   console.log(star.repeat(width));
// };
//
// console.log(printBox(10, 4));

//STEP TEN
//prints a banner of stars around the text given
// var banText = prompt("Enter a sentence. ");
// function printBanner(string) {
//     var star = "*";
//     console.log(star.repeat(banText.length + 4));
//     console.log("* " + banText + " *");
//     console.log(star.repeat(banText.length + 4));
//   //};
// };
//
// console.log(printBanner(banText));

//STEP ELEVEN
//returns an array of the factors of a given number

var newArray = [];
function factors(num) {
  for (i = 0; i < num + 1; i++) { //used to iterate through all numbers in num
    if (num % i === 0) {  //checks to see if the number is a factor of num by checking for a remainder of 0
      newArray.push(i);  // adds any number that gives a 0 remainder to the array
      console.log(newArray);
    }
  }
}

console.log(factors(15));


// //CAESAR CIPHER
// // creates a coded alphabet where another letter is represented by another random letter
// //Note: In javascript you can treat strings like arrays
// //to decrypt this code just do the opposite of line 157, you would add the offset
// function cc(message, offset) {
//   var alphabet = "abcdefghijklmnopqrstuvwxyz";
//   var output = " ";
//
//   for (var i = 0; i < message.length; i++) {
//     var letter = message[i];
//
//     var position = alphabet.indexOf(letter); // position is an integer
//
//     var newPosition = position - offset; // newPosition is a number
//
//     if (newPosition < 0) {
//       newPosition += 26;
//     }
//
//     var newLetter = alphabet[newPosition];
//
//     output += newLetter;
// }
//   console.log(output);
// }
// cc("tina", 2);


//POSITIVE NUMBERS
//returns new array with just the postive numbers
//
// var newArray = []; // put new array here because it needs to exist before we need it
// function postiveNumbers(array) {
//   for (var i = 0; i < array.length; i++) {
//     var number = array[i];
//     if (number > 0) {
//         newArray.push(number);
//     }
//   }
//   return newArray;
// }
//
// console.log(postiveNumbers([2, 4, -3, -1]));
