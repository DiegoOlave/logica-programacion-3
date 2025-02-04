function calculateFactorial() {
    const input = document.getElementById('numberInput').value;
    const number = parseInt(input);
    
    if (isNaN(number) || number < 0) {
        alert('Por favor, ingrese un número válido.');
        return;
    }
    
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    
    document.getElementById('result').textContent = `El factorial de ${number} es ${factorial}.`;
}
