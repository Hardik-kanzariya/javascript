let breedListitem = document.getElementById('breed-list');

function breedList(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) =>{
        if (res.status === 200) {
            return res.json();
        }
        else{
            alert('API Calling failed....');
        }
    })
    .then((data) =>{

        // console.log(data.message);

        for(let breed in data.message){
            let option = document.createElement('option');
            option.setAttribute('value', breed);
            option.innerHTML = breed;
            breedListitem.appendChild(option)
        }
    })
    .catch((err) => console.log(err));
};

breedList();

document.getElementById('btn').addEventListener('click', () => {
    let dogBreed = breedListitem.value;
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`).then((res) =>{
        if(res.status == 200){
            return res.json();
        }
        else{
            alert('Select aleast one breed list')
            return  null;
        }
    }).then((data) =>{
        console.log(data);
        let dogImages = document.getElementById('dogImages');
        if (data.message == "") {
            alert('Please another one')
        }
        else{
            let image = document.createElement('img');
            image.setAttribute('src',data.message);
            image.style.height = "200px"
            image.style.width = "200px"
            image.style.margin = "10px"
            dogImages.appendChild(image);
        }
    }).catch((err) => console.log(err));
})
