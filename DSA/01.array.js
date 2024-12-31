// Array operations (inserting, Deleting, Updating)
// Linear search
// Modifying array elements ( for, forEach, for in, for of,map )
// Concatenating arrays (concat, spread, Operator)

// Array insert => push, unshift
// Array Deleting => pop, shift, splice

let arr = [11,22,33,44,55];
console.log(arr);

// let data = [100,200,300]
// let res = [...data,...arr] /* spread Operator */
// console.log(res);

// concat Method 
// console.log(arr.concat([100,200,300],['Hello','Guys']));

// arr.length = arr.length-1;
// arr.length = arr.length-1; /* array ma last ma -1 atle last index delet thy jay che  */

arr.push(100);
// arr[arr.length] = 100 /* push method  */
arr[arr.length] = 200
arr[arr.length] = 300
console.log(arr);

for(let i=arr.length; i>0; i--){
    arr[i] = arr[i-1]
    console.log(arr[i]);
}

// Linear Search

function LinearSearch(arr,target){

    for(let i=0; i<arr.length; i++){
        if (arr[i] == target) {
            return i  //return index
        }
    }
    return -1;
}



let data = [11,25,45,78,96,32,56,35,24,78,98,75,65,84];
let searchEle = 84;

let result = LinearSearch(data,searchEle);

if (result != -1) {
    console.log(`Element is Found at ${result} index.`);
}else{
    console.log('Element is not found....');
}