function repetirString(texto, numeroRepeticoes) {
    // Verifica se o número de repetições é válido
    if (numeroRepeticoes <= 0 || !Number.isInteger(numeroRepeticoes)) {
        return ""; // Retorna uma string vazia para repetições inválidas
    }
    
    // Inicializar uma string vazia para armazenar o resultado
    let resultado = "";

    // Usa um loop para repetir a string o número de vezes especificado pelo usuário
    for (let i = 0; i < numeroRepeticoes; i++) {
        resultado += texto; // Concatenar a string original ao resultado em cada iteração
        
        // Adiciona um espaço após repetição, exceto na última string
        if (i < numeroRepeticoes - 1) {
            resultado += " ";
        }
    }

    // Retorna a string repetida
    return resultado;
}

const stringEntrada = prompt("Digite a string que você quer repetir:");
const numeroEntrada = parseInt(prompt("Digite o número de vezes para repetir:"));

const stringRepetida = repetirString(stringEntrada, numeroEntrada);

console.log("Resultado: ", stringRepetida);