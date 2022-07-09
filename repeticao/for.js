//declaracao, expressao , incremento/decremento
let valor;
let mostrarNumeros = '';
for (valor = 10; valor >= 0; valor--) { //expressao +=2
    mostrarNumeros += `${valor},`;
}
//10,9,8,7,6,5,4,3,2,1,
console.log(mostrarNumeros);