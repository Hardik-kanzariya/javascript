// 1.write a function for factorial Number for given Number using recursion function

function factorial(n){
    if (n == 1) {
        return 1 ;
    }
    else{
        return n* factorial(n-1);
    }
} 
console.log("Factorial is :" ,factorial(5));
// Expected out-put:-120

// 2.write a function convert feat into meter
function meter(feet){
    let meterperfoot = 0.3048;
    return feet * meterperfoot;
}
console.log("The value of 40 feet in meter is:",meter(40));
// Expected out-put:- 12.192

// 3.write a function find sum of natural number  up to n (with argument with return type )
function sum(n) {
    if (n <= 0) {
      return 0; 
    } else {
      return n + sum(n - 1); 
    }
  }
  
  let n = 10;
  console.log("Sum of natural numbers up to " + n + " is: " + sum(n));
 //Expected out put :- = 55


// 4.write a function find maximum number of three number (argument passed)
function findLargest(num1, num2, num3) {
	if (num1 >= num2 && num1 >= num3) {
		return num1;
	} else if (num2 >= num1 && num2 >= num3) {
		return num2;
	} else {
		return num3;
	}
}
let largestNumber = findLargest(10, 5, 8);
console.log("Largest number:", largestNumber);
//Expected output:- 10

// 5.write a function find Average of number up to n.
function average(n){
    if(n<1){
        console.log(0);
        return;
    }
    let s = (n *(n+1))/2;
    let average = s / n;
    console.log(average);
}
average(10);
// Expected out-put:-5.5
