/*Operations*/
function add(a, b) {
    return Number(a) + Number(b);
};

function substract(a, b) {
    return Number(a) - Number(b);
};

function multiply(a, b) {
    return Number(a) * Number(b);
};

function divide(a, b) {
    return Number(a) / Number(b);
};

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    };
};

/*Functions*/
function initialize(result) {
        num2 = '';
        operator = '';
    if (result === 0){
        num1 = '';
        displayText.innerText = result;
    } else {
        num1 = result;
        displayText.innerText = result;
        result = 0;
    };
};

function getOperation(input) {
    if (operator === '' && input != '=' && !operators.includes(input)) {
        num1 = getNum1(input);
     } else if (operator != '' && input != '=' && !operators.includes(input)) {
        num2 = getNum2(input);
        if (num2 === '0' && operator === '/') {
            alert('Really? Are you trying to killing me?')
            initialize(0);
        };
    } else if (operators.includes(input)) {
        if (operator === '') {
            operator = input;
            displayText.innerText = num1.toString().substring(0, 11);
        } else {
            result = operate(operator, num1, num2);
            num1 = result;
            displayText.innerText = num1.toString().substring(0, 11);
            num2 = '';
        };
        
     } else if (input === '=') {
        result = operate(operator, num1, num2);
        num1 = result;
        num2 = '';
        displayText.innerText = result.toString().substring(0, 11);
        initialize(result)
     }; 
     
};

function getNum1(input) {
    if (input != 'delete' && input != 'dot') {
        num1 += input;
    } else if (input === 'dot' && !num1.includes('.')) {
        num1 += '.';
    } else if (input === 'delete') {
        num1 = Number(num1.toString().slice(0, -1));
    };
    displayText.innerText = num1.toString().substring(0, 11);
    return num1
};

function getNum2(input) {
    if (input != 'delete' && input != 'dot') {
        num2 += input;
    } else if (input === 'dot' && !num2.includes('.')) {
        num2 += '.';
    } else if (input === 'delete') {
        num2 = Number(num2.toString().slice(0, -1));
    };
    displayText.innerText = num2.toString().substring(0, 11);
    return num2
};

/*Inputs*/
const displayText = document.getElementById("displayText");
let result = 0;
let num1 = '';
let num2 = '';
let operator = '';
const operators = ['*', '+', '-', '/'];
const keyboardSupport = document.getElementById('keyboardSupport');

document.querySelectorAll('.number').forEach(number => {
    number.addEventListener('click', function () {
        getOperation(number.value)});
});

document.querySelectorAll('.operator').forEach(operator => {
    operator.addEventListener('click', function () {
        num1 !== '' ? getOperation(operator.value) : null;
        });
});

document.getElementById('equals').addEventListener('click', function() {
    getOperation('=');
});

document.getElementById('clear').addEventListener('click', function() {
    initialize(0);
});

document.getElementById('delete').addEventListener('click', function() {
    getOperation('delete');
});

document.getElementById('dot').addEventListener('click', function() {
    getOperation('dot');
});

document.getElementById('help').addEventListener('click', help = () => {
    if (keyboardSupport.textContent == '') {
        keyboardSupport.innerText = 'This is an imperfect calculator.\nYou can perform simple operations\
        such as adding, subtracting, multiplying, or dividing.\nYou can delete\
        numbers, add decimals, and delete the operation to start again.\nBut,\
        among the many things you cannot do, it is divide by 0.\nPlease don\'t\
        do it, it could break me.'
    } else {
        keyboardSupport.innerText = '';
    }; 
    
})