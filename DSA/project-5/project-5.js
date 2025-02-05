// 1. Write a program for Circular Queue.

class RingBuffer {
    constructor(size) {
        this.size = size;
        this.items = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }

    isEmpty() {
        return this.front === -1;
    }

    enqueue(element) {
        if (this.isFull()) {
            console.log("Queue is full, cannot enqueue.");
            return;
        }
        if (this.isEmpty()) {
            this.front = this.rear = 0;
        } else {
            this.rear = (this.rear + 1) % this.size;
        }
        this.items[this.rear] = element;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty, cannot dequeue.");
            return null;
        }
        let dequeuedElement = this.items[this.front];
        if (this.front === this.rear) {
            this.front = this.rear = -1; // Queue becomes empty
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return dequeuedElement;
    }

    frontElement() {
        return this.isEmpty() ? "Queue is empty" : this.items[this.front];
    }

    currentSize() {
        if (this.isEmpty()) return 0;
        return (this.rear >= this.front) ? 
            (this.rear - this.front + 1) : 
            (this.size - this.front + this.rear + 1);
    }

    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return;
        }
        let result = [];
        let i = this.front;
        while (true) {
            result.push(this.items[i]);
            if (i === this.rear) break;
            i = (i + 1) % this.size;
        }
        console.log(result.join(" -> "));
    }
}

const queue = new RingBuffer(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.printQueue();  

console.log("Dequeued:", queue.dequeue()); 
queue.enqueue(60);
queue.printQueue();  

console.log("Front Element:", queue.frontElement());
console.log("Queue Size:", queue.currentSize());  

// Expected Output: 
// Output: 10 -> 20 -> 30 -> 40 -> 50
// Output: Dequeued: 10
// Output: 20 -> 30 -> 40 -> 50 -> 60
// Output: Front Element: 20
// Output: Queue Size: 5


// 2. write a program Queue using two stacks.

// class QueueStacks {
//     constructor() {
//         this.stack1 = [];
//         this.stack2 = [];
//     }

//     enqueue(element) {
//         this.stack1.push(element);
//     }

//     dequeue() {
//         if (this.stack1.length === 0 && this.stack2.length === 0) {
//             console.log("Queue is empty! Cannot dequeue.");
//             return null;
//         }

//         if (this.stack2.length === 0) {
//             while (this.stack1.length > 0) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }

//         return this.stack2.pop();
//     }

//     front() {
//         if (this.stack1.length === 0 && this.stack2.length === 0) {
//             return "Queue is empty!";
//         }

//         if (this.stack2.length === 0) {
//             while (this.stack1.length > 0) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }

//         return this.stack2[this.stack2.length - 1];
//     }

//     isEmpty() {
//         return this.stack1.length === 0 && this.stack2.length === 0;
//     }

//     size() {
//         return this.stack1.length + this.stack2.length;
//     }

//     printQueue() {
//         let output = [...this.stack2.reverse(), ...this.stack1];
//         console.log("Queue:", output.join(" -> "));
//     }
// }

// const queue = new QueueStacks();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// queue.enqueue(60);
// queue.enqueue(70);
// queue.printQueue();  

// console.log("Front Element:", queue.front());  
// console.log("Dequeued:", queue.dequeue());  
// console.log("New Front Element:", queue.front());  
// console.log("Queue Size:", queue.size());  
// console.log("Is Queue Empty?", queue.isEmpty());  

// queue.printQueue(); 

// Expected Output: 
// Queue: 10 -> 20 -> 30 -> 40 -> 50 -> 60 -> 70 
// Front Element: 10
// Dequeued: 10
// New Front Element: 20
// Queue Size: 6
// Is Queue Empty? false
// Queue: 20 -> 30 -> 40 -> 50 -> 60 -> 70


// 3. write a program check first string swap can make strings equal. (leetcode question no 1790)

function stringSwap(s1, s2) {
    if (s1 === s2) return true; 

    let diff = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diff.push(i);
            if (diff.length > 2) return false; 
        }
    }

    if (diff.length !== 2) return false; 

    const [i, j] = diff;
    return s1[i] === s2[j] && s1[j] === s2[i];
}

// Example usage:
console.log(stringSwap("bank", "kanb")); 
console.log(stringSwap("attack", "defend")); 
console.log(stringSwap("abcd", "abdc")); 
console.log(stringSwap("abcd", "abcd")); 

// Expected Output: 
// true
// false
// true
// true