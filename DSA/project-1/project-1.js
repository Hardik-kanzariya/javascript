// 1.Write a JavaScript Function to Descending Order data converting using Bubble sort.

let BubbleData = [9, 8, 12, 11, 60, 19, 76, 16];

function bubbleDescending(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log('Bubble Sort Descending =>', bubbleDescending(BubbleData));

// Experted Out-Put:-
// Bubble Sort Descending => (8) [76, 60, 19, 16, 12, 11, 9, 8]

// 2.Write a JavaScript Function to Ascending Order data converting using Merge sort.

let MergeData = [9, 10, 74, 58, 63, 25, 50];

function mergeAscending(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i), right.slice(j));
}

function MergeSort(arr) {
    if (arr.length <= 1) {
        return arr; 
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);


    left = MergeSort(left);
    right = MergeSort(right);

    return mergeAscending(left, right);
}

console.log('Merge Sort Ascending =>', MergeSort(MergeData));

// Experted Out-Put:-
// Merge Sort Ascending => (7) [9, 10, 25, 50, 58, 63, 74]


// 3.Write a JavaScript Program 2-D array print and also print its's square of every element.

let Matrix = [
    [2, 8, 6],
    [8, 10, 12],
    [13, 18, 20]
];

function squareMatrix(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        let row = [];
        for (let j = 0; j < matrix[i].length; j++) {
            row.push(matrix[i][j] * matrix[i][j]);
        }
        result.push(row);
    }
    return result;
}

let squaredMatrix = squareMatrix(Matrix);
console.log("Matrix:",Matrix);
console.log("Square Matrix:",squaredMatrix);

// Experted Out-Put:-

// Matrix: (3) [Array(3), Array(3), Array(3)]
// 0: (3) [2, 8, 6]
// 1: (3) [8, 10, 12]
// 2: (3) [13, 18, 20]

// Square Matrix: (3) [Array(3), Array(3), Array(3)]
// 0: (3) [4, 64, 36]
// 1: (3) [64, 100, 144]
// 2: (3) [169, 324, 400]
