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
function totalAmount(rating, num) {
  if (rating === "good") {
    return (num * 0.20) + num;
  }
  else if (rating === "fair") {
    return (num * 0.15) + num;
  }
  else if (rating === "bad") {
    return (num * 0.10) + num;
  };
};

console.log(totalAmount("good", 100.11));
