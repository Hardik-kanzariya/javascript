function fibonacci(n){
    // let n=Number(prompt("Enter the Number:"));
    if (n === 0) {
        return 0;
    }
    else if  (n===1) {
        return 1;
    }
    else{
       return  fibonacci(n - 1) + fibonacci(n - 2); 
    }
}


for(let i = 0; i<=5;i++){
    console.log("fibonacci serise",fibonacci(i));
}


function loop(){
    for(i=1; i<=5; i++){
        let data=" ";
        for(j=1; j<=i; j++){
          data+= j + " ";
        }
        console.log(data);
    }
}
loop();