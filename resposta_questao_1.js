const number = (val) => {
    // Recebe o número recebido
    let numberReceived = val
    // Divide o número para poder comparar os dígitos
    let numberArray = val.toString().split('')
    
    let isAscending = true
    let isDescending = true
    let isSort = true

    let i = 0
    let k = numberArray.length > 0 && (numberArray.length - 1)
    // Loop para verificar os dígitos parando antes do último elemento
    for (i; i < k; i++) {
        // Verdadeiro se todos os números eram maiores ou iguais aos os anteriores
        isDescending = isDescending && (numberArray[i] >= numberArray[i+1]);

        // Verdadeiro se todos os números eram menores ou iguais aos os anteriores
        isAscending = isAscending && (numberArray[i] <= numberArray[i+1]);

        // Verdadeiro se o próximo dígito há diferença de 1 ou menor
        if (isAscending) {
            if((numberArray[i] != numberArray[i+1]) && (numberArray[i] != (Number(numberArray[i+1]) - 1)))
                isSort = false
        } else if (isDescending) {
            if((numberArray[i] != numberArray[i+1]) && (numberArray[i] != (Number(numberArray[i+1]) + 1)))
                isSort = false
        }

        if(!isSort) 
            return console.log(`${numberReceived} => Não está ordenado`)
    }

    if (isAscending && isDescending) {
        console.log(`${numberReceived} => Está ordenado`)
    } else if (isAscending) {
        console.log(`${numberReceived} => Está ordenado | Crescente`)
    } else if (isDescending) {
        console.log(`${numberReceived} => Está ordenado | Decrescente`)
    }
}