/*
Elaborar um programa para receber dois valores e o tipo de operação (+ - * /)
Esse programa irá calcular a expressão entre esses dois valores
Utilizar o if para fazer
Verificar se são numeros  => caso informe um valor diferente de numero: DIGITE UM NUMERO VALIDO
Verificar se os simbolos são válidos => caso informe um simbolo diferente: Os símbolos válidos são + - * /
Executar o calculo conforme o esperado.
Exemplo de entrada:
Digite o valor 1:
10
Infome a operação(+ - * /) 
*
Digite o valor 2:
30

Exemplo de saida:
O resutado de 10 * 30 = 300
*/

const prompt = require('prompt-sync')();
let valor1, valor2, operador, resultado;

const MSG_ERRO_001 = 'DIGITE UM NÚMERO VÁLIDO';
const MSG_ERRO_002 = 'OPERADOR INVÁLIDO!!! Os símbolos válidos são + - * /';

//ENTRADA
//Ler 3 entradas => valor1, valor2 e operador
console.log('Digite o valor 1: ');
valor1 = Number(prompt());

console.log('Digite o valor 2: ');
valor2 = Number(prompt());

if (isNaN(valor1) || isNaN(valor2)) {
    return console.log(MSG_ERRO_002);
}

console.log('Digite um operador (+ - * /): ');
operador = prompt();

//PROCESSAMENTO
//Executar o calculo de acordo com o operador
//se o operador for igual a + executar a soma do valor1 + valor2

if (operador === '+') {
    resultado = valor1 + valor2;
} else if (operador === '-') {
    resultado = valor1 - valor2;
} else if (operador === '*') {
    resultado = valor1 * valor2;
} else if (operador === '/') {
    resultado = valor1 / valor2;
} else {
    return console.log(MSG_ERRO_OPERADOR_INVALIDO);
}

//SAIDA
//Mostrar saida: O resutado de valor1 operador valor2 = resultado
console.log(`O resutado de ${valor1} ${operador} ${valor2} = ${resultado}`);