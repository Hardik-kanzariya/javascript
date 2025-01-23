// 1. Write a program to implement binary search to find the index of a target element in a sorted array. (3 marks)

let Data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
let SearchElement = 30;

function binarySearch(arr, searchEle) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === searchEle) {
            return mid;
        } else if (arr[mid] < searchEle) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

let res = binarySearch(Data, SearchElement);
if (res !== -1) {
    console.log(`Element is Found at ${res} index`);
} else {
    console.log('Element is not Found...');
}

// Expected out put:-
// Element is Found at 2 index


// 2.write a program to find the first and last occurrence of a target element using the lower and upper bound methods. also return the count of occurrences. (4 marks)

let sortedArray = [2, 4, 4, 4, 7, 8, 10];
let target = 8;

function lowerBound(array, target) {
    let left = 0;
    let right = array.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            result = mid;
            right = mid - 1;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

function upperBound(array, target) {
    let left = 0;
    let right = array.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            result = mid; 
            left = mid + 1; 
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}
function findOccurrences(array, target) {
    let firstIndex = lowerBound(array, target);
    let lastIndex = upperBound(array, target);

    if (firstIndex === -1 || lastIndex === -1) {
        return {
            firstIndex: -1,
            lastIndex: -1,
            count: 0,
        };
    }

    let count = lastIndex - firstIndex + 1;

    return {
        firstIndex,
        lastIndex,
        count,
    };
}

let result = findOccurrences(sortedArray, target);
console.log(`First Occurrence: ${result.firstIndex}`);
console.log(`Last Occurrence: ${result.lastIndex}`);
console.log(`Count of Occurrences: ${result.count}`);

// Expected out put:-
// First Occurrence: 1
// Last Occurrence: 3
// Count of Occurrences: 3


// 3.Write a program to find the pivot index where the rotation occurs in a rotated sorted array. (3 marks)

let rotatedArray = [4, 5, 6, 7, 0, 1, 2];

function findPivotIndex(array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid] > array[right]) {
            left = mid + 1; 
        } else {
            right = mid; 
        }
    }

    return left;
}


let pivotIndex = findPivotIndex(rotatedArray);

console.log(`Input Array: ${rotatedArray}`);
console.log(`Pivot Index: ${pivotIndex}`);
console.log(`Pivot Element: ${rotatedArray[pivotIndex]}`);

// Expected out put:-
// Input Array: 4,5,6,7,0,1,2
// Pivot Index: 4
// Pivot Element: 0