// Array operations (inserting, Deleting, Updating)
// Linear search
// Modifying array elements ( for, forEach, for in, for of,map )
// Concatenating arrays (concat, spread, Operator)

// Array insert => push, unshift
// Array Deleting => pop, shift, splice

// let arr = [11,22,33,44,55];
// console.log(arr);

// let data = [100,200,300]
// let res = [...data,...arr] /* spread Operator */
// console.log(res);

// concat Method 
// console.log(arr.concat([100,200,300],['Hello','Guys']));

// arr.length = arr.length-1;
// arr.length = arr.length-1; /* array ma last ma -1 atle last index delete thy jay che last ni index delete thy che */

// arr.push(100);
// arr[arr.length] = 100 /* push method  */
// arr[arr.length] = 200
// arr[arr.length] = 300  
// console.log(arr);

// for(let i=arr.length; i>0; i--){
//     arr[i] = arr[i-1]
//     console.log(arr[i]);
// }

// Linear Search

// function LinearSearch(arr,target){

//     for(let i=0; i<arr.length; i++){
//         if (arr[i] == target) {
//             return i  //return index
//         }
//     }
//     return -1;
// }



// let data = [11,25,45,78,96,32,56,35,24,78,98,75,65,84];
// let searchEle = 84;

// let result = LinearSearch(data,searchEle);

// if (result != -1) {
//     console.log(`Element is Found at ${result} index.`);
// }else{
//     console.log('Element is not found....');
// }



// Day-2 

// array Minimum /  Maximum number Find

// document.getElementById('SearchBtn').addEventListener('click', () => {
//     const searchValue = document.getElementById('SearchEle').value;
//     // console.log("Search input value:", searchValue);
// document.createElement('h3').innerHTML = 'Hello world'
    
// });
// searchValue = "";

let data = [11,25,45,78,96,32,56,35,24,78,98,75,65,84];
let temp = data[0];
for(let i=0; i<data.length; i++){
    if(data[i] > temp){
        temp = data[i]
    }
}
console.log("Maximum",temp);
// console.log("Max number ==>",Math.max(...data));
console.log("Min number ==>",Math.min(...data));


// Array total ele sum

let sum=0;
for(let i=0; i<data.length; i++){
    sum = sum+data[i]
}

console.log("sum is ",sum);
// console.log("sum is ",data.reduce((acc, ele) => acc + ele, 0));