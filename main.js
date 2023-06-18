

const numberButtons = document.querySelectorAll(".btn");
const zeroButton = document.querySelector("#btn0");
const decimalBNutton = document.querySelector("#decimal");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#btnC");
const equalsButton = document.querySelector("#btnEquals");
const display = document.querySelector(".display");
const previousDisplay = document.querySelector("#previous");
const currentDisplay = document.querySelector("#current");

let result = '';



function displayNumbers() {
    if(this.textContent === "." && currentDisplay.innerHTML.includes(".")) return;
    if(this.textContent === "." && currentDisplay.innerHTML === "") return currentDisplay.innerHTML = ".0";

    currentDisplay.innerHTML += this.textContent;
}


function operate() {
    
}

function showResult() {

}




function clearScreen() {

}








// Event listeners for all buttons

operatorButtons.forEach((button) => button.addEventListener("click", operate));

equalsButton.addEventListener("click,", showResult);

clearButton.addEventListener("click", clearScreen);

numberButtons.forEach((button) => button.addEventListener("click", displayNumbers));

zeroButton.addEventListener("click", displayNumbers);

decimalBNutton.addEventListener("click", displayNumbers);