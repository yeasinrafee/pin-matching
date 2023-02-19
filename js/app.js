const generatePin = function(){
    const random = Math.round(Math.random() * 10000);
    return random;
}

const getPin = function(){
    const rand = generatePin();
    const pinString = rand + '';
    if(pinString.length === 4){
        return rand;
    }else{
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const typedValue = event.target.innerText;
    const inputField = document.getElementById('calc-input');
    const previousInputField = inputField.value;

    if(isNaN(typedValue)){
        if(typedValue === 'C'){
            inputField.value = '';
        }else if(typedValue === '<'){
            const inputValue = previousInputField.split('');
            inputValue.pop();
            inputField.value = inputValue.join('');
        }
    }else{
        inputField.value += typedValue;
    }
})