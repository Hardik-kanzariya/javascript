// Q.1 WAP to implements Create singly Linked list, adding a new Elements, and Delete node from singly linked list (Without any pre-defined function)

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    appendData(val){
        let temp = new Node(val);
        
        if (this.head == null) {
            this.head = temp;
        }
        else{
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = temp;
        }

    }

    deleteData(value) {
        if (!this.head) return;
        
        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }
        
        let temp = this.head;
        while (temp.next && temp.next.data !== value) {
            temp = temp.next;
        }
        
        if (temp.next) {
            temp.next = temp.next.next;
        }
    }

    display(){

        let result = [];
        if (this.head == null) {
            console.log('List is Empty')
        }
        else{
            let current = this.head;
            while (current != null) {
                result.push(current.data)
                current = current.next
            }
            console.log(result.join(" -> "));
        }
    }
}

let obj = new SinglyLinkedList();
obj.appendData(10);
obj.appendData(20);
obj.appendData(30);
obj.display(); 

obj.deleteData(20);
obj.display(); 

// Expected out put:-
// Output: 10 -> 20 -> 30 
// Output: 10 -> 30 


// Q.2 WAP to implements Selection Sort using JavaScript DSA without any pre-defined function.

let SelectionData = [9, 8, 12, 11, 60, 19, 16, 75];

function SelectionSort(arr) {
    
        for(let i=0; i<arr.length; i++){
            for(let j= i+1; j<arr.length; j++){ 
                if (arr[i] > arr[j]) {
                    let tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }
        }
        return arr;
    }

console.log("Original Selection Sort =>",SelectionData)
console.log("Selection Sort Sorted =>", SelectionSort(SelectionData));

// Expected out put:-
// Original Selection Sort => (8) [9, 8, 12, 11, 60, 19, 16, 75]
// Selection Sort  Sorted => (8) [8, 9, 11, 12, 16, 19, 60, 75]



// Q.3 WAP to implements Stack using JavaScript without any functions?

class Stack {
    constructor() {
      this.items = [];
      this.top = -1; 
      this.size = 10; 
    }

    push(element) {
      if (this.top === this.size - 1) {
        console.log("Stack Overflow");
      } else {
        this.top++;
        this.items[this.top] = element;
      }
    }
  
   
    pop() {
      if (this.top < 0) {
        console.log("Stack Underflow");
        return undefined;
      } else {
        let poppedElement = this.items[this.top];
        this.top--;
        return poppedElement;
      }
    }
  
    
    display() {
      if (this.top < 0) {
        console.log("Stack is empty");
      } else {
        console.log("Stack elements are:");
        for (let i = 0; i <= this.top; i++) {
          console.log(this.items[i]);
        }
      }
    }
  }
  

  let stack = new Stack();
  

  stack.push(5);
  stack.push(15);
  stack.push(25);
  stack.display(); 
  

  console.log("Popped Element:", stack.pop());
  stack.display(); 

// Expected out put:-
// Stack elements are:
// 5
// 15
// 25
// Popped Element: 25
// Stack elements are:
// 5
// 15



// Q.4 WAP to implement binary Search using JavaScript with DSA?

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


// Q.5 WAP to implement Merge sort using JavaScript without any function?

let data = [9,10,45,63,89,78,52,30,15,51]

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
console.log('Original Merge sort =>',data);
console.log('Merge sort =>',MergeSort(data));

// Expected out put:-
// Original Merge sort => (10) [9, 10, 45, 63, 89, 78, 52, 30, 15, 51]
// Merge sort => (10) [9, 10, 15, 30, 45, 51, 52, 63, 78, 89]