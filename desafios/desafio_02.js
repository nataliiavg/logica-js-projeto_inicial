//  ::::::::::::::::: Desafio 02 - Condicionais e Concatenação :::::::::::::::::

// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt("Qual é o dia da semana? ");
if (diaDaSemana == "Sábado" || diaDaSemana == "Domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numeroDigitado = prompt("Digite um número positivo ou negativo");
if (numeroDigitado > 0) {
  alert("Número positivo!");
} else {
  alert("Número negativo!");
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = 100;
if (pontuacao >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}

// Crie uma mensagem que informa ao usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoConta = 1000.5;
alert(`Seu saldo é de ${saldoConta} reais.`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt("Digite seu nome: ");
alert(`Bem vindo(a), ${nome}!`);
