const number = (val) => {
    // Recebe o número recebido
    let numberReceived = val
    // Divide o número para poder comparar os dígitos
    let numberArray = val.toString().split('')
    
    var ascending = true
    var descending = true

    // Loop para verificar os dígitos parando antes do último elemento
    for (var i = 0, k = numberArray.length - 1; i < k; i++) {
        // Verdadeiro se todos os números eram maiores ou iguais aos os anteriores
        descending = descending && (numberArray[i] >= numberArray[i+1]);

        // Verdadeiro se todos os números eram menores ou iguais aos os anteriores
        ascending = ascending && (numberArray[i] <= numberArray[i+1]);
    }

    if (ascending) {
        console.log(numberReceived, '=> Está ordenado | Crescente')
    } else if (descending) {
        console.log(numberReceived, '=> Está ordenado | Decrescente')
    } else {
        console.log(numberReceived, '=> Não está ordenado')
    }
}