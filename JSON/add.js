let Fname = document.getElementById('fname');
let Femail = document.getElementById('femail');
let Fpass = document.getElementById('fpass');
const button = document.getElementById('btn');

let editName = document.getElementById('editName');
let editEmail = document.getElementById('editEmail');
let editPass = document.getElementById('editPass');
const UpdateBtn = document.getElementById('UpdateBtn');


const tbody = document.querySelector("#tbody");
const addmodel = document.querySelector("#addmodel");
const editmodel = document.querySelector("#editmodel");

// let UpdateIndex = null;

button.addEventListener('click',() =>{
    let data = JSON.parse(localStorage.getItem('users')) || [];
    // console.log(typeof data);
    data.push(
        {
            name: Fname.value,
            email: Femail.value,
            password: Fpass.value
        }
    )
    localStorage.setItem('users',JSON.stringify(data))
    loadData()  
    Fname.value = ""
    Femail.value = ""
    Fpass.value = ""
});

const loadData = () =>{
    const users = JSON.parse(localStorage.getItem('users'))
    // console.log("users ===> ", users);
let result = "";
users.forEach((user,index) =>{
    let row = `<tr>
                    <td>${index+1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.password}</td>
                    <td><button onclick="editData(${index})">Edit<button>  || <button onclick=" deleteData(${index})">Delete</button></td>

                    </tr>
                `
    result = result + row; 
})
        // console.log(result);
        tbody.innerHTML = result

};
loadData()


const deleteData = (index) =>{
const data = JSON.parse(localStorage.getItem('users'))
data.splice(index , 1);
localStorage.setItem('users',JSON.stringify(data))
loadData();
}


const editData = (index) =>{
    const data = JSON.parse(localStorage.getItem('users'))
    let user = data[index];

    addmodel.style.display = "none";
    editmodel.style.display = "block";


    editName.value = user.name;
    editEmail.value = user.email;
    editPass.value = user.password;

    UpdateIndex = index;    
}

UpdateBtn.addEventListener('click', () =>{
    const data = JSON.parse(localStorage.getItem('users'));

    data[UpdateIndex]= {
        name: editName.value,
        email: editEmail.value,
        password: editPass.value,
    }

    localStorage.setItem('users',JSON.stringify(data))
    loadData();
    editmodel.style.display = 'none'
    addmodel.style.display = 'block'

})

