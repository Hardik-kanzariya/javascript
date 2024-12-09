// https://docs.google.com/document/d/1egzBF646tQTm1erfC54A60LFJZAQOIzccQBi2nh9wCg/edit?tab=t.0

// 1. Create a School class and create a student and faculty method.The Student 
// method gives the student name,email and contact number as arguments and prints all details the same as faculty using class& object.


class School{
    student(name,age,email,contact){
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.age = age;

        console.log("Student Details : ");
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Email: ${this.email}`);
        console.log(`Contact Number: ${this.contact}`);

    }
    faculty(name,age,email, contact){
        this.name = name;
        this.age = age;
        this.email = email;
        this.contact = contact;
    
        console.log("Faculty Details : ");
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Email: ${this.email}`);
        console.log(`Contact Number: ${this.contact}`);
    }
}


const school = new School();
    
    
school.student("Hardik Kanzariya" ,21, "kanzariyahardik8925@gmail.com", 1234567890);
school.faculty("girish Gondaliya", 38,"girishsir620@gmail.com", 1237654321);

// Expected out-put :-
// Student Details : 
// Name: Hardik Kanzariya
// Age: 21
// Email: kanzariyahardik8925@gmail.com
// Contact Number: 1234567890

// Faculty Details : 
// Name: girish Gondaliya
// Age: 38
// Email: girishsir620@gmail.com
// Contact Number: 1237654321


// 2. Create a Person class with an argument name and age.create an Employee class through print out details of person class.

class Person{
    constructor(name,age){

        this.name = name;
        this.age = age;
    }
    sayDetails(){
        return `My name is ${this.name} and my age ${this.age}`;
    }

}

class Employee extends  Person{
    constructor(name,age,salary,job){
        super(name,age);
        this.salary = salary;
        this.job = job;
    }
    empDetails(){
        return `My name is ${this.name} and my age ${this.age} my salary is ${this.salary} and my job ${this.job} `;
    }
}

// let person = new Person("Harry",20,);
// console.log(person.sayDetails());
let emp = new Employee("kano",21,99000,"Web devloper");
console.log(emp.empDetails());
console.log(emp.sayDetails());    //my mistake

// Expected out-put :-
// name:-My name is Harry and my age 20
// name:-My name is kano and my age 21 my salary is 99000 and my job Web devloper


// 3. Employee class creates a constructor called print a simple message.

class Employe{
    constructor(){
     console.log('Employe class Called ...');
    }
}

let employe = new Employe();  

// / Expected out-put :-
// Employe class Called ...


// 4. Create a shape class and create a rectangle and circle method find circle area(3.14*r*r) and rectangle area(width*height) using with argument.

class shape{
    rectangleArea(length,width){
        return length * width;
    }
 
     circleArea(radius){
        return Math.PI * radius * radius;
    }
    
}

const Shape = new shape();

// example:-rectangleArea
const length = 10;
 const width = 4;
 const rectangleArea = Shape. rectangleArea(length, width);
 console.log(`Area of Rectangle: ${rectangleArea}`);

// example:-circleArea
 const radius = 7;
   const circleArea = Shape.circleArea(radius);
   console.log(`Area of Circle: ${circleArea}`);

// expected out-put:-
// Area of Rectangle: 40
// Area of Circle: 153.93804002589985