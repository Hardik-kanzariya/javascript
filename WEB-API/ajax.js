document.getElementById('btn').addEventListener('click',() =>{
    
    let Dogimages = document.getElementById('dog-images');

    const dog = new XMLHttpRequest();

    dog.open("GET",'https://dog.ceo/api/breeds/image/random',true);

    dog.onload = function() {
        if (this.status == 200) {
            // console.log('src',JSON.parse(this.responseText).message);
            let img = document.createElement('img');
            img.setAttribute('src',JSON.parse(this.responseText).message)
            img.style.height = '100px';
            img.style.width = '100px';
            Dogimages.prepend(img);
        }
        else{
            console.log('API ERROR....');
        }
    }
    dog.send();

});