//  ::::::::::::::::: Desafio 04 - Boas Práticas de Programação :::::::::::::::::

// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Boas-Vindas!');

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = 'Natalia';
console.log(`Olá, ${nome}!`);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Olá, ${nome}`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemDeProgramacaoPreferida = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagemDeProgramacaoPreferida);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 22;
let valor2 = 100;
resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 30;
let valor2 = 9;
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt('Digite a sua idade');

if(idade >= 18){
    console.log('Você é maior de idade');
} else {
    console.log('Você é menor de idade');
}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt('Digite um número');

if(numero > 0){
    console.log('O número digitado é positivo');
} else if(numero < 0) {
    console.log('O número digitado é negativo');
} else {
    console.log('O número digitado é 0');
}

// Use um loop while para imprimir os números de 1 a 10 no console.
let numero = 1;
while(numero <= 10){
    console.log(numero);
    numero++
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 9;
if(nota >= 7){
    console.log('Aprovado!');
} else {
    console.log('Reprovado!');
}

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio)

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroInteiroAleatorio2 = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiro2Aleatorio2)