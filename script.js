const first = document.querySelector('.o1');
const sign = document.querySelector('.o2');
const second = document.querySelector('.o3');
const equ = document.querySelector('.o4');
const clear = document.querySelector('.clear');
const final = document.querySelector('.result');
function add(first, second){
    return first + second;
};

function subtract(first, second){
    return first - second;
};

function multiply(first, second){
    return first * second;
}

function divide(first, second){
    return first / second;
};

let firstNumber = [], secondNumber = [];
let numberOne = undefined, numberTwo = undefined;
let signValue = undefined;
const buttons0 = document.querySelectorAll('.nr');
let dotPressed = false;
let numberSwitch = true;

let clearFunc = () => {
    dotPressed = false;
    first.textContent = '';
    second.textContent = '';
    sign.textContent = '';
    firstNumber = [];
    secondNumber = [];
    signValue = undefined;
    numberOne = undefined;
    numerTwo = undefined;
    numberSwitch = true;
    equ.classList.add('hidden');
    final.textContent = '';
}

clear.addEventListener('click', clearFunc);

buttons0.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if (e.target.textContent === '.'){
            if (numberSwitch === true && dotPressed === false){
                firstNumber.push('.');
                first.textContent = firstNumber.join('');
            }
            else if (numberSwitch === false && dotPressed === false){ 
                secondNumber.push('.');
                second.textContent = secondNumber.join('');
            }
            dotPressed = true;
        }
        else{
            if (numberSwitch === true){
            firstNumber.push(e.target.textContent);
            first.textContent = firstNumber.join('');
            }else{
            secondNumber.push(e.target.textContent);
            second.textContent = secondNumber.join('');
        }
        }
        });
});

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const divider = document.querySelector('.divider');
const multiplier = document.querySelector('.multiplier');
const equal = document.querySelector('.equal');

plus.addEventListener('click', () => {
    if (firstNumber.length !== 0) {
        signValue = '+';
        numberOne = Number(firstNumber.join(''));
        numberSwitch = false;
        firstNumber = [];
        sign.textContent = signValue;
        dotPressed = false;
    }
});

minus.addEventListener('click', () => {
    if (firstNumber.length !== 0){
        signValue = '-';
        numberOne = Number(firstNumber.join(''));
        numberSwitch = false;
        firstNumber = [];
        sign.textContent = signValue;
        dotPressed = false;
    }
});

divider.addEventListener('click', () => {
    if (firstNumber.length !== 0){    
        signValue = '/';
        numberOne = Number(firstNumber.join(''));
        numberSwitch = false;
        firstNumber = [];
        sign.textContent = signValue;
        dotPressed = false;
    }
});

multiplier.addEventListener('click', () => {
    if (firstNumber.length !== 0){    
        signValue = '*';
        numberOne = Number(firstNumber.join(''));
        numberSwitch = false;
        firstNumber = [];
        sign.textContent = signValue;
        dotPressed = false;
    }
});

equal.addEventListener('click', () => {
    if (secondNumber.length !== 0){
        numberTwo = Number(secondNumber.join(''));
        if (signValue === '+'){
            let result = add(numberOne, numberTwo);
            final.textContent = result;
            equ.classList.remove('hidden');
        }
        if (signValue === '-'){
            let result = subtract(numberOne, numberTwo);
            final.textContent = result;
            equ.classList.remove('hidden');
        }
        if (signValue === '/'){
            let result = divide(numberOne, numberTwo);
            final.textContent = result;
            equ.classList.remove('hidden');
        }
        if (signValue === '*'){
            let result = multiply(numberOne, numberTwo);
            final.textContent = result;
            equ.classList.remove('hidden');
        }
    }
});