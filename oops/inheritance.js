// inheritance =>  1. single 2.multilevel 3.hierachical


// 1.single 
class Parent {
    displayParent(){
        console.log('Parent class Display Function called...');
    }
}

class child extends Parent{
    display(){
        console.log('Child Class called...');
    }
}

class subChild extends child{
    saySubChild(){
        console.log('Sub child class called..');
    }
}

// let data = new child();
// data.displayParent();
// data.display();


// let obj = new subChild();
// obj.displayParent();
// obj.display();
// obj.saySubChild();


// 2.multilevel

class Hello{
    sayHello(){
        console.log("Hello class called...");
    }
}

class Test extends Hello{
    sayTest(){
        console.log('Test class called...');
    } 
}

class Hardik extends Test{
    sayHardik(){
        console.log('Hardik class called...');
    }
}

class Vivek extends Test {
    sayVivek(){
        console.log('Vivek class called...');
    }
}

class Bug extends Hello{
    sayBug(){
        console.log('Bug class called...');
    }
}

// let say = new Test();
// say.sayHello();
// say.sayTest();

// let key = new Bug();
// key.sayBug();
// key.sayHello();

// let hardik = new Hardik();
// hardik.sayHardik();
// hardik.sayTest();
// hardik.sayHello();

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    myDetails(){
        return `My name is ${this.name} and my age ${this.age}`;
    }
}

class Student extends Person {
    constructor(name,age,mark){
        super(name,age)
        this.mark = mark;
    }
    marks(){
        return `my mark is ${this.mark}`;
    }
}


let guru = new Student("guru",20,90);
let data = new Student("data",20,90);

console.log(guru.myDetails());
console.log(guru.marks());
console.log(data.myDetails());
console.log(data.marks());
