function calculadoraSimples() {
  // Solicita ao usuario que digite o primeiro número
  const primeiroNumeroString = prompt("Digite o primeiro número:");

  // Verifica se o usuário cancelou a entrada ou não digitou nada
  if (primeiroNumeroString === null || primeiroNumeroString.trim() === "") {
    console.log("Nenhum número foi digitado. Encerrando.");
    return; // Sai da função
  }

  // Converte a string do primeiro número para um número
  const primeiroNumero = parseInt(primeiroNumeroString);

  // Verifica se a conversão foi bem-sucedida. Se não, encerra.
  if (isNaN(primeiroNumero)) {
    console.log(
      "O primeiro valor digitado não é um número valido. Encerrando."
    );
    return; // Sai da função
  }

  // Solicita ao usuário que digite o segundo número
  const segundoNumeroString = prompt("Digite o segundo número:");

  // Verifica se o usuário cancelou a entrada ou não digitou nada
  if (segundoNumeroString === null || segundoNumeroString.trim() === "") {
    console.log("Nenhum número foi digitado. Encerrando.");
    return; // Sai da função
  }

  // Converte a string do segundo número para um número
  const segundoNumero = parseInt(segundoNumeroString);

  // Verifica se a conversão do segundo número foi bem-sucedida
  if (isNaN(segundoNumero)) {
    console.log("O segundo valor digitado não é um número válido. Encerrando.");
    return; // Sai da função
  }

  // Solicita ao usuário que digite a operação desejada
  const operacao = prompt("Digite a operação desejada (+, -, *, /):");

  // Verifica qual o usuário escolheu e realiza o cálculo
  let resultado; // Declara uma variável para armazenar o resultado

  switch (operacao) {
    case "+":
      resultado = primeiroNumero + segundoNumero;
      console.log(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
      break;
    case "-":
      resultado = Math.abs(primeiroNumero - segundoNumero);
      console.log(`${primeiroNumero} - ${segundoNumero} = ${resultado}`);
      break;

    case "*":
      resultado = primeiroNumero * segundoNumero;
      console.log(`${primeiroNumero} * ${segundoNumero} = ${resultado}`);
      break;
    case "/":
      // Verifica se o segundo número é zero antes de realizar a divisão
      if (segundoNumero === 0) {
        console.log("Erro! Dvisão por zero não é permitida.");
      } else {
        resultado = primeiroNumero / segundoNumero;
        console.log(`${primeiroNumero} / ${segundoNumero} = ${resultado}`);
      }
      break;
    default:
      console.log("Operação inválida.");
  }
}

// Chama a função para executar a calculadora
calculadoraSimples();
