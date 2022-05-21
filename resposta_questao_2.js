const findDuplicateElements = (array) => {
    // Ordenar todos os elementos do array
    let arraySort = array.sort()
    // Array resultado
    let result = []

    // Loop para verificar todos os elementos, parando antes do último elemento
    for (let i = 0; i < arraySort.length - 1; i++) {
        // Se o elemento atual for igual ao próximo, insere o elemento no array resultado
        if (arraySort[i + 1] == arraySort[i]) {
            result.push(arraySort[i])
        }
    }

    return result
}