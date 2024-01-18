//  ::::::::::::::::: Desafio 01 - Loops e Tentativas :::::::::::::::::

// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;
while(contador <= 10){
    console.log(contador);
    contador++;
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador2 = 10;
while(contador >= 0){
    console.log(contador2);
    contador--;
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numeroRegressao = prompt('Digite um número para a contagem regressiva: ');
while(numeroRegressao >= 0){
    console.log(numeroRegressao);
    numeroRegressao--;
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numeroProgressao = prompt('Digite um número para a contagem progressiva: ')
let contador3 = 0;
while(contador3 <= numeroProgressao){
    console.log(contador3)
    contador3++;
}