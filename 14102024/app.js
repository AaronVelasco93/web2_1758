
document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operator = document.getElementById('operator').value;
    let result;

    switch(operator) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "¡Error! No se puede dividir entre cero.";
            }
            break;
        default:
            result = "Operador inválido";
    }

    document.getElementById('result').innerText = `El resultado es: ${result}`;
});
