// Array Project

// 1.Given an array number = [3, 7, 10, 15, 21, 28, 33], use the filter() method to create a new array containing only the numbers greater than 15. Write the code and output.

let array = [3, 7, 10, 15, 21, 28, 33];
let greater = array.filter((value) => {
    return value > 15;
});
// console.log(greater);

//Expected out put :-  21,28,33

// 2. Write a JavaScript program that multiplies each number in the array num = [2, 4, 6, 8] by 3 using the map() method. Write the code and output.

let num = [2, 4, 6, 8];
let multiplies = num.map((value) =>{
    return value * 3;
});
// console.log(multiplies);

//Expected out put :- 6, 12, 18, 24 

// 3.Using the array fruits = ["apple", "banana", "grape", "mango"], write the JavaScript code to:
// a) Add "orange" to the array using push(). Write the code and output.
// b) Remove the last element using pop(). Write the code and output.

// let fruits = ["apple", "banana", "grape", "mango"];
// fruits.push('orange');
// console.log(fruits);

//Expected out put :-'apple', 'banana', 'grape'

// fruits.pop();
// console.log(fruits);

//Expected out put :-'apple', 'banana', 'grape', 'mango', 'orange'

// 4.Given the string message = "    JavaScript is Awesome!    ", use the trim() method to remove extra spaces from the beginning and end of the string and also calculate the length of the string. Write the code and output.


// let message =  "     JavaScript is Awesome!     " ;
// console.log(message);
// console.log(message.length);
// console.log(message.trim());
// console.log(message.trim().length );

//Expected out put :- JavaScript is Awesome!

// 5.Convert the string str = "hello, world!" into uppercase using the toUpperCase() method. Write the code and output.

// let str = "hello, world!";
// console.log(str.toUpperCase());

//Expected out put :- HELLO, WORLD!

// 6.Use the slice() method to extract the word "JavaScript" from the string text = "I am learning JavaScript now!" Write the code and output.

// let text = "I am learning JavaScript now!";
// console.log(text.slice(14,24));

//Expected out put :- JavaScript

// 7. 
// a) Use Math.ceil() to round up the number 5.3 to the nearest integer.
// b) Use Math.floor() to round down the number 7.9 to the nearest integer.
// Write the code and output.

// a) Use Math.ceil() to round up the number 5.3 to the nearest integer.
// console.log(Math.ceil(5.3)); 

//Expected out put :- 6

// b) Use Math.floor() to round down the number 7.9 to the nearest integer.
// console.log(Math.floor(7.9)); 

//Expected out put :- 7

// 8.Write a JavaScript function that generates a random number between 0 and 50 using Math.random(). Write the code and output.

// console.log(Math.floor(Math.random() * 50));

//Expected out put :-  3 25 46 48 26 27 16 5 38 30 19 40

// 9.Write a JavaScript program that retrieves the current date print out and returns the year using the getFullYear() method. Write the code and output.

// let y = new Date();
// console.log("Current Date:",y);

//Expected out put :- Current Date: Fri Oct 25 2024 13:44:02 GMT+0530 (India Standard Time)

// let year = y.getFullYear();
// console.log("Year:", year);

//Expected out put :- 2024

// 10.Given let date = new Date("2024-01-01"), use the setFullYear() method to change the year to 2026. Write the code and output.

let date = new Date("2024-01-01");
console.log('old Date ===> ',date);

//Expected out put :- old Date ===>  Mon Jan 01 2024 05:30:00 GMT+0530 (India Standard Time)

date.setFullYear(2026);
console.log('Changed Date ===> ',date);

//Expected out put :- Changed Date ===>  Thu Jan 01 2026 05:30:00 GMT+0530 (India Standard Time)