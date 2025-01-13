//1. Write a program for Reverse Link List

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class singleLinklist{
//     constructor(){
//         this.head = null;
//     }
//     appendData(val) {
//         let temp = new Node(val);
//          if(this.head == null){
//             this.head = temp;
//          }
//          else {
//             let current = this.head;
//             while(current.next != null){
//                 current = current.next
//             }
//             current.next = temp;
//          }
//     }
   
//     display() {
//         let result= [];
//         if(this.head == null){
//             console.log('list is empty');
//         }
//         else{
//              let current = this.head;
//              while(current != null){
//                 result.push(current.data)
//                 current = current.next
//              }
//         console.log(result.join('->'));
//         }
//         }

//         reverseLinkList(){
//             let current = this.head;
//             let previous = null, next = null;
//             while(current != null){
//                 next = current.next;
//                 current.next = previous;
//                 previous = current;
//                 current = next;
//             }
//             this.head = previous;
//         }
// }



// let obj = new singleLinklist();

// obj.appendData(0);
// obj.appendData(1);
// obj.appendData(2);
// obj.appendData(3);
// obj.appendData(4);
// obj.appendData(5);
// obj.display();
// obj.reverseLinkList();
// obj.display();

// Expected out put:-

// 0->1->2->3->4->5
// 5->4->3->2->1->0

//2. Write a Program for Given Link List is Palindrome or not

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//     }

//     appendData(value) {
//         const temp = new Node(value);
//         if (this.head === null) {
//             this.head = temp;
//             return;
//         }
//         let current = this.head;
//         while (current.next !== null) {
//             current = current.next;
//         }
//         current.next = temp;
//     }

//     isPalindrome() {
//         let dataArray = [];
//         let current = this.head;

//         while (current !== null) {
//             dataArray.push(current.data);
//             current = current.next;
//         }

//         let start = 0;
//         let end = dataArray.length - 1;
//         while (start < end) {
//             if (dataArray[start] !== dataArray[end]) {
//                 return false;
//             }
//             start++;
//             end--;
//         }
//         return true;
//     }

//     display() {
//         if (this.head === null) {
//             console.log("The linked list is empty.");
//             return;
//         }
//         let resultArray = [];
//         let current = this.head;
//         while (current !== null) {
//             resultArray.push(current.data);
//             current = current.next;
//         }
//         console.log("Linked List:", resultArray.join(" -> "));
//     }
// }

// let linkedList = new SinglyLinkedList();

// linkedList.appendData(10);
// linkedList.appendData(20);
// linkedList.appendData(30);
// linkedList.appendData(40);
// linkedList.appendData(50);
// linkedList.appendData(40);
// linkedList.appendData(30);
// linkedList.appendData(20);
// linkedList.appendData(10);

// linkedList.display();

// console.log("Is Palindrome:", linkedList.isPalindrome());

// Expected out put:-
// Linked List: 10 -> 20 -> 30 -> 40 -> 50 -> 40 -> 30 -> 20 -> 10
// Is Palindrome: true


//3. Write a Program for Removing Link list Element at any Position.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SingleLinkList {
    constructor() {
        this.head = null;
    }

    appendData(val) {
        let temp = new Node(val);
        if (this.head == null) {
            this.head = temp;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = temp;
        }
    }

    removeData(position) {
        if (this.head == null) {
            console.log("List is already empty...");
            return;
        }

        if (position <= 0) {
            console.log("Invalid position. Use a positive integer.");
            return;
        }

        let current = this.head;
        let prev = null;
        let count = 1;

        if (position === 1) {
            console.log(`Removing Data: ${current.data}`);
            this.head = this.head.next;
            this.display(); 
            return;
        }

        while (current != null && count < position) {
            prev = current;
            current = current.next;
            count++;
        }

        if (current == null) {
            console.log("Position is out of bounds.");
        } else {
            console.log(`Removing Data: ${current.data}`);
            prev.next = current.next;
            this.display(); 
        }
    }

    display() {
        let result = [];
        if (this.head == null) {
            console.log("List is Empty");
        } else {
            let current = this.head;
            while (current != null) {
                result.push(current.data);
                current = current.next;
            }
            console.log("Updated List: ", result.join(" -> "));
        }
    }
}

let obj = new SingleLinkList();

obj.appendData(10);
obj.appendData(20);
obj.appendData(30);
obj.appendData(40);
obj.appendData(50);
obj.appendData(60);
obj.appendData(70);
obj.appendData(80);

console.log("Original List:");
obj.display();

console.log("Removing Data from the list:");
obj.removeData(8); 
obj.removeData(3); 
obj.removeData(1); 

// expected output:-

// Original List:
// Updated List:  10 -> 20 -> 30 -> 40 -> 50 -> 60 -> 70 -> 80
// Removing Data from the list:
// Removing Data: 80
// Updated List:  10 -> 20 -> 30 -> 40 -> 50 -> 60 -> 70
// Removing Data: 30
// Updated List:  10 -> 20 -> 40 -> 50 -> 60 -> 70
// Removing Data: 10
// Updated List:  20 -> 40 -> 50 -> 60 -> 70
