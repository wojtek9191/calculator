const currentNumber = document.querySelector('.currentNumber');
const previousNumber = document.querySelector('.previousNumber p');
const displayOperator = document.querySelector('.displayOperator');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');


numberButtons.forEach((button) => button.addEventListener('click', displayNumbers));
operatorButtons.forEach((button) => button.addEventListener('click', operate));
equalsButton.addEventListener('click', showResult);
clearButton.addEventListener('click', clearDisplay);


let result = '';


function displayNumbers() {
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '.0';

    currentNumber.innerHTML += this.textContent;
}


function operate() {
    if(currentNumber.innerHTML === '' && this.textContent === '-'){
        currentNumber.innerHTML = '-';
        return;
    }

    if(this.textContent === '-' && currentNumber.innerHTML.includes('-')) return;

    else if(currentNumber.innerHTML === '') return;

    if(displayOperator.innerHTML !== '') {
        showResult();
    }

    previousNumber.innerHTML = currentNumber.innerHTML;
    displayOperator.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
}


function showResult() {
    if(currentNumber.innerHTML === '' || previousNumber.innerHTML === '') return;

    let current = Number(currentNumber.innerHTML);
    let previous = Number(previousNumber.innerHTML);
    let operator = displayOperator.innerHTML;


    switch(operator) {
        case '+':
            result = current + previous;
            break;
        case '-':
            result = previous - current;
            break;
        case 'x':
            result = current * previous;
            break;
        case '/':
            result = previous / current;
            break;
    }

    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    displayOperator.innerHTML = '';
}


function clearDisplay() {
    previousNumber.innerHTML = '';
    displayOperator.innerHTML = '';
    currentNumber.innerHTML = '';
    result = '';
}