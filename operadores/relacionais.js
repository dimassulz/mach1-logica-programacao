let valor1 = 20;
let valor2 = 40;


console.log(valor1 > valor2); //false
console.log(valor1 >= valor2); //false
console.log(valor1 < valor2); //true
console.log(valor1 <= valor2); //true
console.log(valor1 == valor2); //false
console.log(valor1 != valor2); //true

let valor3 = "40"; // um igual = é atribuição de valor
console.log("igualdade/diferença");
console.log(valor2 == valor3); //true
console.log(valor2 != valor3); //false
console.log("extritamente igual/diferente compara o tipo do dado");
console.log(valor2 === valor3); //valor e tipos devem ser iguais
console.log(valor2 !== valor3); //tipo devem diferente

let estouEmAula = true;

console.log(estouEmAula); //true
//negação
console.log(!estouEmAula); //false

let texto1 = "Nota";
let texto2 = "Nota";

console.log(texto1 === texto2); //true