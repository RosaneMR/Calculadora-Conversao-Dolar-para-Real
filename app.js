function converter() {
    var valorEmDolar = parseFloat(document.getElementById('valorDolar').value);
    
    if (isNaN(valorEmDolar) || valorEmDolar <= 0) {
        alert("Por favor, insira um valor válido em dólares.");
        return;
    }

    var cotacaoDoDolar = 5.90;  // A cotação do dólar
    var valorEmReal = valorEmDolar * cotacaoDoDolar;
    valorEmReal = parseFloat(valorEmReal.toFixed(2));  // Convertendo para duas casas decimais

    // Exibir o resultado na página
    document.getElementById('resultado').innerText = "R$ " + valorEmReal;
}
