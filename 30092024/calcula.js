document.getElementById('sumForm').addEventListener('submit',function(event){
    event.preventDefault();
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);
    let resultado = numero1+numero2;
    document.getElementById('resultado').innerText = 'La suma es: '+resultado;
});