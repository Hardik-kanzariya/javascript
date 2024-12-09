const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('#display');
// console.log(buttons);
// console.log(display);

let currentNum = "";
let prevNum = "";
let operator = null;

const updateDisplay = () =>{
    display.value = currentNum || prevNum || "0";
}

const appendNum = (data) =>{
    currentNum = currentNum + data;
    updateDisplay()
}

const choseOperator = (ope) =>{
    prevNum = currentNum;
    operator = ope;
    currentNum = "";
}

const calculateMe = () =>{
    let pNum = parseFloat(prevNum);
    let cNum = parseFloat(currentNum);
    let result;


switch (operator) {
    case "+":
        result = pNum + cNum;
        break;

    case "-":
        result = pNum - cNum;
        break;

    case "*":
        result = pNum * cNum;
        break;
                
    case "/":
        result = pNum / cNum;
        break;

    case "%":
        result = pNum % cNum;
        break;
    
    default:
        break;
    }
        currentNum = result.toString();
        operator = null;
        prevNum = "";
        updateDisplay();
}

const clearFun = () =>{
    currentNum = "";
    operator = null;
    prevNum = "";
    updateDisplay();

}

buttons.forEach((buttons)=>{
    buttons.addEventListener('click',()=>{
        const value = buttons.textContent
        console.log(value);

        if (!isNaN(value)) {
            appendNum(value);
        }else if (value == "="){
            calculateMe();
        }
        else if (value == "AC") {
            clearFun();
        }
        else{
            choseOperator(value);
        }
       
    })
})

