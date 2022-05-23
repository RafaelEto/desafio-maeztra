const yearsArray = (matrix) => {
    let array = matrix
    let arrayStart = []
    let arrayEnd = []
    let invalidYears = []

    // Cria dois arrays com os anos de começo de trabalho e aposentadoria e separa os inválidos
    array.forEach((element) => {
      if(element[0] > 0 && element[1] > 0 && element[0] < element[1]){
        arrayStart.push(element[0])
        arrayEnd.push(element[1])
      }else{
        invalidYears.push(element)
      }
    });

    // Criar variáveis para receber o maior ano de início e o menor ano de aposentadoria
    let startYear = Math.max(...arrayStart)
    let endYear = Math.min(...arrayEnd)

    if(startYear === endYear){
      console.log(`No ano de ${startYear} houveram mais pessoas trabalhando`)
    }else{
      console.log(`Do ano de ${startYear} à ${endYear} houveram mais pessoas trabalhando`)
    }
    console.log(`Dados invalidos:`, invalidYears)
}

console.log(yearsArray([[1960,2005],[1945,2008],[1938,1999],[-1, 1968]]))