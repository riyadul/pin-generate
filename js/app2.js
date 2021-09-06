function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinValue = pin + '';
    if (pinValue.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}

// keypad part 
document.getElementById('key-pad').addEventListener('click', function (event) {
    const inputValue = event.target.innerText;
    const typeValue = document.getElementById('typed-numbers');
    if (isNaN(inputValue)) {
        if (inputValue == 'C') {
            typeValue.value = '';
        }
    } else {

        const previous = typeValue.value;
        const current = previous + inputValue;
        typeValue.value = current;
    }
})

// submit btn part 
function verifyPin() {
    const left = document.getElementById('display-pin').value;
    const right = document.getElementById('typed-numbers').value;
if (left == right) {
    const success = document.getElementById('success');
    success.style.display = 'block';
    fail.style.display = 'none';
} else {
    const fail = document.getElementById('fail');
    fail.style.display = 'block';
    success.style.display = 'none';
}
}