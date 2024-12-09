let counter = 0;
let conutervalue = document.getElementById('counter-value');

document.getElementById('increment-btn').addEventListener('click',() =>{
    counter++;
    conutervalue.innerHTML = counter;

});

document.getElementById('decrement-btn').addEventListener('click',() => {
    
    if (counter > 0 ) {
        counter--;
        conutervalue.innerHTML = counter;
    }

});

document.getElementById('reset').addEventListener('click',() =>{
    counter = 0; 
    conutervalue.innerHTML = counter;
});

 


