document.getElementById('start-btn').
addEventListener('click',()=>{
    let counter = document.getElementById('counter').innerHTML
    let id = setInterval(()=>{
        if (counter > 0) {
            counter--
            document.getElementById('counter').innerHTML = counter
        }else{
            clearInterval(id);
            alert('counter is stopped')
            document.getElementById('counter').innerHTML = 'hello'
        }
    },1000)
})