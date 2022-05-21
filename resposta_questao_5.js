const peopleNumber = (val) => {
    // Recebe a permutação que será feita
    let permutation = []

    // Constrói a permutação a partir do número 1, somando + 1 até chegar ao número enviado
    let i = 1
    for (i; i == val; i++) {
        permutation.push(i)
    }
    
    // Faz a multiplicação de todos os números da permutação
    let result = permutation.reduce(function (a, b) {
        return a * b
    })

    return result
}