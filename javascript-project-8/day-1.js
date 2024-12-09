let pname = document.getElementById('pname');
let pdesc = document.getElementById('pdesc');
let pcat = document.getElementById('pcat');
let pprice = document.getElementById('pprice');

const tbody = document.querySelector("#card-container");

const button = document.getElementById('btn');


button.addEventListener('click',() =>{
    let data = JSON.parse(localStorage.getItem('product')) || [];
    console.log(pname.value);
    data.push(
        {
            productName: pname.value,
            description: pdesc.value,
            category: pcat.value,
            price:pprice.value

        }
    )
    
    localStorage.setItem('product',JSON.stringify(data));
    loadData();
    pname.value=""
    pdesc.value=""
    pcat.value=""

});

const loadData = () =>{

  const cardContainer = document.getElementById('card-container');
cardContainer.innerHTML = "";
    
    const product = JSON.parse(localStorage.getItem('product')) || [];
    let result = "";
product.forEach((pro) =>{
    let row = `
    <div id="card-container" class="d-flex flex-wrap justify-content-center">
          <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">ProductName:- ${pro.productName}</h5>
              <p class="card-text"><strong>Description:-${pro.description}</strong><br/>
                <strong>Category:-${pro.category}</strong><br/>
                <strong>Price:-${pro.price}</strong><br/>
                
              </p>
              <a href="#" class="btn btn-primary">Add To Cart</a>
            </div>
          </div>
        </div>
                `
    result = result + row; 
})
        tbody.innerHTML = result

};
loadData()
