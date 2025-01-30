// 1. Write a program for Stack Operation Program (Insert, Delete, isEmpty, Length) 

class Stack {
    constructor() {
        this.items = []; 
    }

    push(element) {
        this.items.push(element);
        console.log(`${element} pushed into stack`);
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow! No elements to pop.");
            return null;
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    length() {
        return this.items.length;
    }

    printStack() {
        console.log("Stack:", this.items.join(" -> "));
    }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);
stack.printStack();


console.log("Popped Element:", stack.pop()); 

stack.printStack();

console.log("Is Stack Empty?", stack.isEmpty()); 

console.log("Stack Length:", stack.length()); 


// Expected Output: 
// 100 pushed into stack
// 200 pushed into stack
// 300 pushed into stack
// Stack: 100 -> 200 -> 300
// Popped Element: 300
// Stack: 100 -> 200
// Is Stack Empty? false
// Stack Length: 2

// 2. Write a program for Next Greater Element using Stack.
function nextGreaterElements(arr) {
let stack = [];
let result = new Array(arr.length).fill(-1); 

for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop(); 
    }
    
    if (stack.length > 0) {
        result[i] = stack[stack.length - 1];
    }
    
    stack.push(arr[i]); 
}

return result;
}

const arr = [16 , 8 , 8 , 7 , 12 , 29];
console.log(nextGreaterElements(arr));

// Expected Output: [29, 12, 12, 12, 29, -1]


// 3. Write a program for a reverse string using Stack. 

function reverseString(input) {
    let stack = [];
    let reversedString = "";
    
    for (let char of input) {
        stack.push(char);
    }
    
    while (stack.length > 0) {
        reversedString += stack.pop();
    }
    
    return reversedString;
}

let str = "Hello";
console.log("Original String:", str);
console.log("Reversed String:", reverseString(str));

// Expected Output: 
// Original String: Hello
// Reversed String: olleH