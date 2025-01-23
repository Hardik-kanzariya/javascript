// Check if linked list is palindrome left to right

// class Node{
//     constructor(data){
//         this.head = data;
//         this.next = null;
//     }
// }

// class singleLinkList{
//     constructor(){
//         this.head = null;
//     }

//     appendData(val){
//         let temp = new Node(val);

//         if (this.head != null) {
//             this.head = temp;
//         }
//         else{
//             let current = this.head;
//             while (current.next != null) {
//                 current = current.next
//             }
//             current.next = temp;
//         }
//     }

//     isPalindrome(){
//         let res = [];
//         let current = this.head;
//         while (current != null) {
//             res.push(current.data)
//             current = current.next
//         }

//         let start = 0;
//         let end = res.length - 1 ;
//         while (start < end) {
//             if (res[start] !== res[end]) {
//                 return false;
//             }
//             start++;
//             end--;
//         }
//         return true;
//     }

//     display(){

//         let result = []; //array ma jove to 
//         if (this.head == null) {
//             console.log('List is Empty')
//         }
//         else{
//             let current = this.head;
//             while (current != null) {
//                 result.push(current.data)
//                 current = current.next
//             }
//             console.log(result.join(" -> "));
//         }
//     }

// }

// let obj = new singleLinkList();
// obj.display();



// 9. Palindrome Number 

// let Number = 121;
// let a = Number , result = 0 ;

// while (Number > 0 ) {
//     result = (result * 10) + (Number % 10);
//     Number = Math.floor(Number / 10);
// }
// if (a == result) {
//     console.log("Number is Palindrome");
// } else {
//     console.log("Number is Not Palindrome");
// }

// 125 Valid Palindrome
//  "A man, a plan, a canal: Panama"

let str = "AmanaplanacanalPanama";
let res = [];
let s = str.toLowerCase();

while (s > res) {
    s = s.slice()
}

    
