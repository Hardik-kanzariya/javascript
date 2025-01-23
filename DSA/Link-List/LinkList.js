// syntax
// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class singleLinkList {
//     constructor(){
//         this.head = null;
//     }

//     appendDate(val) {
//         let temp = new Node(val);
//         let current = this.head;
//         if (this.head == null) {
//             this.head = temp;
//         }

//         while (current.next != null) {
//             current = current.next
//         }
//         current.next = temp;
//     }
// }



class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class singleLinkList{
    constructor(){
        this.head = null;
    }

    // Insert Data into End last ma add kara va mate
    appendDate(val){
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

    // Insert Data into First ma add kara va mate

    prependData(val){
        let temp = new Node(val)

        if (this.head == null) {
            this.head = temp;
        }
        else{
            temp.next = this.head;
            this.head = temp;
        }
    }

    // Remove Data into First

    removeFirstData(){

        if (this.head == null) {
            console.log('List already Empty.....');
        }else if (this.head.next === null) {
            this.head = null;
        }
        else{
            this.head = this.head.next;
        }
    }

    // Remove Data into End

    removeEndData(){

        if (this.head == null) {
            console.log('List already Empty......');
        }else if(this.head.next === null){
            this.head = null
        }
        else{
            let current = this.head;
            let prev = null;
            while (current.next != null) {
                prev = current;
                current = current.next;
            }
            prev.next = null;
        }
    }

    // Check if linked list is palindrome left to right
    isPalindrome(){
        let res = [];
        let current = this.head;
        while (current != null) {
            res.push(current.data)
            current = current.next
        }

        let start = 0;
        let end = res.length - 1 ;
        while (start < end) {
            if (res[start] !== res[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    // Displaying Data

    display(){

        let result = []; //array ma jove to 
        if (this.head == null) {
            console.log('List is Empty')
        }
        else{
            let current = this.head;
            while (current != null) {
                // console.log(current.data);
                result.push(current.data)
                current = current.next
            }
            console.log(result.join(" -> "));
        }
    }
}


  let obj = new singleLinkList();
  
  obj.appendDate(10);
  obj.appendDate(20);
  
  obj.prependData(100);
  obj.prependData(200);
  obj.prependData(300);
  
  
  obj.display();
  obj.removeEndData();
  obj.removeEndData();
  obj.display()
      