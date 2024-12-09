// let Fname = document.getElementById('fname');
// let Femail = document.getElementById('femail');
// let Fpass = document.getElementById('fpass');
// const button = document.getElementById('btn');

// let editName = document.getElementById('editName');
// let editEmail = document.getElementById('editEmail');
// let editPass = document.getElementById('editPass');
// const UpdateBtn = document.getElementById('UpdateBtn');


// const tbody = document.querySelector("#tbody");
// const addmodel = document.querySelector("#addmodel");
// const editmodel = document.querySelector("#editmodel");

// // let UpdateIndex = null;

// button.addEventListener('click',() =>{
//     let data = JSON.parse(localStorage.getItem('users')) || [];
//     // console.log(typeof data);
//     data.push(
//         {
//             name: Fname.value,
//             email: Femail.value,
//             password: Fpass.value
//         }
//     )
//     localStorage.setItem('users',JSON.stringify(data))
//     loadData()  
//     Fname.value = ""
//     Femail.value = ""
//     Fpass.value = ""
// });

// const loadData = () =>{
//     const users = JSON.parse(localStorage.getItem('users'))
//     // console.log("users ===> ", users);
// let result = "";
// users.forEach((user,index) =>{
//     let row = `<tr>
//                     <td>${index+1}</td>
//                     <td>${user.name}</td>
//                     <td>${user.email}</td>
//                     <td>${user.password}</td>
//                     <td><button onclick="editData(${index})">Edit<button>  || <button onclick=" deleteData(${index})">Delete</button></td>

//                     </tr>
//                 `
//     result = result + row; 
// })
//         // console.log(result);
//         tbody.innerHTML = result

// };
// loadData()


// const deleteData = (index) =>{
// const data = JSON.parse(localStorage.getItem('users'))
// data.splice(index , 1);
// localStorage.setItem('users',JSON.stringify(data))
// loadData();
// }


// const editData = (index) =>{
//     const data = JSON.parse(localStorage.getItem('users'))
//     let user = data[index];

//     addmodel.style.display = "none";
//     editmodel.style.display = "block";


//     editName.value = user.name;
//     editEmail.value = user.email;
//     editPass.value = user.password;

//     UpdateIndex = index;    
// }

// UpdateBtn.addEventListener('click', () =>{
//     const data = JSON.parse(localStorage.getItem('users'));

//     data[UpdateIndex]= {
//         name: editName.value,
//         email: editEmail.value,
//         password: editPass.value,
//     }

//     localStorage.setItem('users',JSON.stringify(data))
//     loadData();
//     editmodel.style.display = 'none'
//     addmodel.style.display = 'block'

// })



// Get DOM Elements
let pname = document.getElementById('pname');
let pdesc = document.getElementById('pdesc');
let pcat = document.getElementById('pcat');
let pprice = document.getElementById('pprice');
const button = document.getElementById('btn');
const cardContainer = document.getElementById('card-container');

// Add Product Event Listener
button.addEventListener('click', () => {
    // Input Validation
    if (!pname.value || !pdesc.value || !pcat.value || !pprice.value || isNaN(pprice.value)) {
        alert("Please fill all fields with valid data.");
        return;
    }

    // Retrieve Existing Data from LocalStorage
    let data = JSON.parse(localStorage.getItem('product')) || [];

    // Add New Product to Data Array
    data.push({
        productName: pname.value.trim(),
        description: pdesc.value.trim(),
        category: pcat.value.trim(),
        price: parseFloat(pprice.value).toFixed(2)
    });

    // Save Updated Data to LocalStorage
    localStorage.setItem('product', JSON.stringify(data));

    // Clear Input Fields
    pname.value = "";
    pdesc.value = "";
    pcat.value = "";
    pprice.value = "";

    // Reload Data to Display New Product
    loadData();
});

// Load Data and Display Cards
const loadData = () => {
    // Clear Existing Cards
    cardContainer.innerHTML = "";

    // Retrieve Product Data from LocalStorage
    const products = JSON.parse(localStorage.getItem('product')) || [];

    // Loop Through Products and Create Cards
    products.forEach((product, index) => {
        const card = `
        <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Product Name: ${product.productName}</h5>
                <p class="card-text">
                    <strong>Description:</strong> ${product.description}<br/>
                    <strong>Category:</strong> ${product.category}<br/>
                    <strong>Price:</strong> $${product.price}<br/>
                </p>
                <button class="btn btn-primary" onclick="addToCart(${index})">Add To Cart</button>
                <button class="btn btn-danger" onclick="removeProduct(${index})">Delete</button>
            </div>
        </div>`;
        cardContainer.innerHTML += card;
    });
};

// Add Product to Cart
const addToCart = (index) => {
    const products = JSON.parse(localStorage.getItem('product')) || [];
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add Selected Product to Cart
    cart.push(products[index]);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert("Product added to cart.");
};

// Remove Product
const removeProduct = (index) => {
    const products = JSON.parse(localStorage.getItem('product')) || [];

    // Remove Product from Array and Save Back to LocalStorage
    products.splice(index, 1);
    localStorage.setItem('product', JSON.stringify(products));

    // Reload Updated Product List
    loadData();
};

// Initial Load
loadData();