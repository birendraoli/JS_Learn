let score = 33
// console.log(score);   // 33
// console.log(typeof score);   //To check datatype of given value =  Result is number
// console.log(typeof(score));  //To check datatype of given value/both are same = Result is number

let score1 = "33"
// console.log(score1);    //  33
// console.log(typeof score1);   //  Result is String

let valueInNumber = Number(score1);   // This is methode to convert any datatype to number datatype
// console.log(valueInNumber);    // 33
// console.log(typeof valueInNumber);   // This is converted to number




/*
Conversion Of any datatype to Number and Results

"33" => 33
"33abc" => NaN
true => 1
false => 0

*/


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)  // To convert to boolean
// console.log(booleanIsLoggedIn);   // Tesult is true -----  1 is converted to boolean value true
// console.log(typeof booleanIsLoggedIn);   // datatype is boolean now


/*
1 => true
0 => false
"" => false
"abc" => true
*/

let anyNumber = 55;

let anyString = String(anyNumber);  // To convert to String
// console.log(typeof anyString);  // Result is string



// ************************Operations*****************************


let value = 5
let negValue = -value
// console.log(negValue); //Result -5
// console.log(3 + 3);
// console.log(3 - 3);
// console.log(3 * 3);
// console.log(3 ** 3);  // To calculate power ** is used  result 27
// console.log(3 / 3);
// console.log(3 % 3);


// Examples
// console.log("3" + 2);  // Result = 32
// console.log(3 + "2");  // Result = 32
// console.log("3" + 3 +2);  // Result = 332
// console.log(3 + 3 + "2");  // Result = 62

let gameCounter = 100
gameCounter++;    // This is increment operation
console.log(gameCounter);