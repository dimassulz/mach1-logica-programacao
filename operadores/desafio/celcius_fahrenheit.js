/**
 * Criar um programa para ler a temperatura em Celcius e tranformar em fahrenheit
 * o calculo é: Celcius * 1,8 + 32
 */
const prompt = require('prompt-sync')();

console.log("Digite o valor em Celcius: ");
let celcius = prompt();

//calculo
let celciusParaFahrenheit = (celcius * 1.8) + 32;

console.log("O valor de " + celcius + " celcius convertido para Fahrenheit é: ");
console.log(celciusParaFahrenheit.toFixed(1)+" Fahrenheit");