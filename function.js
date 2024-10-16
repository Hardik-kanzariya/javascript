// Function Program:-

// 1.program to calculate Area of Circle.

// function circle(){
// let=r =Number(prompt('Enter the Area of r: '));
// console.log(3.14*r*r);
// }
// circle();
// // out-put:- 3.14 * 10 * 10 => 314


// // 2. program to calculate Area of Square.
// function square(){
//     let=s =Number(prompt('Enter the Area of Square: '));
//     console.log(s*s);
// }
// square();
// // out-put:- 20 * 20 => 400

// // 3.program to calculate Area of Rectangle.
// function Rectangle(){
//     let=w =Number(prompt('Enter the Area of width:'));
//     let=h =Number(prompt('Enter the Area of height:'));

//     console.log(w*h); 
// }
// Rectangle();
// out-put:- 10 * 20 => 200

// 4.program to calculate Area of Triangle.
// function Triangle(){
//     let=w =Number(prompt('Enter the Area of width:'));
//     let=h =Number(prompt('Enter the Area of height:'));

//     console.log(1/2*w*h); 
// }
// Triangle();
// out-put:-  1/2 * 10 *10 =>50 

// 5.program to calculate simple Interest.
// function Interest(){
//     let p=Number(prompt('Enter the simple Interest:'));
//     let r=Number(prompt('Enter the simple Rate:'));
//     let t=Number(prompt('Enter the simple Time:'));

//     console.log(p*r*t/100);
// }
// Interest();
// out-put:- p = 167 r = 8 t = 29 p*r*t/100 => 387.44

// 6.find out small number of given two number.
// function small(){
//     let a=Number(prompt('Enter the A number: '));
//     let b=Number(prompt('Enter the B number: '));
//     if (a<b) {
//         console.log('A is small Number:',a);
//     }
//     else{
//         console.log('B is small Number',b);
//     }
// }
// small();
// out-put:- a = 10 b = 20 => B is small Number

// 7.find out given number is even.
// function even(){
//     let e=Number(prompt('Enter the Number:'));
//     if (e%2===0) {
//         console.log('This is even number:',e);
//     }else{
//         console.log('This is odd number:',e);
//     }
// }
// even();
// out-put:- 10 =>even number

// 8.find out given number is even or odd.
// function odd(){
//     let o=Number(prompt('Enter the Number:'));
//     if (o%2===1) {
//         console.log('This is odd number:',o);
//     }else{
//         console.log('This is even number:',o);
//     }
// }
// odd();
// out-put:- 3 => odd number

// 9.Convert Celsius to Fahrenheit.
// function Fahrenheit(){
// let c=Number(prompt('Enter the celsius'));
//  let f = c*1.8+32;
//  console.log('Fahrenheit:',f);
// }
// Fahrenheit();
// out-put:-  

// 10.Function to Find the Maximum of Three Numbers.
function Maximum(){
    let a=Number(prompt('Enter the A Number:'));
    let b=Number(prompt('Enter the B Number:'));
    let c=Number(prompt('Enter the C Number:'));
    if(a>b)
        {
            if(a>c)
            {
                console.log("A is Maximum",a);
            }
            else
            {
                console.log("C is Maximum",c);
            }
        }
        else
        {
            if(b>c)
            {
                console.log("B is Maximum",b);
            }
            else
            {
                console.log("C is Maximum",c);
            }
        }
}
Maximum();