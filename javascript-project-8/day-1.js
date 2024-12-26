// CURD
let pname = document.getElementById('pname');
let pdesc = document.getElementById('pdesc');
let pcat = document.getElementById('pcat');
let pprice = document.getElementById('pprice');
let cartCount = document.getElementById('cart-counter');

const tbody = document.querySelector("#card-container");
const cartContainer = document.querySelector("#cart-container");
const addBtn = document.getElementById('btn');
const cartButton = document.getElementById('carbtn');

let UpdateIndex = null;
let cartCounter = 0;


addBtn.addEventListener('click', () => {
  let data = JSON.parse(localStorage.getItem('product')) || [];
  data.push({
    productName: pname.value,
    description: pdesc.value,
    category: pcat.value,
    price: pprice.value,
  });

  localStorage.setItem('product', JSON.stringify(data));
  loadData();
  pname.value = "";
  pdesc.value = "";
  pcat.value = "";
  pprice.value = "";
});

const loadData = () => {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = "";

  const product = JSON.parse(localStorage.getItem('product')) || [];
  cartCount.innerHTML = cartCounter;
  product.forEach((pro, index) => {
    let row = `
      <div class="card m-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">ProductName: ${pro.productName}</h5>
          <p class="card-text">
            <strong>Description:</strong> ${pro.description}<br/>
            <strong>Category:</strong> ${pro.category}<br/>
            <strong>Price:</strong> ${pro.price}<br/>
          </p>
          <button class="btn btn-primary" onclick="addToCart(${index})">Add To Cart</button>
        </div>
      </div>
    `;
    cardContainer.innerHTML += row;
  });
};

const addToCart = (index) => {
  const products = JSON.parse(localStorage.getItem('product')) || [];
  const cartData = products[index];
   let cart = JSON.parse(localStorage.getItem('carts')) || [];
    ++cartCounter;
   cart.push(cartData);
   localStorage.setItem('carts', JSON.stringify(cart));

  cartCount.innerHTML = cartCounter;
};

carbtn.addEventListener('click', () => {

    document.querySelector(".formData").style.display = "none";
    
  const cardContainer = document.getElementById('card-container');
  cartContainer.innerHTML = "";

  const cartData = JSON.parse(localStorage.getItem('carts')) || [];

  cartData.forEach((cart, index) => {
    let row = `
    <div class="card m-3" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">ProductName: ${cart.productName}</h5>
    <p class="card-text">
            <strong>Description:</strong> ${cart.description}<br/>
            <strong>Category:</strong> ${cart.category}<br/>
            <strong>Price:</strong> ${cart.price}<br/>
            </p>
            <button class="btn btn-primary" onclick="removeToCart(${index})">Remove Cart</button>
            
            </div>
            </div>
            
            `;
            
            cartContainer.innerHTML += row;b
          });
        });


const removeToCart = (index) => {
  const cartData = JSON.parse(localStorage.getItem('carts')) || [];
  cartData.splice(index, 1);
  localStorage.setItem('carts', JSON.stringify(cartData));
  cartCounter = cartData.length;
  cartCount.innerHTML = cartCounter;
  cartButton.click(); 
};

loadData();

