// Practice Program List:

// 1.print out series 1,4,9,16...
// let number = Number(prompt('Enter number: '));
// console.log(typeof number)

// for (let i=1 ; i<=number; i++) {
//     console.log(i*i);
// }

// 2.print out series 1,4,3,16,5...

// let p=1;
// while (p<=number) {
//     console.log(p*p);
// }

// for(let p=1; p<=number; p++){
//     console.log(p*p);
// }

// 3.Print out series 1,2,4,8,16,...,n

// for(let q=1; q<=number; q++){
//     console.log(q*2);
// }


// 4.Print out series 1,4,12,32,80,...,n
// let m=1;
// for(let l=1; l<=5; l++){
//     console.log(m*l);
//     m*=2;
// }
// out-put:- 1,4,12,32,80...


// 5.Find the sum of numbers from 1 to 100

// 6.Find the factorial of a given number

// let i=1;
// let fac=1;
// do{
//     fac=fac*i;
//     i++;
// }while(i<=number);
// console.log('Factorial =',fac);


// 7.Program to Print Fibonacci Series up to n

let n = 100; 
let a = 0, b = 1, nextTerm;

for (let a = 1; a <= n; a++) {
    console.log(a);
    next = a + b;
    a = b;
    b = next;
}
console.log("Fibonacci Series:");

// 8.Program to Find the Sum of Digits of a Number


// let x=1;
// do {
//     console.log(x);
//     x+=2;
// } while (x<=15);



// let date = new Date("2025-10-30 10:10:10:");
let date = new Date();
console.log(date);
date.setFullYear(2025);
console.log(date.getDate());
console.log(date.getMilliseconds());