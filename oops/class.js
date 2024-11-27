//  Class & object this 
//  constructor => defualt , paramterized


class Hello{
    // defualt
    // constructor(){
//      console.log('Automatically Called');
    // }
// paramterized
constructor(name,age){

    this.name = name;
    this.age = age;
    console.log('Automatically Called');
}

sayGreting(){
    console.log('Hello Guys...',this.age,this.name);
}

}

const data = new Hello("Hardik",20)
data.sayGreting()