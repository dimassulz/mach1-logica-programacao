/**
 * Montar um programa onde deve verificar o array de idades informado, 
 * criar uma condicional verificando se existe idade maior do que 18 anos 
 * e quais são os no array da idade maior que 18.
 * a saida do programa serão os indices do array
 */

const idades = [12, 20, 15, 17, 19];

//USANDO O FOREACH
idades.forEach(function (idade, indice) {
    if (idade > 18) {
        return console.log(`${indice} - ${idade}`);
    }
})

//USANDO O FOR
for (let i = 0; i <= idades.length; i++) {
    if (idades[i] > 18) {
        console.log(`${i} - ${idades[i]}`);
    }
}
/**
 let resultado = '';
idades.forEach((idade, indice) => {
    if (idade > 18) {
        resultado += `${indice} - ${idade} \n`;
    }
});

console.log(resultado)
*/