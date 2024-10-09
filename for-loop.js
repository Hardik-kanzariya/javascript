 // Practice Program List:
// 1. Print out 10 to 
let i;
for(i=10; i>=1; i-- ){
    console.log(i);
}

// 2. Print out 51 to 99

let j;
for(j=51; j<=99; j++ ){
    console.log(j);
}

// 3. Enter n  and print out 1 to n

let number = Number(prompt('Enter number: '));
console.log(typeof number)

for (let k=1 ; k<=number; k++) {
    console.log(k);
}

// 4. Enter n and print out n to 1

for (let a=number ; a>=1; a--) {
    console.log(a);
}

// 5. Enter n and print out -n to n

for(let h=-number; h<=number; h++){
    console.log(h);
}

// 6. Enter n and print out odd no. up to n

for (let b=1; b<=number; b+=2) {
    console.log(b);
}

// 7. Enter n and print out even no. up to n

for(let q=1; q<=number; q++){
    if (q % 2==0) {
        console.log(q);
    }
}