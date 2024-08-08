function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        let expression = display.value;

        expression = expression.replace(/(\d+(\.\d+)?)(%)(\d+(\.\d+)?)/g, (match, percentNum, _, __, num) => {
            return `(${percentNum} / 100) * ${num}`;
        });

        expression = expression.replace(/(\d+(\.\d+)?)(%)/g, (match, num) => {
            return `(${num} / 100)`;
        });

        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}
