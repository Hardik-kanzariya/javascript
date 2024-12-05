let Productname = document.getElementById('pname');
let description = document.getElementById('pdesc');
let Category = document.getElementById('pcat');
let Price = document.getElementById('pprice');
const button = document.getElementById('btn');


button.addEventListener('click',() =>{
    let data = JSON.parse(localStorage.getItem('users')) || [];
    data.push(
        {
            Productname: pname.value,
            dedescription: pdesc.value,
            Category: pcat.value,
            Price:pprice.value

        }
    )
    localStorage.setItem('users',JSON.stringify(data))

});