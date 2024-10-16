// 1. print out series 1, 4, 3, 16, ...

let number = Number(prompt('Enter number: '));
console.log(typeof number)

let i=1;

while(i<=number){
    if (i%2==1) {
        console.log(i);
    }
    else{
        console.log(i*i);
    }
    i++;
}
// out-put:- 1,4,3,16,5,36,7,64,9,100....

// 2. Enter n and print out -n to n

for(let i=-number; i<=number; i++){
    console.log(i);
}
// out-put:- -10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10....

// 3. Enter number and print out total of even number up to number

let sum = 0;
for (let i=2; i<=number; i+=2){
    console.log(i);
    sum+=i;
}
console.log("The sum of even number up to " + number + " is: " + sum);

// out-put:-The sum of even number up to 5 is: 6

// 4. pattern
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

// out-put:-
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// 5. pattern
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

// out-put:-
// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5