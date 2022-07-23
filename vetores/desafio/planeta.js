//!Não tem entrada de dados do usuario!
/**
 Declare e inicialize um array chamado planetas com 5 posicoes, 
 exiba no console.log cada item do array e o índice em cada iteração.
 Ex de saída:
 terra - 0
 marte - 1
 */

const planetas = [
    "Terra",
    "Saturno",
    "Venus",
    "Marte",
    "Netuno"
];

for (let i = 0; i < planetas.length; i++) {
    console.log(`${planetas[i]} - ${i}`);
}
