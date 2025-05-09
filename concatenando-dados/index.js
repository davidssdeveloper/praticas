function manipularStrings() {
  // Recebe entradas de dados do usuário
  const primeiraString = prompt("Digite a primeira string:");
  const segundaString = prompt("Digite a segunda string:");

  // Verifica se o usuário forneceu alguma entrada
  if (primeiraString === null || segundaString === null) {
    console.log("Nenhuma string foi fornecida.");
    return; // Encerra a função se nenhuma string for inserida
  }

  // Concatena as strings
  const stringConcatenada = primeiraString + " " + segundaString;

  // Exibe o resultado
  console.log("Primeira string: ", primeiraString);
  console.log("Segunda string: ", segundaString);
  console.log("Strings concatenadas: ", stringConcatenada);
}

// Chama a função para executar o algoritmo
manipularStrings();
