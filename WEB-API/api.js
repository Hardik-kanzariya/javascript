document.getElementById('btn').addEventListener('click', () =>{
    let Dogimages = document.getElementById('dog-images');

    fetch("https://dog.ceo/api/breeds/image/random")
    .then((Response) =>{
        if (Response.status === 200) {
            return Response.json();
        }
    })
    .then((data) =>{
        console.log(data);
        let img = document.createElement('img');
        img.setAttribute('src',data.message)
        img.style.height ="150px"
        img.style.width ="150px"
        Dogimages.prepend(img)
    })
    .catch((error) =>{
        console.log(error);
    })
})