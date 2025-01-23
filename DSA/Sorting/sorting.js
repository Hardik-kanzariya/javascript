// 1. Bubble sort

let BubbleData = [9,8,12,11,60,19,16,75];

function BubbleSort(arr){
    for(let i=0; i < arr.length; i++) // bubble te two element ne compare kar che  left > right
    {
        for(j=0; j < arr.length; j++)
        {
            if (arr[j] > arr[j+1]) {      
                let tmp = arr[j];         
                arr[j] = arr[j+1];        
                arr[j+1] = tmp;           
            }
        }
    }
    return arr;
}
console.log('Bubble sort =>',BubbleSort(BubbleData));




// 2.Selection sort
let SelectionData = [9,8,12,11,60,19,16,75];

function SelectionSort(arr) {
    
    for(let i=0; i<arr.length; i++){
        for(let j= i+1; j<arr.length; j++){ //i+1 0 index and index 1 ne compare kar che pa che je small ha che te left re che and right ma big value ave che  left > right i=0 j=1
            if (arr[i] > arr[j]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}
console.log('Selection sort =>',SelectionSort(SelectionData));



// 3.Merge sort
let data = [9,8,12,11,60,19,76,16]

function merge (left,right) {
    let result = [];
    let i=0,j=0;
    while( i<left.length  && j<right.length) {
        if (left[i] < right[j] ) {
            result.push(left[i]);
            i++;
        }else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i), right.slice(j));
}

function MergeSort (arr) {
    if (arr.length <=1 ) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    
    left = MergeSort(left);
    right = MergeSort(right);

    return merge (left , right);   
}
console.log('Merge sort =>',MergeSort(data));


// 4.Quick Sort

let QuickData = [9, 8, 12, 11, 60, 19, 16, 75];

function QuickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1]; // Choose the last element as the pivot
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elements smaller than the pivot
        } else {
            right.push(arr[i]); // Elements greater than or equal to the pivot
        }
    }

    // Recursively sort left and right arrays and combine
    return [...QuickSort(left), pivot, ...QuickSort(right)];
}

console.log('Quick sort =>', QuickSort(QuickData));
