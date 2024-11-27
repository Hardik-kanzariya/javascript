function setError(id,message) {
    document.getElementById(id).innerHTML = message
}

function validation () {
    let isValid = true;

let firstname = document.getElementById('fname').value
let lastname = document.getElementById('lname').value

if (firstname === "") {
    setError('ferrname','Frist Name is always required')
    isValid = false;
} else if (firstname.length <=3) {
    setError('ferrname','*Minimum length is 3')
    isValid = false;
}else if (firstname.length >= 15){
    setError('ferrname','Maximum length is 15')
}


if (lastname === "") {
    setError('lerrname','Last Name is always required')
    isValid = false;
} else if (lastname.length <=3) {
    setError('lerrname','*Minimum length is 3')
    isValid = false;
}else if (lastname.length >= 15){
    setError('lerrname','Maximum length is 15')
}

return isValid;

}