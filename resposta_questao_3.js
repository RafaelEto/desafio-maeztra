const sequences = ["{[()(){}[]]{}}", "{[(()]}", "{}[]()", "((){}[[])"]

// Função para criar um objeto para consumir durante a validação;
const refactor = () => {
    return {
        start: 0,
        end: 0,
        validate() {
            if (this.start != 0 && this.end != 0 && this.start == this.end)
                return true
            else
                return false
        }
    }
}

// Função que consome a string de caracteres, que consome a função criada anteriormente para realizar a contagem de caracteres da sequência
const validateSequence = (char) => {
    let keys = refactor();
    let brackets = refactor();
    let parentheses = refactor();

    for (let i = 0; i < char.length; i++) {
        switch(char.charAt(i)) {
            case '{':
                keys.start++;
                break;
            case '}':
                keys.end++;
                break;
            case '[':
                brackets.start++;
                break;
            case ']':
                brackets.end++;
                break;
            case '(':
                parentheses.start++;
                break;
            case ')':
                parentheses.end++;
                break;
        }
    }

    // Valida e retorna as sequências consumidas
    if (keys.validate() && brackets.validate() && parentheses.validate())
        return `${char} é uma sequência válida`
    else
        return `${char} não é uma sequência válida`
}

sequences.forEach(characters => {
    console.log(validateSequence(characters))
}) 