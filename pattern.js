// Practice Program List:

// 1
// 1 2 
// 1 2 3 
// 1 2 3 4
// 1 2 3 4 5


for(let i = 1; i <= 5; i++){
    let data="";
    for(let j = 1; j <=i; j++){
        data +=j + " ";
    }
    console.log(data);
}



// 2.
// 5
// 5 4 
// 5 4 3
// 5 4 3 2 
// 5 4 3 2 1

for(let i=5; i>=1; i--){
    let data="";
    for(let j=5; j>=i; j--){
        data +=j + " ";
    }
    console.log(data);
}


// 3.
// 5 
// 4 4 
// 3 3 3 
// 2 2 2 2 
// 1 1 1 1 1

for(let i=5; i>=1; i--){
    let data="";
    for(let j=5; j>=i; j--){
        data+= i +" ";
    }
    console.log(data);
}

// 4.

// 5
// 4 5 
// 3 4 5 
// 2 3 4 5
// 1 2 3 4 5

for(let i=5; i>=1; i--){
    let data="";
    for(let j=i; j<=5; j++){
        data+= j +" ";
    }
    console.log(data);
}


// 5

// 1
// 2 3 
// 4 5 6
// 7 8 9 10 
// 11 12 13 14 15

let k=1;
for(let i=1; i<=5; i++){
    let data ="";
    for(let j=1; j<=i;j++){
        data+= k +" ";
        k++;
    }
    console.log(data);
}

// 6

// 1 
// 0 1 
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1

let numb=1;
 for(let i=1; i<=5;i++){
     let data='';
     for(let j=1;j<=i;j++){
        if (numb%2===0) {
            data += 0 + " ";
        }
        else{
            data += 1 + " ";
        }
        numb++;
}
console.log(data);
 }


//  Armstrong number or not [=> 153  => 1^3 + 5^3 + 3^3 === 153]


let num = Number(prompt('Enter Number: '));
let sum = 0;
let rem;
let a = num;
while(num>0){
    rem = num % 10;
    sum += (rem * rem * rem);
    num = Math.floor(num/10);
}
if(sum === a){
    console.log("Number is Armstrong Number");
}
else
console.log("Number is not Armstrong Number");


// perfect number (e.g 6) 6 => 1 2 3 (1 + 2 + 3 === 6) (all divisor sum)


for (let i = 1; i <=5; i++){
    let pattern="";
    for (let j = i; j >=1; j--) {
       pattern+=j+" ";
    }
    console.log(pattern);
}

// out-put:-
// 1
// 2 1
// 3 2 1 
// 4 3 2 1 
// 5 4 3 2 1