/*
npm install prompt-sync
adicionar no .gitignore a pasta node_modules
Para testar, mudar a oConfiguracoes de extensao code runner - runner: Run In Terminal
https://www.codecademy.com/article/getting-user-input-in-node-js
*/
const prompt = require('prompt-sync')();
console.log('Digite a nota 1');
let nota1 = Number(prompt());

console.log('Digite a nota 2');
let nota2 = Number(prompt());

let calculo = (nota1+nota2)/2;

console.log("Média: " + calculo);