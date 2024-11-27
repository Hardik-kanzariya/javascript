// polymorphism => overloading & overriding

class parent {
    display(){
        throw new Error('Display Function must be implement in sub class');
    }
}

class child extends parent{
    display(){
        console.log('Hello');
    }
} 


let data = new child();