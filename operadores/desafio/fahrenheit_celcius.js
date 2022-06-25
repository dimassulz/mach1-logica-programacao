/**
 * Criar um programa para ler a temperatura em Fahrenheit e tranformar em Celcius
 * o calculo é: (Fahrenheit - 32) / 9 * 5
 */
const prompt = require('prompt-sync')();

console.log("Digite a temperatura em Fahrenheit: ");
let fahrenheit = prompt();
let calculoCelcius = (fahrenheit - 32) / 9 * 5;

console.log(calculoCelcius.toFixed(2));